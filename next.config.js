/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/demo',
  assetPrefix: `/demo/`,
  generateEtags: false,
  poweredByHeader: false,
  trailingSlash: false,
  compress: true,
  inlineImageLimit: false,
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ['en_US'],
    defaultLocale: 'en_US'
  }
}

module.exports = nextConfig
