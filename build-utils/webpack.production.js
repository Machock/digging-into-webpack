const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = mode => {
  return {
    output: {
      filename: "[hash].js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()]
  };
};
