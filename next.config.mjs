/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'out',
    basePath: '/portfolio', // Utiliser le sous-répertoire
    assetPrefix: 'https://einslen.github.io/portfolio/',
    experimental: {
        optimizePackageImports: ['icon-library'],
        optimizeCss: true,
        optimisticClientCache: true,
        optimizeServerReact: true
    },
    swcMinify: true,
};

export default nextConfig;
