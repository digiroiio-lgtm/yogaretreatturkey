import type { NextConfig } from "next";

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "media-src 'none'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'"
]
  .join("; ")
  .concat(";");

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        // Retired: the Muğla province segment had negligible English search demand
        // and cannibalised the Fethiye / Bodrum / Kaş destination pages.
        source: "/yoga-retreats/turkey/mugla",
        destination: "/yoga-retreats/turkey",
        permanent: true
      },
      {
        source: "/yoga-retreats/turkey/mugla/:type",
        destination: "/yoga-retreats/turkey",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy
          }
        ]
      }
    ];
  }
};

export default nextConfig;
