import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    // output: 'export', // Should be commented out when developing locally
    basePath: process.env.BASE_PATH || '',
    assetPrefix: process.env.BASE_PATH || '',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

export default withMDX(config);
