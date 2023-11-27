/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    /*dominio de cloudinary */
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
