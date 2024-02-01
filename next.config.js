/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/base-path',
  assetPrefix: `/base-path/`,
  i18n: {
    locales: ['en-us', 'en-gb'],
    defaultLocale: 'en-us'
  }
}

module.exports = nextConfig;
