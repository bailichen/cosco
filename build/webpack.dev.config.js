const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const os = require("os");
const networkInterfaces = os.networkInterfaces();

const buddha = require('./buddha');

let ip = "";
for (var key in networkInterfaces) {
    networkInterfaces[key].forEach(item => {
        if (!item.internal && item.family === "IPv4") {
            ip = item.address;
        }
    });
}

const port = 15000;

const {
    host,
    domain
} = require('./env');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: ip,
        port,
        hot: true,
        open: true,
        historyApiFallback: true,
        quiet: true,
    },
    output: {
        path: path.resolve('dev'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: "#cheap-module-source-map",
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    ...buddha,
                ],
                notes: [
                    `Welcome Developer!`,
                    ``,
                    `Your app is running at http://${ip}:${port}`,
                    `And Your requests will post to >>> dev.${host==='default'?'ci':host}`
                ],
            },
            overlay: true
        }),
    ]
});
