/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      unoptimized: true,
    },
  },
  images: { loader: "custom" },
}

module.exports = nextConfig
