import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Emit /contact/index.html instead of /contact.html so a plain Apache host
  // (IONOS Web Hosting) serves every page without rewrite rules
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;