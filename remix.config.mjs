// remix.config.mjs

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build/index.js",
  devServerPort: 8002,

  // ✅ Required for deploying to Cloudflare Pages
  output: "static",

  // ✅ Opting into upcoming Remix v3 behavior
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
};
