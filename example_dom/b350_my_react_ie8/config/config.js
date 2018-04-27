'use strict'

const path = require('path')

module.exports = {

  // 开发环境的参数
  dev: {

    //这里指定 output 的输出路径，开发模式可能不需要
    assetsRoot:path.resolve(__dirname, '../dev'),

    //如果按需加载，运行时加载的公共路径设置
    assetsPublicPath: '/',

    //静态资源的存放目录
    assetsSubDirectory: 'static',

    //是否支持IE8
    supportIE8:true,

    //图片的路径
    //attr_str_imagesPath:'',

    //CSS的路径
    //attr_str_cssPath:'',

    //js的路径
    //attr_str_jsPath:'',

    //font的路径
    //attr_str_fontPath:'',

    //htc的路径
    //attr_str_htcPath:'',

    //template的路径
    //attr_str_templatePath:'',

  },

  // 生产环境的参数
  build: {

    //这里指定 output 的输出路径
    assetsRoot:path.resolve(__dirname, '../dist'),

    //如果按需加载，运行时加载的公共路径设置
    assetsPublicPath: './',
    
    //静态资源的存放目录
    assetsSubDirectory: 'static',

    //是否支持IE8
    supportIE8:true,
    
    //图片的路径
    //attr_str_imagesPath:'',

    //CSS的路径
    //attr_str_cssPath:'',

    //js的路径
    //attr_str_jsPath:'',

    //font的路径
    //attr_str_fontPath:'',

    //htc的路径
    //attr_str_htcPath:'',

    //template的路径
    //attr_str_templatePath:'',   

  }

}
