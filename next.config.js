/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is crucial for shared hosting
  trailingSlash: false,
  images: {
    unoptimized: true, // Shared hosting often lacks the libraries for Next.js Image Optimization
  },
}

module.exports = nextConfig