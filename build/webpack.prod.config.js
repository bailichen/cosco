const path = require('path');

const baseCfg = require('./webpack.base.config');

const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const buddha = require('./buddha');
const {
    host,
    domain
} = require('./env');

let notes = [];

switch (domain) {
    case 'development':
        {
            notes = [
                `Welcome Developer!`,
                ``,
                `Compile Successful!`,
                `Your requests will post to >>> dev.${host==='default'?'ci':host}`
            ];
            break;
        }
    case 'test':
        {
            notes = [
                `Welcome Test Engineer`,
                ``,
                `Compile Successful!`,
                `Your requests will post to >>> test.${host==='default'?'st1':host}`
            ];
            break;
        }
    case 'production':
        {
            notes = [
                `Compile Successful!`
            ];
            break;
        }

}


module.exports = merge(baseCfg, {
    mode: 'production',
    output: {
        path: path.resolve('dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    devtool: false,
    stats: false,
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    safe: true
                },
            }),
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: [
                        ...buddha
                    ],
                    notes: [
                        ...notes
                    ],
                    clearConsole: true
                }
            }),
        ]
    }
})
