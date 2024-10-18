/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: false,
    distDir: "out",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    swcMinify: true,
};

export default nextConfig;