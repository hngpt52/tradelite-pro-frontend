/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  typescript: {
    // We'll handle TypeScript errors in the IDE
    ignoreBuildErrors: true,
  },
  eslint: {
    // We'll handle ESLint errors in the IDE
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
}

module.exports = nextConfig 