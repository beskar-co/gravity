/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites() {
    return [
      {
        source: '/docs',
        destination: 'http://localhost:3001/',
      },
    ];
  },
};

module.exports = nextConfig;
