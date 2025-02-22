import { ComponentProps } from 'react'

export type InputFieldProps = ComponentProps<'input'>

export interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export type InputIconProps = ComponentProps<'span'>
