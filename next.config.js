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
      },
      webpack: (config, { dev, isServer }) => {
        // Use a different devtool for production builds
        config.devtool = dev ? 'eval-source-map' : 'source-map';
    
        // Set mode to production for optimized builds
        config.mode = dev ? 'development' : 'production';
    
        return config;
      }
}

module.exports = nextConfig
