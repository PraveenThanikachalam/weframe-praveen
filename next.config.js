/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname:'images.unsplash.com'
          },{
            hostname: 'cms.weframetech.com'
          }
        ],
      }
}

module.exports = nextConfig
