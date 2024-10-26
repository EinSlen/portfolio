/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async headers() {
    return [
      {
        source: '/_next/static/(.*)', // Cible les fichiers statiques de Next.js
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache pour un an
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000000).toUTCString(), // Expire dans un an
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
