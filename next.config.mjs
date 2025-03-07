/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/api/v1/projects/**",
      },
      {
        protocol: "https",
        hostname: "cms-backend-ivdl.onrender.com",
        pathname: "/api/v1/gallery/image/**",
      },
    ],
  },
};

export default nextConfig;
