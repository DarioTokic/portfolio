/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ESLint isn't configured in this project; don't block production builds on it.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
