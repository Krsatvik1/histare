/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-histare.netlify.app',
      },
    ],
  },
};

module.exports = nextConfig;
