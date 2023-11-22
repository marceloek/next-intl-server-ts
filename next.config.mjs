// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

import withNextIntl from 'next-intl/plugin'

export default withNextIntl('./i18n.ts')({
  reactStrictMode: true,
})
