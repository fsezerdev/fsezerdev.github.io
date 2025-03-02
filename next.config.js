/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages için özel ayar
  basePath: process.env.NODE_ENV === 'production' ? '/fsezerdev.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fsezerdev.github.io/' : '',
}

module.exports = nextConfig 