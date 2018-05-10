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
  context: path.resolve(__dirname, '../'),

  //配置入口文件
  entry: {
    //"btn_reset": './src/main.js',
    //"btn_reset": './src/static/scss/btn_reset.scss',
    // 'lodash': 'lodash'],
    "main": './src/main.js',
  },

  // inline-source-map 和 source-map 都可以
  devtool: 'inline-source-map',
  //配置打包时的相对路径
  resolve:{
   alias: {
      "Static": path.resolve(__dirname, "../src/static/"),
   }
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
          name: utils.fun_assetsPath('css/[name].[ext]') 
        }
      },
      //字体文件的输出
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          //10K限制
          limit: 1,
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
                  includePaths:[path.resolve(__dirname, "../node_modules/compass-mixins/lib")]
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
        root: path.resolve(__dirname, '../'),
        //实际表示的意义是Write logs to console，即是否要往终端上输出log
        verbose: true
      }
    ),

    // 将演示图片复制
    new CopyWebpackPlugin(
      [
        {
          from:path.resolve(__dirname,'../src/static/pic/'),
          to:  utils.fun_assetsPath('pic/'),
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

    //独立CSS文件
    new ExtractTextPlugin({
      filename:  (getPath) => {
         return getPath(utils.fun_assetsPath('css/[name].css')).replace('css/js', 'css');
      },
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
 
  ]


}
