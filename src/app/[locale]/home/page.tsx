import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('home')

  return <p>{t('title')}</p>
}
