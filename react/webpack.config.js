const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        index: "./src/index/index"
    },
    output: {
        // [name] 文件名
        // [contenthash] 根据文件内容生成的hash
        // [id] 内部chunkid
        // filename 支持函数
        // 此选项不会影响那些「按需加载 chunk」的输出文件。它只影响最初加载的输出文件。对于按需加载的 chunk 文件，请使用 output.chunkFilename 选项来控制输出。通过 loader 创建的文件也不受影响。
        filename: '[name].[contenthash].bundle.js',
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        compress: true,
        port: 9000,
    },
}
module.exports=config;