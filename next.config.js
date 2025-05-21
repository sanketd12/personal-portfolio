/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/personal-portfolio',
    assetPrefix: '/personal-portfolio/',
    trailingSlash: true,
    images: {
      domains: ['assets.aceternity.com'],
      unoptimized: true,
    },
  }
  
  module.exports = nextConfig