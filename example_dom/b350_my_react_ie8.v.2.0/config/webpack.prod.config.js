'use strict'
//指定当前的环境变量
process.env.NODE_ENV = 'production'

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

//基础配置
const baseWebpackConfig = require('./webpack.base.config')

// 生成HMTL插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(
    
  baseWebpackConfig,
  {
      //插件的组合--输出页面
      plugins :config.pubPage.concat(config.build.pripage)
  }
)



