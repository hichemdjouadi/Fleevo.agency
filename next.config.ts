import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
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
