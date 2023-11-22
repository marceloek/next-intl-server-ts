type ILocalesKey = 'en' | 'es' | 'ja' | 'pt'

const locales: ILocalesKey[] = ['en', 'es', 'ja', 'pt']

const localesFull: Record<ILocalesKey, string> = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  pt: 'Português',
}

export { locales, localesFull }

export type { ILocalesKey }
