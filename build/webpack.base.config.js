const webpack = require('webpack');
const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.MODE;

// 开发环境下不单独提取css
const styleLoader =
    mode === "production" ? MiniCssExtractPlugin.loader : "style-loader";

// 分环境打包配置
const {
    host,
    domain
} = require('./env');

module.exports = {
    entry: {
        index: [path.resolve("src/index.js")]
    },
    output: {
        publicPath: "/",
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
        alias: {
            'vue$': "vue/dist/vue.runtime.esm.js",
            "@": path.resolve("src"),
            'mixins': path.resolve("src/resources/mixins"),
            'utils': path.resolve("src/utils"),
            "utils-scss": path.resolve("src/utils/scss/utils-scss.scss"),
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules(?![/|\\](dom7|swiper|vue-awesome-swiper))/
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsxSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    styleLoader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUnit: 75
                    //     }
                    // },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    styleLoader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUnit: 75
                    //     }
                    // },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                include: /images/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "asset/images/[hash:16].[ext]"
                }
            },
            {
                test: /\.(ttf|woff2?|eot|svg)$/,
                include: /font/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "asset/fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: 30,
            maxAsyncRequests: 30,
            minSize: 1,
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                vendors: {
                    name: 'vendors/library',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                'vendors/vue-bucket': {
                    name: 'vendors/vue-bucket',
                    test: /[\\/]node_modules[\\/](vue|vue-router|vuex|vue-class-component)[\\/]/,
                    priority: -9
                },
                'resources/plugins': {
                    name: 'resources/plugins',
                    test: /src[\\/]plugins[\\/]/,
                    priority: 11
                },
                'resources/components': {
                    name: 'resources/components',
                    test: /src[\\/]components[\\/]/,
                    priority: 12
                },
                'resources/others': {
                    name: 'resources/others',
                    test: /src[\\/](directives|mixins)[\\/]/,
                    priority: 13
                },
            }

        },
        runtimeChunk: {
            name: 'vendors/manifest',
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            filename: "index.html",
            template: path.resolve("src/index.html"),
            showErrors: true,
            // excludeChunks: ['download/index'],
            // title: 'USER-H5'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                domain: JSON.stringify(domain),
                host: JSON.stringify(host),
            },
        }),
    ]
};
