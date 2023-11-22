import { HTMLInputTypeAttribute } from 'react'

import { Input } from '../components/Form/Input'
import { Checkbox } from '../components/Form/Input/Checkbox'
import { IInputProps } from '../components/Form/Input/types'

export function inputChooser(type: HTMLInputTypeAttribute = 'text') {
  const options: Partial<
    Record<typeof type, (props: IInputProps) => JSX.Element>
  > = {
    text: Input,
    email: Input,
    password: Input,
    checkbox: Checkbox,
  }

  return options[type] ?? Input
}
