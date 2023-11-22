import { randomUUID } from 'node:crypto'
import { Key } from 'react'

import { useTranslations } from 'next-intl'

export interface ITableColumn<IT> {
  key: keyof IT
}

interface ITableProps<IT> {
  data: IT[]
  columns: ITableColumn<IT>[]
  tr: string
}

export function Table<IT>(props: ITableProps<IT>) {
  const { data, columns, tr } = props

  const t = useTranslations(tr)

  return (
    <div className="overflow-x-auto rounded-md border-2 border-base-200">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {columns.map(column => {
              return <th key={column.key as Key}>{t(column.key)}</th>
            })}
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {data.map(item => {
            const row = columns.map(column => {
              return (
                <td key={column.key as Key}>
                  {item[column.key] as React.ReactNode}
                </td>
              )
            })

            return (
              <tr key={randomUUID()} className="hover:bg-base-200">
                {row}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
