const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    loader: "default",  // Use default loader for Next.js images
    path: "/",           // The base path for images
  },
  // Any additional configurations can be added here.
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
          dest: "public",  // The directory where the service worker and PWA-related files are stored
          runtimeCaching,   // Use runtime caching to cache resources for offline access
        },
      },
    ],
  ],
  nextConfig
);
