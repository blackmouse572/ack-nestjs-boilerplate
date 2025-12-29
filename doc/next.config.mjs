import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    output: 'export', // Should be commented out when developing locally
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
};

export default withMDX(config);
