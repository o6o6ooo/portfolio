import type { NextConfig } from "next";

// Node can expose an incomplete global localStorage when no storage file is set.
// This app only uses browser storage on the client, so hide it from SSR.
Reflect.deleteProperty(globalThis, "localStorage");

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
