/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'BRLathanJr',
    description: 'The store for BRLathanJr Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://brlathanjr.github.io/kasm-registry/',
    contactUrl: 'https://github.com/brlathanjr/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
