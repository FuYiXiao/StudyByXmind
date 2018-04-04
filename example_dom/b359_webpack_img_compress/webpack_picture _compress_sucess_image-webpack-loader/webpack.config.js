const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
     	rules: [
     		{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
				'file-loader',
				{
				  loader: 'image-webpack-loader',
				  options: {
					bypassOnDebug: true,
				  },
				},
			  ],
     		}
     	]
 	}
};
