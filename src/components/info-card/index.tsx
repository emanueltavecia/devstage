import { InfoCardProps } from './types'

export function InfoCard({ value, description, Icon }: InfoCardProps) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7">
      <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
        {value}
      </span>
      <span className="text-center text-sm leading-none text-gray-300">
        {description}
      </span>
      <Icon className="text-purple absolute top-3 left-3 size-5" />
    </div>
  )
}
