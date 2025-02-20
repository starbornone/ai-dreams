/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/starborn/**',
      },
      {
        protocol: 'https',
        hostname: 'ap-southeast-2.graphassets.com',
      },
    ],
  },
};

export default nextConfig;
