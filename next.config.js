// next.config.js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  distDir: "next",
  cssLoaderOptions: {
    url: false,
  },
});
