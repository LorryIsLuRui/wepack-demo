const { merge } = require("webpack-merge");
const path = require("path");
const webpackConfig = require("../../webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackConfig, {
  entry: {
    index: path.resolve(__dirname, "./src/index"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g)/,
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              disable: false, // 生产环境才启用，此处为了测试
            //   mozjpeg: {
            //     quality: 10,
            //   },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "index.html"),
      chunks: ["index"],
    }),
  ],
});
