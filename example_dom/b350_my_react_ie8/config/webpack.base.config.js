'use strict'

// 路径插件
const path = require('path')

// 开发生产的配置
const config = require('./config.js')

// webpack 工具库
const webpack = require('webpack');

//公共工具
const utils = require('./utils');

//加载图片压缩插件
const ImageminPlugin = require('imagemin-webpack-plugin').default;

//加载复制插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      // 图片的加载
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          //name: 'images/[path].[name].[ext]',
          name:  utils.assetsPath('images/[name].[hash:4].[ext]') ,
          limit: 10000,
        },
      },
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
  //插件
  plugins : [

    // 将图片拷贝，以备压缩
    new CopyWebpackPlugin(
      [
        {
          from:path.resolve(__dirname,'../src/static/images_original/'),
          to:  path.resolve(__dirname,'../src/static/images'),
          force: true
        }
      ],
      {
        debug: true,
        ignore: [],
        copyUnmodified:true 
      }
    ),

    //图片压缩插件
    new ImageminPlugin({
      //开发模式不压缩
      disable:process.env.NODE_ENV !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i 
    })
    
  ]


}
