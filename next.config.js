// next.config.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  serverRuntimeConfig: {
    // Will only be available on the server side
    USER: "mike@gamaroff.net",
    PASS: "gmFc9YsaquRK",
  },
  distDir: ".next",
  target: "serverless",
  cssLoaderOptions: {
    url: false,
  },
});
