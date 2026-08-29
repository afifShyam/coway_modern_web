/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coway.cc',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
