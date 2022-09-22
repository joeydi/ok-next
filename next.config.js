/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["simple-creature-website-assets.s3.amazonaws.com"],
    },
};

module.exports = nextConfig;
