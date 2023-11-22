import { ChevronDownIcon, LanguagesIcon } from 'lucide-react'

import { ITranslateProps } from '@/types/translate'

import { LocaleSwitcherMenu } from './Menu'

export function LocaleSwitcher({ t }: ITranslateProps) {
  return (
    <div title={t('locale_switcher.title')} className="dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-ghost">
        <LanguagesIcon size={20} />

        <ChevronDownIcon size={12} />
      </div>

      <LocaleSwitcherMenu />
    </div>
  )
}
