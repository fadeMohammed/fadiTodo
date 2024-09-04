// Import the necessary module
import withPWA from "next-pwa";

// Define the PWA configuration
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
};

// Export the configuration
export default withPWA(pwaConfig);
