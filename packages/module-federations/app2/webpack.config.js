const path = require("path");
const { merge } = require("webpack-merge");
const webpackConfig = require("../../../webpack.config");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: false,
  entry: path.resolve(__dirname, "./src/main"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  experiments: {
    topLevelAwait: true,
},
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        App1: "app1@http://localhost:8001/dist/index1.js",
      },
    }),
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "public/index.html",
    //   chunks: ["app2"],
    // }),
    new HtmlWebpackPlugin(),
  ],
  // MF 应用资源提供方必须以 http(s) 形式提供服务
  // 所以这里需要使用 devServer 提供 http(s) server 能力
  devServer: {
    port: 8002,
    hot: true,
    open: true,
  },
//   experiments: {
//     topLevelAwait: true,
//     futureDefaults: true,
//   },
});
