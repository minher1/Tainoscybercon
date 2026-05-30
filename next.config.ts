import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tainoscybercon.com" },
    ],
  },
};

export default nextConfig;
