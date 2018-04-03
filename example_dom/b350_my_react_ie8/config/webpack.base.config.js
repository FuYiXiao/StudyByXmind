'use strict'

// 路径插件
const path = require('path')
// 开发生产的配置
const config = require('./config.js')
const webpack = require('webpack');

module.exports = {

  // entry 配置项的根目录
  context: path.resolve(__dirname, '../'),

  //配置入口文件
  entry: {
    main: './src/main.js',
    // 'lodash': 'lodash'],
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
  //组件
  module: {
    rules: [
      // .css 文件的加载处理
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          }
        ]
      },
      // .scss 文件的加载处理
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
      // .js文件的处理 es3ify-loader 放在前面，猜测表示的是后处理
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'es3ify-loader'
          },
          { 
            loader: 'babel-loader'
          }
        ]
      }    
      /* 写法方式一：可以通过
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['es3ify-loader','babel-loader']
      }
      */
      /* 写法方式二：可以通过
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
  },
  plugins : [
    /*
    new webpack.optimize.CommonsChunkPlugin({
        names : ['lodash']
    }),
    */
  ]


}
