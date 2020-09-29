const webpack = require("webpack");
// eslint-disable-next-line import/no-extraneous-dependencies
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
};

const mainConfig = {
  ...nextConfig,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/i,
      use: "raw-loader",
    });

    // config.plugins.push(
    //   new webpack.optimize.LimitChunkCountPlugin({
    //     maxChunks: 1,
    //   })
    // );

    // config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
};

module.exports = withPlugins([withSass, withImages, withCSS], mainConfig);
