/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/base-path',
  assetPrefix: `/base-path/`,
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

module.exports = nextConfig;
