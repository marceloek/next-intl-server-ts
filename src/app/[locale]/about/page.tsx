import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')

  return <p>{t('title')}</p>
}
