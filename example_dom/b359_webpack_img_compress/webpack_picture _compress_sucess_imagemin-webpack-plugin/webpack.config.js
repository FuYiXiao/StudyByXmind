const path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var imageminMozjpeg = require('imagemin-mozjpeg');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ImageminPlugin({
    	  test: /\.(jpe?g|png|gif|svg)$/i,
	      plugins: [

	        imageminMozjpeg({
	          quality: 80,
	          progressive: true
	        })
	      ]
    })
  ],
  module: {
     	rules: [
     		{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
				'file-loader'
			  ],
     		}
     	]
 }
};
