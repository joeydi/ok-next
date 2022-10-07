/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["simple-creature-website-assets.s3.amazonaws.com", "okaypl.us"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: /size/,
            loader: "img-size-loader",
        });

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resource: { not: /icons/ },
            resourceQuery: { not: /size/ },
            type: "asset",
        });

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resource: /icons/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        });

        return config;
    },
    async redirects() {
        return [
            {
                source: "/assets/img/blog/:file*",
                destination: "https://simple-creature-website-assets.s3.amazonaws.com/okayplus/archive/:file*",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
