/** @type {import('next').NextConfig} */
const nextConfig = {

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.weframetech.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
