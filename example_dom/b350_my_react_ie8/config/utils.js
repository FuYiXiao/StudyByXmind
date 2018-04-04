'use strict'

const path = require('path')
const config = require('./config.js')
/*
 * 根据 config.js的配置 和 process.env.NODE_ENV 参数值 输出静态资源的输出二级路径
 @param {String} 资源的相对路径
 @return {String}
*/
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
