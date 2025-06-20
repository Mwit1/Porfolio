/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",                  // Your app source folder
  assetsBuildDirectory: "public/build", // Where built assets go
  publicPath: "/build/",                // URL path to the built assets
  serverBuildDirectory: "build",        // Server build output folder
  devServerPort: 8002,                  // You can customize dev server port if needed

  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
};
