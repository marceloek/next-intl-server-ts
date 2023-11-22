import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface IColProps extends ComponentPropsWithoutRef<'div'> {
  span?: number
  offset?: number
}

export function Col(props: IColProps) {
  const { children, span = 12, offset = 0, ...divProps } = props

  return (
    <>
      {offset > 0 && <div className={`col-span-${offset}`} />}

      {span > 0 && (
        <div
          {...divProps}
          className={twMerge(`col-span-${span}`, divProps.className)}
        >
          {children}
        </div>
      )}
    </>
  )
}
