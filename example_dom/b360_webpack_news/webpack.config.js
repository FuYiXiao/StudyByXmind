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
        test: /\.css$/,
        use: [
          { 
          	loader: 'style-loader',
          	exclude: /node_modules/
          },
          {
            loader: 'css-loader',
            options: {
              //modules: true
            }
          }
        ]
      }
    ]
  }

};