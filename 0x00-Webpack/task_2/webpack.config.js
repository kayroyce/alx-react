const path = require('path');

module.exports = {
	entry: './js/dashboard_main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	mode: 'production',
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
};