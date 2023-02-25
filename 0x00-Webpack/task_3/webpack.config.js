const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		all: [
			'./modules/header/header.js',
			'./modules/body/body.js',
			'./modules/footer/footer.js',
		]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, './public'),
		compress: true,
		port: 8564
	},

	mode: 'development',
	module: {
		rules: [
			{ 
				test: /\.css$/, 
				use: ['css-loader', 'style-loader'], 
			},
			{ 
				test: /\.(gif|png|jpg|jpeg|svg)$/i, 
				use: [
					'file-loader', 
					{
						loader: 'image-webpack-loader',
						options: 
						{
							bypassingOnDebug: true, 
							disable: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		// clean the public folder before building
		new CleanWebpackPlugin(), 
		// Generates default index.html
		new HtmlWebpackPlugin() 
	],
	optimization: {
		splitChunks: {
			// split all chunks
			chunks: 'all' 
		}
	}
};