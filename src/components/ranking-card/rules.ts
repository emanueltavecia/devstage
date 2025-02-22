import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import { Position } from './types'

import medalCooper from '../../assets/medal-cooper.svg'
import medalGold from '../../assets/medal-gold.svg'
import medalSilver from '../../assets/medal-silver.svg'

export function getMedalImageFromPosition(position: Position): StaticImport {
  switch (position) {
    case 1:
      return medalGold
    case 2:
      return medalSilver
    case 3:
      return medalCooper
  }
}
