import dayjs from 'dayjs'

import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="footer footer-center bg-base-100 p-4 text-base-content">
      <aside>
        <p>{t('copyright', { date: dayjs().year() })}</p>
      </aside>
    </footer>
  )
}
