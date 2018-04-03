const path = require('path');
const imagemin = require('imagemin-webpack');
//import { imageminLoader, ImageminWebpackPlugin } from "imagemin-webpack";
// Before importing imagemin plugin make sure you add it in `package.json` (`dependencies`) and install.
//import imageminGifsicle from "imagemin-gifsicle";
const imageminGifsicle = require('imagemin-gifsicle');
const plugins = [imageminGifsicle()];


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:'development',
  plugins: [
    // Make sure that the plugin is after any plugins that add images.
    new imagemin.ImageminWebpackPlugin({
      imageminOptions: {
        plugins
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader" // Or `url-loader`.
          },
          {
            loader: imageminLoader,
            options: {
              plugins
            }
          }
        ]
      }    

    ]
  },

};