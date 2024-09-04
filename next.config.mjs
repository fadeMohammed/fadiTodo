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

// Export the configuration
export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});
