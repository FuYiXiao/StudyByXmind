'use strict'

const l_obj_path = require('path');
const l_obj_config = require('./config.js');

/*
 * 根据 config.js的配置 和 process.env.NODE_ENV 参数值 输出静态资源的输出二级路径
 @param param_str_path {String} 资源的相对路径
 @return {String}
*/
exports.fun_assetsPath = function (param_str_path) {

  const l_str_assetsSubDirectory = (process.env.NODE_ENV === 'production'
      ? l_obj_config.build.assetsSubDirectory : l_obj_config.dev.assetsSubDirectory);
  
  return l_obj_path.posix.join(l_str_assetsSubDirectory, param_str_path)
}
/*
 * 根据 config.js的配置 和 process.env.NODE_ENV 参数值 输出对应的相对目录
 @param param_str_fileType {String} 资源的类型，取值：css， images， font， js， htc，template
 @return {String}
*/
exports.fun_prePublicPath = function (param_str_fileType) {

  let l_str_publicPath="";
  let l_str_typefile="";

  if(typeof param_str_fileType != "undefined"){

    if(param_str_fileType==="css"){
        l_str_typefile="attr_str_cssPath";
    }

    if(param_str_fileType==="images"){
        l_str_typefile="attr_str_imagesPath";
    }

    if(param_str_fileType==="font"){
        l_str_typefile="attr_str_fontPath";
    }

    if(param_str_fileType==="js"){
        l_str_typefile="attr_str_jsPath";
    }

    if(param_str_fileType==="htc"){
        l_str_typefile="attr_str_htcPath";
    }

    if(param_str_fileType==="template"){
        l_str_typefile="attr_str_templatePath";
    }
    
    if(param_str_fileType==="pic"){
        l_str_typefile="attr_str_picPath";
    }

    if(param_str_fileType==="data"){
        l_str_typefile="attr_str_dataPath";
    }

    l_str_publicPath = ( process.env.NODE_ENV === 'production'
      ? l_obj_config.build[l_str_typefile] : l_obj_config.dev[l_str_typefile] );
  }

  if(typeof l_str_publicPath == "undefined"){
    l_str_publicPath = "";
  }
  return l_str_publicPath;
}