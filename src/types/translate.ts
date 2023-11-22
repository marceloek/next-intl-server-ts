import { Formats, TranslationValues } from 'next-intl'

type ITranslate = (
  key: string,
  values?: TranslationValues,
  formats?: Partial<Formats>,
) => string

interface ITranslateProps {
  t: ITranslate
}

export type { ITranslate, ITranslateProps }
