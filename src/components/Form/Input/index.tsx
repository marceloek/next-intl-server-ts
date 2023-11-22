import { twMerge } from 'tailwind-merge'

import { IInputProps } from './types'

export function Input(props: IInputProps) {
  const { name, className, ...inputProps } = props

  return (
    <input
      {...inputProps}
      id={name}
      name={name}
      className={twMerge('input input-bordered w-full', className)}
    />
  )
}
