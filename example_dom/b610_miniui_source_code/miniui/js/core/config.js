// 设置jquery的默认参数
jQuery.ajaxSetup({
    cache: false
})
if (typeof window.rootpath == "undefined") {
    rootpath = "/";
}
//全局变量，用于设置mini 调试模式。
if (typeof mini_debugger == "undefined") {
    mini_debugger = true;
}
if (typeof mini_useShims == "undefined") {
    mini_useShims = false;
}
//是否自动运行miniui
if (typeof mini_autoRun == "undefined") {
    mini_autoRun = true;
}
/**
 * 获取被引入到页面的指定Js文件的绝对地址（去掉最后的js文件名的）。
 * @param js 文件名
 * @returns path 完整js路径
 * @private
 */
mini_CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");

    if (path.indexOf("http:") == -1 && path.indexOf("file:") == -1) {
        path = href + "/" + path;
    }
    return path;
}

//又一个可配置项，默认
if (!window.mini_JSPath) {
    mini_JSPath = mini_CreateJSPath("miniui.js");
}








