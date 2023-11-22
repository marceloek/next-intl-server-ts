import { twMerge } from 'tailwind-merge'

import { IInputProps } from './types'

export function Checkbox(props: IInputProps) {
  const { name, className, label, ...inputProps } = props

  return (
    <>
      <input
        {...inputProps}
        id={name}
        name={name}
        type="checkbox"
        className={twMerge('checkbox mr-2', className)}
      />

      {label}
    </>
  )
}
