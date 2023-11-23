import { ComponentPropsWithoutRef } from 'react'

import { useTranslations } from 'next-intl'

import { inputChooser } from '@/utils/inputChooser'

export interface IItemForwardProps {
  name: string
}

interface IOwnProps extends ComponentPropsWithoutRef<'input'> {
  tr: string
  error?: boolean
}

type IItemProps = IItemForwardProps & IOwnProps

export function Item(props: IItemProps) {
  const { name, tr, error = false, ...inputProps } = props

  const t = useTranslations()

  const label = t(`${tr}.${name}.label`)

  const Input = inputChooser(inputProps.type)

  return (
    <>
      <label htmlFor={name} className="flex items-center">
        <Input {...inputProps} name={name} placeholder={label} label={label} />
      </label>

      {error && (
        <div className="mt-1 w-full font-mono text-xs text-error">
          {t('form.required')}
        </div>
      )}
    </>
  )
}
