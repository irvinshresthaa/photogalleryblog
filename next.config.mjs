import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  // Your Next.js configuration options go here
};

const withPwaConfig = withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

export default {
  ...nextConfig,
  ...withPwaConfig,
};
