const { merge } = require("webpack-merge");
const path = require("path");
const webpackConfig = require("../../webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackConfig, {
  entry: {
    index: path.resolve(__dirname, "./index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
        {
            test: /\.tsx$/,
            loader: 'babel-loader',
            options: {
              'presets': [["@babel/preset-react", {
                "runtime": "automatic"
              }],
              '@babel/preset-typescript']
            }
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
