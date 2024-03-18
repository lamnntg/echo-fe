/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {
    source: "/_next/image(.*)",
    key: "Cache-Control",
    value: "public, max-age=300, s-maxage=300, stale-while-revalidate=300",
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
