'use strict'

const path = require('path')

module.exports = {

  // 开发环境的参数
  dev: {

    //这里指定 output 的输出路径，开发模式可能不需要
    assetsRoot:path.resolve(__dirname, '../dev'),

    //如果按需加载，运行时加载的公共路径设置
    assetsPublicPath: '/',

  },

  // 生产环境的参数
  build: {

    //这里指定 output 的输出路径
    assetsRoot:path.resolve(__dirname, '../dist'),

    //如果按需加载，运行时加载的公共路径设置
    assetsPublicPath: '/',
    
  }

}
