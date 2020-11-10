// Dependencies
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const { isDev } = require("./environment");

const mainConfig = {
  dev: isDev,
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = withPlugins(
  [withOptimizedImages, withSass, withCSS],
  mainConfig
);
