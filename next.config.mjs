/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    DATABASE_ID: process.env.DATABASE_ID,
    ACTIVITY_ID: process.env.ACTIVITY_ID,
    ANALYTICS_ID: process.env.ANALYTICS_ID,
    GALLERY_ID: process.env.GALLERY_ID,
    STARRED_ID: process.env.STARRED_ID,
    USERS_ID: process.env.USERS_ID,
    SITE_KEY: process.env.SITE_KEY,
    UPLOAD_AUTH: process.env.UPLOAD_AUTH,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "the-chiefly-lasagna.tixte.co",
      },
      {
        protocol: "https",
        hostname: "us-east-1.tixte.net",
      },
      {
        protocol: "https",
        hostname: "scontent-itm1-1.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
      },
      {
        protocol: "https",
        hostname: "image-proxy-1a78.onrender.com",
      },
    ],
  },
};

export default nextConfig;
