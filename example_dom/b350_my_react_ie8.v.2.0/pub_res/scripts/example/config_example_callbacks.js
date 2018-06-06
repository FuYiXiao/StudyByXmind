/*
页面的一些信息设置，和后台接口的实现，一般此对象之在 PageObj 的设置中使用
* */
window.GloabConfig={

    //当前的开发模式 debugger表示的是开发模式
    model:"debugger",

    //页面Html是否忽略注释，后台是否会过滤掉注释
    ignoreComment:true,

    /*加载页面 解读信息的 Ajax 方法
     @param urlParam {Stirng} 
     @param param_b_ifSendAjax {Bollean} 是否发送ajax请求
     @return null
    * */
    //用于发送ajax的记录当前请求的状态
    GetDataAjaxFlag:false,
    //回调对象，用于获取数据后回调 add 添加执行对列，缺点是：add的函数，获取不到 this 的作用域
    GetDataAjaxCallbacks:$.Callbacks() ,
    GetDataAjax:function( urlParam , param_b_ifSendAjax){
        var _this = this; 
        if(_this.GetDataAjaxFlag===false && param_b_ifSendAjax === true){
          _this.GetDataAjaxFlag = true;
          $.ajax({
                url:"../test.html?urlParam="+urlParam,
                dataType:"html",
                cache:false,
                success: function(data){
                    _this.GetDataAjaxFlag = false;
                    var data = jQuery.parseJSON(data)
                    /*
                    //返回数据的结构样例
                    var data = {
                    };
                    */
                    
                    _this.GetDataAjaxCallbacks.fire(data);
                    //_this.GetDataAjaxCallbacks.fire(data,CallBackObj);
                    //$.proxy( CallBackFun, CallBackObj )(data);
                },
                error:function(req, st){
                    alert(st);
                }
            });
        }
        return _this.GetDataAjaxCallbacks; 
    }

};
