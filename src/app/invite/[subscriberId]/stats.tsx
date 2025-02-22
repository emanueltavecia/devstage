import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

import { StatsProps } from './types'

import { InfoCard } from '@/components/info-card'
import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <InfoCard
        value={accessCount}
        description="Acessos ao link"
        Icon={MousePointerClick}
      />
      <InfoCard
        value={inviteCount}
        description="Inscrições feitas"
        Icon={BadgeCheck}
      />
      <InfoCard
        value={rankingPosition ? `${rankingPosition}º` : '-'}
        description="Posição no ranking"
        Icon={Medal}
      />
    </div>
  )
}
