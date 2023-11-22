import { ComponentPropsWithoutRef } from 'react'

import { IItemForwardProps } from '../Item'

interface IOwnProps extends ComponentPropsWithoutRef<'input'> {
  label: string
}

type IInputProps = IItemForwardProps & IOwnProps

export type { IInputProps }
