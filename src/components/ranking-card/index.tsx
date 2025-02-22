import Image from 'next/image'

import { getMedalImageFromPosition } from './rules'
import { RankingCardProps } from './types'

export function RankingCard({
  position,
  userName,
  indications,
}: RankingCardProps) {
  return (
    <div className="space-y-4">
      <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
        <span className="text-sm leading-none text-gray-300">
          <span className="font-semibold">{position}º</span> | {userName}
        </span>

        <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
          {indications}
        </span>

        <Image
          src={getMedalImageFromPosition(position)}
          alt="Medalha de Ouro"
          className="absolute top-0 right-8"
        />
      </div>
    </div>
  )
}
