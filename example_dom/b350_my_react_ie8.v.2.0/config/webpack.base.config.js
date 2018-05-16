'use strict'

// 路径插件
const path = require('path');

// 开发生产的配置
const config = require('./config.js');

// webpack 工具库
const webpack = require('webpack');

//公共工具
const utils = require('./utils');

//加载复制插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

//独立CSS文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//清空目录插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 生成HMTL插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // entry 配置项的根目录
  context: config.context,

  //配置入口文件
  entry: config.entry,

  // inline-source-map 和 source-map 都可以
  devtool: process.env.NODE_ENV === 'production'? config.build.devtool:config.dev.devtool,
  
  //配置打包时的相对路径
  resolve:{
   alias: config.resolve_alias
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
      //IE 浏览器的兼容文件
      {
        test: /\.(htc)$/,
        loader: 'file-loader',
        options: {
          //publicPath:"../../",
          publicPath:utils.fun_prePublicPath("htc"),
          name: utils.fun_assetsPath('htc/[name].[ext]') 
        }
      },
      //字体文件的输出
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          //10K限制--IE8的配置
          limit: process.env.NODE_ENV === 'production'? (config.build.supportIE8?1:10000):(config.dev.supportIE8?1:10000), 
          //按路径输出
          //name: 'iconfont/[path].[name].[ext]',
          //按hash输出
          // name: utils.fun_assetsPath('iconfont/[name].[hash:7].[ext]') ,
          //publicPath:"../../",
          publicPath:utils.fun_prePublicPath("font"),
          name: utils.fun_assetsPath('iconfont/[name].[ext]') 
        }
      },
      // 图片的加载
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          //按路径输出
          //name: 'images/[path].[name].[ext]',
          //按hash输出
          //name:  utils.fun_assetsPath('images/[name].[hash:4].[ext]') ,
          //publicPath:"../../",
          publicPath:utils.fun_prePublicPath("images"),
          name:utils.fun_assetsPath('images/[name].[ext]') ,
          //10K限制
          limit: 10000,
        },
      },
      // .css 文件的加载处理
      /*
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          }
        ]
      },
      */
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // .scss 文件的加载处理
      /*
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
      */
      /*
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          { loader: 'style-loader'},
          {
            loader: 'css-loader'
          },
          {
            loader: "sass-loader?outputStyle=compressed&includePaths[]="+ path.resolve(__dirname, "../node_modules/compass-mixins/lib") 
          }
        ])
      },
      */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: "css-loader",
              options: {
                  sourceMap: true
              }
            },
            // outputStyle=compressed 模式下的 sourceMap 有问题的 ，expanded 就没有问题了
            {
              loader: "sass-loader",
              options: {
                  sourceMap: true,
                  //sourceMapContents:false,
                  outputStyle:'expanded',
                  includePaths:[path.resolve(config.context, "./node_modules/compass-mixins/lib")]
              }
            },
          ]
        })
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
      },
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

    //清空内容
    new CleanWebpackPlugin(
      [
        process.env.NODE_ENV === 'production'?config.build.assetsRoot:config.dev.assetsRoot,
      ],
      {
        root: config.a_s_currentPath,
        //实际表示的意义是Write logs to console，即是否要往终端上输出log
        verbose: true
      }
    ),

    // 将演示图片复制
    new CopyWebpackPlugin(
      [
        //复制演示图片资源
        {
          from:path.resolve(config.a_s_currentPath,'src/static/pic/'),
          to:  utils.fun_assetsPath('pic/'),
          //匹配文字
          //test: /\.(jpe?g|png|gif|svg)$/i,
          //需要忽略的文件
          ignore: [ '*.js' ],
          // 强制覆盖先前的插件
          force: true,
          //只拷贝文件不管文件夹
          //flatten:false
        },
        //复制所需的静态JS资源
        {
          from:path.resolve(config.a_s_currentPath,'src/static/scripts/'),
          to:  utils.fun_assetsPath('scripts/'),
          //test: /\.(js)$/i,
          force: true
        },
        //复制所需的静态CSS
        {
          from:path.resolve(config.a_s_currentPath,'src/static/styles/'),
          to:  utils.fun_assetsPath('styles/'),
          //test: /\.(js)$/i,
          force: true
        },
        //复制所需的静态 Data
        {
          from:path.resolve(config.a_s_currentPath,'src/static/data/'),
          to:  utils.fun_assetsPath('data/'),
          //test: /\.(js)$/i,
          force: true
        }
      ],
      {
        debug: true,
        ignore: [],
        //所有文件都是在第一次构建时复制的,但之后没有变化就不复制了
        copyUnmodified:true 
      }
    ),
    // 将复制公共资源到项目
    new CopyWebpackPlugin(
      [
        //复制演示图片资源
        {
          from:path.resolve(config.a_s_currentPath,'../../pub_res'),
          to: path.resolve(config.a_s_currentPath,'pub_res'),
          //匹配文字
          //test: /\.(jpe?g|png|gif|svg)$/i,
          //需要复制的文件 'tt130' 是一个不存在的路径
          //test:(config.a_b_ifCopyPub_res?[]:/tt130/),
          //test: /([^/]+)\/(.+)\.png$/, 
          //toType: 'template',
          //需要复制的文件 'tt130' 是一个不存在的路径
          ignore: config.a_b_ifCopyPub_res?[ '*.tc130' ]:['*.*'] ,
          /*
          transform (content, path) {
            if(config.a_b_ifCopyPub_res){
              return content;
            }else{
              return "";
            }
          }
          */
        }
      ]
    ),
    //独立CSS文件
    new ExtractTextPlugin({
      filename:  (getPath) => {
         return getPath(utils.fun_assetsPath('styles/[name].css'));
      },
      //从所有附加块提取过
      allChunks: true,
      //禁用插件
      disable:config.a_b_ifCssInsertHtml
    }),

    new HtmlWebpackPlugin({
      title: 'index'
    })
 
  ]


}
