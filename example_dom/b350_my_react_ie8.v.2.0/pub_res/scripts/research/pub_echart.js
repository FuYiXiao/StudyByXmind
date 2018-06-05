/*公共插件 echart的绘制函数，可以自动监听页面的改变，从而自动重新绘制 */

//用于保存指向不同的 echart 实例
var _echartDomArrays=[];

/*初始化 Echart 绘制函数，可以自动监听页面的改变，从而自动重新绘制
 @param param_s_echartId {String} Echart 的DOM的ID
 @param option {object} 需要的数据,根据不同类型的 Echart 图会有差异
 @param param_ifRezise {bollean} 是否监听重新绘制
 @return null
 * */
function initSingleEchart(param_s_echartId,option,param_ifRezise){
    var myChart = echarts.init(document.getElementById(param_s_echartId));
    param_ifRezise = (typeof param_ifRezise == "undefined") ? true : false;
    if(myChart){
        myChart.setOption(option);
        //防止多次注册事件：该事件监听页面变化
        if( !$("#"+param_s_echartId).data("echartHasOnEventWindowResize") && param_ifRezise){
            $("#"+param_s_echartId).data("echartHasOnEventWindowResize",true);
            _echartDomArrays.push(myChart);
        }
    }
    return myChart;
}

/*初始化 Echart 表函数
 * */
function _windowResize(){
    $(_echartDomArrays).each(function(index,pre){
        if(pre&&pre.resize){
            pre.resize();
        }
    });
};

/*注册页面事件
 * */
function eventOn(){
    $(window).resize(function() {
        _windowResize();
    });
}
 
eventOn();

module.exports = {
    "initSingleEchart":initSingleEchart
};
