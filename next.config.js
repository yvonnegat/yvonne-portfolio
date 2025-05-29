/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔥 This is essential for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // ✅ Helps with routing on GitHub Pages
};

module.exports = nextConfig;
