import { RankingCard } from '@/components/ranking-card'
import { Position } from '@/components/ranking-card/types'
import { getRanking } from '@/http/api'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      {ranking.map((item, i) => (
        <RankingCard
          key={i}
          position={(i + 1) as Position}
          userName={item.name}
          indications={item.score}
        />
      ))}
    </div>
  )
}
