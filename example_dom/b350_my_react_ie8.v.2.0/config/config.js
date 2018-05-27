'use strict'

//引入path插件
const path = require('path');

// 生成 HMTL 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

//内联样式插件
const StyleExtHtmlWebpackPlugin =  require('style-ext-html-webpack-plugin');

// 将资源内联到 HTML 只会内联 CSS 和 JS（通过webpack打包处理的js,其他静态JS不处理），绝对路径定位可以使用，相对路径会报错
//var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

//内联样式到DIV里面插件
const HtmlWebpackInlineStylePlugin =  require('html-webpack-inline-style-plugin');

//设置配置根目录
const l_s_rootPath = path.resolve(__dirname, '../');

//当前项目所在的目录
const l_s_currentPath=path.resolve(l_s_rootPath, './projects/fengxian_report/');

//开发环境的输出路径
const l_s_divPath = path.resolve( l_s_currentPath, 'dev' );

//生产环境的路径
const l_s_prodPath = path.resolve( l_s_currentPath, 'dist' );

//开发环境的静态资源路径
const l_s_devAssetsPublicPath = "static/";

//生产环境的静态资源路径
const l_s_prodAssetsPublicPath = "./";

//生产环境的静态资源路径
const l_s_assetsPublicPath = (process.env.NODE_ENV === 'production'? l_s_prodAssetsPublicPath : l_s_devAssetsPublicPath) 

//配置输出的文件名,根据静态资源路径路径指定输出路径
const entryObj = {};
entryObj[(l_s_assetsPublicPath + "scripts/report")] = path.resolve(l_s_currentPath, 'src/main.js' );

//是否复制公共资源到项目
const l_b_ifCopyPub_res = false;

//是否将样式写入到HTML页面中
const l_b_ifCssInsertHtml = false;

//是否将样式独立样式表
const l_b_ifExtractCss = false;

//针对不同开发环境的配置
module.exports = {

  //整个项目的根目录
  context: l_s_rootPath ,

  //是否将样式独立样式表
  a_b_ifExtractCss : l_b_ifExtractCss,

  //是否复制公共资源到项目
  a_b_ifCopyPub_res : l_b_ifCopyPub_res,

  //当前项目的路径
  a_s_currentPath:l_s_currentPath,

  //配置处理文件
  entry:entryObj,

  //配置引入资源时的相对路径
  resolve_alias:{
      "pubScouce": path.resolve(l_s_currentPath, '../../pub_res/' ),
      "Static":    path.resolve(l_s_currentPath, 'src/static/' )
  },  
  //需要生成的页面配置
  pubPage:[
  
        new HtmlWebpackPlugin({
          title: '报文',
          filename: l_s_assetsPublicPath + '/html/index.html',
          template: path.resolve(l_s_rootPath, l_s_currentPath, 'src/static/html/index.html' ),
          //需要排除的文件 
          excludeChunks:process.env.NODE_ENV === 'production' ? [ 'scripts/base' ] : [],
          //对引用文件增加缓存
          hash:true,
          //压缩HTMl 文件
          /*
          minify:{
            conservativeCollapse:true,
            collapseWhitespace:true
          },
          */

          //只在页面有改变，才触发改变
          cache:true,

          // inlineSource: '.(css)$' // 这里的配置是配合 HtmlWebpackInlineSourcePlugin
        }),
        // 将资源内联到 HTML 只会内联 CSS 和 JS（通过webpack打包处理的js,其他静态JS不处理），绝对路径定位可以使用，相对路径会报错
        //new HtmlWebpackInlineSourcePlugin()   
        
        
  ],

  //END -- pubPage
  // 开发环境的参数
  dev: {

    //这里指定 开发模式  output 的输出路径 path.resolve(__dirname)是指当前文件路径
    assetsRoot:l_s_divPath,

    //如果按需加载，运行时加载的公共路径设置
    assetsPublicPath: '/',

    //静态资源的存放目录 完整路径就是 /dev/static
    assetsSubDirectory: l_s_devAssetsPublicPath,

    //是否支持IE8
    supportIE8:true,

    //sourceMap的方式
    devtool:'inline-source-map',

    //项目所需的私有文件
    pripage:[
	
      //内联样式到DIV里
      /*
      new StyleExtHtmlWebpackPlugin({
        //是否压缩
        minify: true,
        //是否开启插件
        enabled:true,
        cssRegExp:/report.css$/
      }),
      new  HtmlWebpackInlineStylePlugin(),
      */
	  
    ],

    //图片的路径 publicPath
    attr_str_imagesPath:'',

    //CSS的路径 publicPath
    attr_str_cssPath:'',

    //js的路径 publicPath
    attr_str_jsPath:'',

    //font的路径 publicPath
    attr_str_fontPath:'',

    //htc的路径,IE的兼容文件 publicPath
    attr_str_htcPath:'',

    //template的路径 publicPath
    attr_str_templatePath:'',

    //掩饰图片路径 publicPath
    attr_str_picPath:'',

    //模拟数据路径 publicPath
    attr_str_dataPath:'', 

  },
  //END -- dev

  // 生产环境的参数
  build: {

    //这里指定 生产模式  output 的输出路径 path.resolve(__dirname)是指当前文件路径
    assetsRoot:l_s_prodPath,

    //如果按需加载，运行时加载的公共路径设置
    assetsPublicPath: '../',
    
    //静态资源的存放目录
    assetsSubDirectory: l_s_prodAssetsPublicPath,

    //是否支持IE8
    supportIE8:true,

    //sourceMap的方式
    devtool:'inline-source-map',

    //项目所需的私有文件
    pripage:[

      //将样式放到样式<style>里面
      new StyleExtHtmlWebpackPlugin({
        //是否压缩
        minify: true,
        //是否开启插件
        enabled:true,
        cssRegExp:/report.css$/
      })
      
    ],

    //图片的路径 publicPath
    attr_str_imagesPath:'',

    //CSS的路径 publicPath
    attr_str_cssPath:'',

    //js的路径 publicPath
    attr_str_jsPath:'',

    //font的路径 publicPath
    attr_str_fontPath:'',

    //htc的路径,IE的兼容文件 publicPath
    attr_str_htcPath:'',

    //template的路径 publicPath
    attr_str_templatePath:'',

    //掩饰图片路径 publicPath
    attr_str_templatePath:'',

    //模拟数据路径 publicPath
    attr_str_templatePath:'', 

  },
  //END -- build
  

}
