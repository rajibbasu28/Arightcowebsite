/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
      images: {
    unoptimized: true, // Disable server-based image optimization
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
