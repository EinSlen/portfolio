import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio-valentin', // Le nom de ton repo GitHub
    assetPrefix: '/portfolio-valentin/', // Préfixe pour les assets
    experimental: {
        optimizePackageImports: ['icon-library'],
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true
    },
};

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
