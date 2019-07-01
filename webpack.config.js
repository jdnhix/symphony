const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ip = require('ip')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        // Fixes file paths in url() of sass children
                        loader: 'resolve-url-loader',
                        options: { sourceMap: true },
                    },
                    'sass-loader',
                    {
                        // Provide path to the file with resources
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, 'src/css/variables.scss'),
                        },
                    },
                ],
            },

        ]

    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Listening ROom',
            template: './index.html'
        })
    ],
    devServer: {
        host: ip.address(),
        port: 8081,
        hot: true,
        noInfo: true,
    },
    performance: {
        hints: false
    }


}