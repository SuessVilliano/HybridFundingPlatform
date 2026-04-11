import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel serverless deployment
  output: "standalone",

  // Image optimization via Vercel
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Security headers handled in vercel.json, but also set here for dev
  poweredByHeader: false,

  // Strict mode for React
  reactStrictMode: true,
};

export default nextConfig;
