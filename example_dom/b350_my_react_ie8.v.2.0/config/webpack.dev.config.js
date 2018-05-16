'use strict'
//指定当前的环境变量
process.env.NODE_ENV = 'development';

// 开发生产的配置
const config = require('./config.js');

// 路径插件
const path = require('path');

// webpack 工具库
const webpack = require('webpack');

//公共工具
const utils = require('./utils');

//合并插件 
const merge = require('webpack-merge');

// base文件 的 基础配置
const baseWebpackConfig = require('./webpack.base.config')

// 生成 HMTL 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(
    
  baseWebpackConfig,

  {
      // 开发模式的服务器
      devServer: {
         contentBase: config.dev.assetsRoot
      },

      //插件的组合--输出页面
      plugins :config.pubPage.concat(config.dev.pripage)

  }
)


