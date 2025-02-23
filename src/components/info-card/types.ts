import { ComponentType, RefAttributes } from 'react'

import { LucideProps } from 'lucide-react'

export interface InfoCardProps {
  value: number | string
  description: string
  Icon: ComponentType<LucideProps & RefAttributes<SVGSVGElement>>
}
