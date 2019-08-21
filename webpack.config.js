const webpack = require('webpack')

const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const ip = require('ip')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = env => {
	const ENV = env.NODE_ENV
	let HOST
	let WSHOST

	if (ENV === 'development') {
		HOST = 'http://localhost:3000'
		WSHOST = 'localhost:3000'
	}

	if(ENV === 'qa') {
		HOST = 'http://ec2-35-171-19-119.compute-1.amazonaws.com:3000'
		WSHOST = 'ec2-35-171-19-119.compute-1.amazonaws.com:3000'
		//change these whenever my ec2 dns changes
	}


	return {
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
					test: /\.(png|jpg|gif|svg)$/,
					loader: 'file-loader',
					options: {
						outputPath: 'img/',
					},
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
							options: {sourceMap: true},
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
				{
					test: /\.(js|vue)$/,
					loader: 'string-replace-loader',
					query: {
						multiple: [
							{search: '${HOST}', replace: HOST},
							{search: '${WSHOST}', replace: WSHOST}
						],
					},
				}

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
			historyApiFallback: true //todo added this to get routes to work, check with cam if this is okay
		},
		performance: {
			hints: false
		}


	}


}
