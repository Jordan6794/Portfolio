/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = {
  ...nextConfig,
  i18n: {
    locales: ['en-US', 'ja_JP'],
    defaultLocale: 'en-US',
  },
}
