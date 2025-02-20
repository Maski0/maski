import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/maski", // Replace with your actual repo name
  assetPrefix: "/maski/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/maski", // Expose it to the frontend
  },
};

export default nextConfig;
