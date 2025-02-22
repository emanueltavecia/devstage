import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

import { InfoCard } from '@/components/info-card'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <InfoCard
        value="1042"
        description="Acessos ao link"
        Icon={MousePointerClick}
      />
      <InfoCard
        value="1042"
        description="Inscrições feitas"
        Icon={BadgeCheck}
      />
      <InfoCard value="3º" description="Posição no ranking" Icon={Medal} />
    </div>
  )
}
