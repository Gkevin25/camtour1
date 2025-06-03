/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fra.cloud.appwrite.io',
        port: '',
        pathname: '/v1/storage/buckets/**',
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        port: '',
        pathname: '/v1/storage/buckets/**',
      },
      // Add other Appwrite regions if needed
      {
        protocol: 'https',
        hostname: '*.appwrite.io',
        port: '',
        pathname: '/v1/storage/buckets/**',
      }
    ],
  },
};

export default nextConfig;
