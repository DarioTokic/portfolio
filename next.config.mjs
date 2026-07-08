import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next ignores stray lockfiles elsewhere
  // (e.g. a leftover ~/package-lock.json).
  turbopack: { root: __dirname },
};

export default nextConfig;
