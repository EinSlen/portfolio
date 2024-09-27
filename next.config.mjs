/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'out',
    // basePath: '/portfolio',
    // assetPrefix: '/portfolio',
    experimental: {
        optimizePackageImports: ['icon-library'],
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true
    },
    swcMinify: true,
};

export default nextConfig;
