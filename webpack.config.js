const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
	mode: "development",
	context: __dirname,
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
				use: 'file-loader'
			}
		]
	},
	devServer: {
		index: './public/index.html',
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebPackPlugin({
				template: path.resolve( __dirname, 'public/index.html' ),
				filename: 'index.html'
		})
	]
};