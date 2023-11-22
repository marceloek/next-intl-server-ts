import { AlignLeftIcon, ChevronDownIcon } from 'lucide-react'

import Link from 'next/link'

import { routes } from '@/lib/routes'
import { ITranslateProps } from '@/types/translate'

export function Menu({ t }: ITranslateProps) {
  return (
    <div title={t('nav.title')} className="dropdown">
      <div tabIndex={0} className="btn btn-ghost">
        <AlignLeftIcon size={20} />

        <ChevronDownIcon size={12} />
      </div>

      <div className="dropdown-content z-[1] mt-4 w-52 overflow-y-auto rounded-box bg-base-300">
        <ul className="menu gap-1" tabIndex={0}>
          {routes.map(item => {
            return (
              <li key={item}>
                <Link href={item}>{t(`nav.${item}`)}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
