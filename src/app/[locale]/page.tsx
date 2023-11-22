import { useTranslations } from 'next-intl'

export default function RootPage() {
  const t = useTranslations('home')

  return t('title')
}
