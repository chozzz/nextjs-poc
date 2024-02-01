/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/base-path',
  assetPrefix: `/base-path/`,
  i18n: {
    locales: ['en_US'],
    defaultLocale: 'en_US'
  }
}

module.exports = nextConfig;
