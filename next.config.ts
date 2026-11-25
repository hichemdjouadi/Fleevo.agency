import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/systems",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/start",
        destination: "/contact?mode=scope",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
