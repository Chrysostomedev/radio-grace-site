import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'rge-radio.duckdns.org',
      },
      {
        protocol: 'https',
        hostname: 'rge-radio.duckdns.org',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.85',
      },
    ],
  },
};

export default nextConfig;