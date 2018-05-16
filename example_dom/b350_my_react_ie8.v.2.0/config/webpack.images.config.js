'use strict'
//指定当前的环境变量
process.env.NODE_ENV = 'production'

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
  context: config.context,

  entry: {
    //"btn_reset": './src/main.js',
    "empty": path.resolve(config.a_s_currentPath, './src/static/images_original/empty.js'), 
    // 'lodash': 'lodash'],
  },
  output: {

    //输出 构建内容 的根路径
    path: path.resolve(config.a_s_currentPath, './src/static/images/'), 

    //输出的文件名
    filename: '[name].js'

  },
  //插件
  plugins : [

    // 将图片拷贝，以备压缩
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(config.a_s_currentPath, './src/static/images_original/'),
          to:  path.resolve(config.a_s_currentPath, './src/static/images/'),
          test: /\.(jpe?g|png|gif|svg)$/i,
          ignore: [ '*.js' ],
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
