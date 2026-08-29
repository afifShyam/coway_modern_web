/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coway.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'emall.coway.com.my',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
