import { useTranslations } from 'next-intl'
import Link, { LinkProps } from 'next/link'

interface ILinkProps extends LinkProps {
  tr: string
}

export function LinkText(props: ILinkProps) {
  const { tr, ...linkProps } = props

  const t = useTranslations()

  return (
    <Link {...linkProps} className="link-primary link">
      {t(tr)}
    </Link>
  )
}
