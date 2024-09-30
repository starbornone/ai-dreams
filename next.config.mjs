/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/starborn/**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
};

export default nextConfig;
