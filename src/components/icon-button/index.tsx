import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export function IconButton({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className={twMerge(
        'text-blue hover:bg-blue cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900',
        className,
      )}
      {...props}
    />
  )
}
