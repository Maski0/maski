import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/maski", // Replace with your actual repo name
  assetPrefix: "/maski/",
  publicRuntimeConfig: {
    basePath: "/maski",
  },
};

export default nextConfig;
