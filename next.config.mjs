/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['icon-library'],
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true
    },
};

export default nextConfig;
