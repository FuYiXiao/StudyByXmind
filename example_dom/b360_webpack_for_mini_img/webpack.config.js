const path = require('path');

var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:'development',
  plugins: [
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      disable: false, 
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            }
          }
        ]
      }     

    ]
  },

};