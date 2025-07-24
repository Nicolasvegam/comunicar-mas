/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'www.comunicarmas.cl', 'images.unsplash.com'],
  },
}

module.exports = nextConfig