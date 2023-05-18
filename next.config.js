/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "external-content.duckduckgo.com",
      "i.pravatar.cc",
      "lh3.googleusercontent.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
