import { SearchIcon } from 'lucide-react'

import { ITranslateProps } from '@/types/translate'

export interface ISearchProps extends ITranslateProps {
  callback?: () => void
}

export function Search({ callback, t }: ISearchProps) {
  return (
    <div title={t('search.title')} className="btn btn-ghost">
      <SearchIcon size={20} onClick={callback} />
    </div>
  )
}
