// Import the necessary module
import withPWA from "next-pwa";

// Define the PWA configuration
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
};

// Define the Next.js configuration
const nextConfig = {
  output: "export", // Injecting the output property
  // other Next.js config options
};

// Merge the configurations
const finalConfig = {
  ...nextConfig,
  pwa: pwaConfig,
};

// Export the configuration

export default {
  future: {
    webpack5: true,
  },
  // other Next.js config options
  finalConfig,
};
