const {merge} = require('webpack-merge');
const path = require('path');
const webpackConfig = require('../../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(
    webpackConfig,
    {
        entry : {
            index: path.resolve(__filename, './src/index')
        },
        output: {
            path: path.resolve(__filename, 'build'),
            filename: "[name].[hash].js"
        },
        module: {
            rules: [
                {
                    test: /\.png/,
                    type: 'asset/resource',
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    filename: 'index.html',
                    template: path.resolve(__filename, 'index.html'),
                    chunks: ['index'],
                }
            )
        ]
    }
)