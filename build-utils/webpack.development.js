module.exports = mode => {
  return {
    devtool: "source-map",
    mode,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  };
};
