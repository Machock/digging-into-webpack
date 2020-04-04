const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfigs = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js",
        chunkFilename: "[name].chunk.js"
      },
      plugins: [
        new htmlWebpackPlugin({
          meta: {
            title: "App Test",
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
          }
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    presetConfigs({ mode, presets })
  );
};
