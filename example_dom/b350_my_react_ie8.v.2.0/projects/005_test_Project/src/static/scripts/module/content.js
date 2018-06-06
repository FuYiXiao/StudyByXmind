
/*公共模板  一般模板的写法 配合的模板是 art-template */

//加载模块所需模板
var l_html_HujiObjTemp = require('Static/scripts/module/content.template');

/*初始化 户籍聚集度
 @param $HujiWrapperDom {$Dom} 需要绘制的模板外框
 @param param_o_data {Object} 需要的数据
 @return null
 * */
function draw($HujiWrapperDom,param_o_data){

    $HujiWrapperDom.html(  template.compile(l_html_HujiObjTemp)(param_o_data)  );
}

/*注册页面事件
 * */
function eventOn(){

}

eventOn();

module.exports = {
    "draw":draw
};

