
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;