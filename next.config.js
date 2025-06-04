/** @type {import('next').NextConfig} */
const repo = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  images: {},
  output: 'export',
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
