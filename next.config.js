/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('aws-sdk', 'aws-amplify', '@prisma/client');
    }
    return config;
  },
};
