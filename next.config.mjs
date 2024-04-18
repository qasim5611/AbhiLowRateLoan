/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    // serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
};

export default nextConfig;
