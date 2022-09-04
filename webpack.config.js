const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    home: "./src/home.js",
  },
   // 生成原始代码 方便调试
  devtool: 'eval-cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    port: 3000,
    // publicPath: "/build/",
    open: true,
    // overlay: true,
  },
  experiments: {
    topLevelAwait: true,
    futureDefaults: true,
  }
};
