import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensures trailing slashes are handled consistently
  trailingSlash: false,
};

export default nextConfig;