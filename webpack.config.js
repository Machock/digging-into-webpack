const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
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
      resolve: {
        extensions: [".js", ".jsx"],
        alias: {}
      },
      module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-react"]
                }
              }
            ]
          },
          {
            oneOf: [
              {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve("url-loader"),
                options: {
                  limit: 5000,
                  name: "static/media/[name].[hash:8].[ext]"
                }
              },
              {
                loader: require.resolve("file-loader"),
                exclude: [/\.(js|mjs|jsx|ts|tsx|css)$/, /\.html$/, /\.json$/],
                options: {
                  name: "static/media/[name].[hash:8].[ext]"
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new CopyPlugin([{ from: "public/static", to: "static" }]),
        new htmlWebpackPlugin({
          title: "React App",
          template: "public/index.html"
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    presetConfigs({ mode, presets })
  );
};
