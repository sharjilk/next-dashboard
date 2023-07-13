/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alrajhi-urpay-demo.vaimo.net',
      },
    ],
  },
};

module.exports = nextConfig;
