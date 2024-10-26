/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
        ],
      },
    ];
  },
  typescript: {
    // TODO: Remove it for later
    ignoreBuildErrors: true,
  },
  eslint: {
    // TODO: Remove it for later
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
