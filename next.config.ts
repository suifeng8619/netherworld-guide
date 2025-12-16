import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
        pathname: "/store_item_assets/**",
      },
      {
        protocol: "https",
        hostname: "cdn.akamai.steamstatic.com",
        pathname: "/steam/**",
      },
      {
        protocol: "https",
        hostname: "steamcdn-a.akamaihd.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
