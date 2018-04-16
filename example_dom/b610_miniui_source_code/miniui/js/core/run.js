/*
 * @fileOverview 本文件是mini UI框架的执行入口。当DOM准备完整之后自动开始执行mini UI 的解析工作。
 * @requires jQuery , mini.js, ua.js , Event.js, parse.js
 */
jQuery(function () {
    //自动运行配置，可以让miniui不自动运行
	if(!mini_autoRun) return;
    mini.run();
});

mini. run = function(){
    mini.isReady = true;	//这里的ready指mini的资源已经准备完成。
    mini.parse();			//执行解析HTML，创建组件，将组件与HTML标签绑定。
    mini._FireBindEvents();	//各个组件注册的初始化回调函数，这个方法在组件内部。

    if ((mini.getStyle(document.body, "overflow") == "hidden" || mini.getStyle(document.documentElement, "overflow") == "hidden")
        && (isIE6 || isIE7)) {

        jQuery(document.body).css("overflow", "visible");
        jQuery(document.documentElement).css("overflow", "visible");
    }
    //获取文档的宽和高
    mini.__LastWindowWidth = document.documentElement.clientWidth;
    mini.__LastWindowHeight = document.documentElement.clientHeight;
    //为window添加默认的load事件响应，注意这里如果用requireJs会出现问题，onload事件早已触发完毕
    if(mini_autoRun)
        mini.on(window, "load", mini_onload);
    //如果用requireJs，要重新触发一遍此事件,因为load事件已错过 pzf 2014-12
    else
        mini_onload(null);
    //为window添加 resize事件响应,mini_onload中也绑定了resize事件，这里为什么还要绑定一次
    mini.on(window, "resize", function (e) {
        var events = mini.__windowResizes;
        for (var i = 0, l = events.length; i < l; i++) {
            var event = events[i];
            event[0].call(event[1], e);
        }
    });
    //绑定事件处理
    mini.on(window, "unload", mini_unload);
    // 为iframe 的document.onmousedown绑定相应函数,主要是为了跨frame来关闭菜单，但是会造成内存泄露的问题，所以删除 pzf - 2014-12
    
    /*
    setInterval(function () {
        __BindIFrames();
    }, 1500);
    */
    //针对IE的特殊内存优化
    // http://www.cnblogs.com/jenry/archive/2011/02/11/1951240.html
    if (isIE) {
        setInterval(function () {
            CollectGarbage();
        }, 1000);
    }
}

