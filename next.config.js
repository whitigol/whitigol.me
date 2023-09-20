/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcFileReading: true,
    },
    images: {
        domains: ['i.imgur.com'],
    },
};

module.exports = nextConfig;
