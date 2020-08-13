const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.(png|jp(e*)g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							name: 'images/[hash]-[name].[ext]'
						}
				}]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	]
}
