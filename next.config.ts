/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/systems',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
