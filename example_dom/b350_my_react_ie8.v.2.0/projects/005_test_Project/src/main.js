
//加载 分析点统计的 处理模板
//var ContentTable = require('Static/scripts/module/content.js');

//这样加载IE8会报错
// window.template = require('Static/scripts/template-web.js');

//var template = require('art-template');
//var template = require('art-template');

//加载样式
require('Static/scss/public.scss');

//import('./test3');
//import 'lodash';

//加载 分析点统计的 处理模板
//var ContentTable = require('Static/scripts/module/content.js');

//加载 公共的工具插件
//var ContentTable = require('pubScouce/scripts/research/pub_tool');

require('./test1.js');
require('./test2.js');

function getComponent() {
 
    return require.ensure(
        ['./test3'], 
        function(require) {
            //参数： require 可以继续加载其他的资源
            console.log(this);

            //如果没有这么有一句话，test3文件会见会被下载，但是不会被执行
            //require('./test3');

            return "Fuck"
        }
    )


} 

$(".btn").click(function(){

    new Promise(function () {});

    getComponent().then(component => {
        console.log("点击加载--test3.js:"+component);
    })  

});

require.ensure('./testObj',function(require){

    //如果没有这么一句，是不会动态加载 testObj.js的
    var testObj = require('./testObj');
    console.log(testObj);
});

var fileart = require("./static/html/file.art");
console.log( fileart );
console.log(  fileart(data)   );
document.getElementById("content").innerHTML = fileart(data) ;


// var str = '{"name":"user","password":"psd","sex":"man","age":"120"}';
// var parse_str = JSON.parse(str);
// console.log(parse_str);



// $(function(){ 
  
//     //ContentTable.draw($("#MoudleTest"), { group:[ {rank:1,name:'test1',type:"type1",value:1},{rank:2,name:'test2',type:"type2",value:2} ] } );

// });
 
