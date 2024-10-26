/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
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
