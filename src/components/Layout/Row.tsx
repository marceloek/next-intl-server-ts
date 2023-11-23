import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { IGap, createGap } from '@/utils/createGap'

import { Col } from './Col'

export interface IRowProps extends ComponentPropsWithoutRef<'div'> {
  gap?: IGap
  offset?: number
}

export function Row(props: IRowProps) {
  const { children, gap = [3, 4], offset = 0, ...divProps } = props

  return (
    <div
      {...divProps}
      className={twMerge(
        createGap(gap),
        'grid grid-cols-24',
        divProps.className,
      )}
    >
      <Col span={offset} />

      {children}
    </div>
  )
}
