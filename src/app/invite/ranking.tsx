import { RankingCard } from '@/components/ranking-card'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <RankingCard position={1} userName="Emanuel Tavecia" indications={1128} />

      <RankingCard position={2} userName="Diego Fernandes" indications={1098} />

      <RankingCard
        position={3}
        userName="Rodrigo Gonçalves"
        indications={1022}
      />
    </div>
  )
}
