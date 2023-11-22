import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { IPROJECT } from '@/types/enum'

import { Countdown } from './Countdown'
import { LocaleSwitcher } from './LocaleSwitcher'
import { Menu } from './Menu'
import { Search } from './Search'

interface IProps {
  locale: string
}

export function Header({ locale }: IProps) {
  const t = useTranslations('header')

  return (
    <header>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <Menu t={t} />
        </div>

        <div className="navbar-center">
          <Link
            href={`/${locale}`}
            className="btn btn-ghost text-xl normal-case"
          >
            {IPROJECT.name}
          </Link>
        </div>

        <div className="navbar-end">
          <Countdown t={t} />

          <Search t={t} />

          <LocaleSwitcher t={t} />
        </div>
      </nav>
    </header>
  )
}
