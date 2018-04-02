'use strict'
//指定当前的环境变量
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const config = require('./config.js')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(
  baseWebpackConfig,
  {

  }
)


