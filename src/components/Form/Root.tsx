'use client'

import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IGap, createGap } from '@/util/createGap'

interface IGenericFormProps extends ComponentPropsWithoutRef<'form'> {
  title?: string
  gap?: IGap
}

export function Root(props: IGenericFormProps) {
  const { children, title = '', gap = 4, ...restProps } = props

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const formValues: Record<string, FormDataEntryValue> = {}

    formData.forEach((value, key) => (formValues[key] = value))

    console.log('formValues:', formValues)
  }

  return (
    <form
      {...restProps}
      onSubmit={handleSubmit}
      className={twMerge(
        'm-auto w-96 rounded-lg border-2 border-base-200 bg-base-100',
        restProps.className,
      )}
    >
      {title && (
        <h1 className="rounded-t-md bg-base-200 p-4 text-center text-lg">
          {title}
        </h1>
      )}

      <div className={twMerge('grid p-6', createGap(gap))}>{children}</div>
    </form>
  )
}
