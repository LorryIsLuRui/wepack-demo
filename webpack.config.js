const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    home: "./src/home.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    port: 3000,
    publicPath: "/build/",
    open: true,
    overlay: true,
  },
};
