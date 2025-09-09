// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Existing config
  images: {
    domains: ["www.material-tailwind.com"],
  },

  // ✅ Proxy API requests to backend (running on port 3000)
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
