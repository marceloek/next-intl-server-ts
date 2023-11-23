'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { locales, localesFull } from '@/lib/locales'
import { replacePage } from '@/utils/parsePathname'

export function LocaleSwitcherMenu() {
  const { locale } = useParams<{ locale: string }>()
  const pathname = usePathname()

  return (
    <div className="dropdown-content z-[1] mt-4 w-52 overflow-y-auto rounded-box bg-base-300">
      <ul className="menu gap-1" tabIndex={0}>
        {locales.map(lang => {
          return (
            <li key={lang}>
              <Link
                href={replacePage(pathname, lang, 1)}
                className={locale === lang ? 'active' : ''}
              >
                <span className="badge badge-outline text-xs uppercase opacity-50">
                  {lang}
                </span>

                {localesFull[lang]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
