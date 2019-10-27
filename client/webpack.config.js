const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: [ '@babel/polyfill', './src/index' ],
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: [ '@babel/env' ] }
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader'
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader'
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: 'dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 5000,
		publicPath: 'http://localhost:5000/dist/',
		historyApiFallback: true
	},
	plugins: [ new webpack.HotModuleReplacementPlugin() ]
}
