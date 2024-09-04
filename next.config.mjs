
// After
import withPWA from "next-pwa";

// Before
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
};

export default withPWA(pwaConfig);
