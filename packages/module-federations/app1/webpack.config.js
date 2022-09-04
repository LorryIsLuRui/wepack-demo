const path = require('path');
const { merge } = require("webpack-merge");
const webpackConfig = require('../../../webpack.config');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = merge(
    webpackConfig,
    {
        mode: 'development',
        devtool: false,
        entry: {
            app1: path.resolve(__dirname, './src/main')
        },
        experiments: {
            topLevelAwait: true,
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            // 必须指定产物的完整路径，否则使用方无法正确加载产物资源
            publicPath: `http://localhost:8001/dist/`,
            // publicPath: auto`,
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'app1',
                filename: 'index1.js',
                exposes: {
                    "./util": "./packages/module-federations/app1/src/util.js"
                }
            })
        ],
        // MF 应用资源提供方必须以 http(s) 形式提供服务
      // 所以这里需要使用 devServer 提供 http(s) server 能力
      devServer: {
        port: 8001,
        hot: true,
      },
    }
)