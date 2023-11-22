import createMiddleware from 'next-intl/middleware'

import { locales } from './lib/locales'

export default createMiddleware({
  locales,
  defaultLocale: 'pt',
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
