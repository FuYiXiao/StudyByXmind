'use strict'

const path = require('path')
const config = require('./config.js')

module.exports = {

  // entry 配置项的根目录
  context: path.resolve(__dirname, '../'),

  //配置入口文件
  entry: {
    main: './src/main.js'
  },

  output: {

    //输出 构建内容 的根路径
    path: process.env.NODE_ENV === 'production'? config.build.assetsRoot:config.dev.assetsRoot,

    //输出的文件名
    filename: '[name].js',
    
    //如果按需加载，运行时加载的公共路径设置
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

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
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          },
          {
            loader: "sass-loader?outputStyle=compressed&includePaths[]="+ path.resolve(__dirname, "../node_modules/compass-mixins/lib") 
          }
        ]
      },
      
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        use: ['es3ify-loader','babel-loader']
      }
      
      /*
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['es3ify-loader','babel-loader'],
      },
      */

      /*
      {
        test: /\.js$/,
        use: [
          {
            loader: 'es3ify-loader'
          },
          { 
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
      */

    ]
  }


}