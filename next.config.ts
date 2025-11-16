import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
    basePath: '/ceramic-panic',
    assetPrefix: '/ceramic-panic',
    images: {
      unoptimized: true
    }
};

export default nextConfig;
