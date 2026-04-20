import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable Turbopack to avoid path caching bugs on Windows
    // when project directory was previously opened from a different drive
  },
};

export default nextConfig;
