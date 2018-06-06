/*IE8的兼容代码--这里因为其他库需要 html 的方式加载，所以需要拿到最前面去了*/
//require('es5-shim');
//require('es5-shim/es5-sham');
//require('console-polyfill');
//require('json3');
//这样加载IE8会报错
//window.template = require('Static/scripts/template-web.js');

//加载样式
require('Static/scss/public.scss');

//Echart的 公共处理模块
var SingleEchart = require('pubScouce/scripts/research/pub_echart');

//加载 分析点统计的 处理模板
var ContentTable = require('Static/scripts/module/content.js');


//展示头部的echart
var optionEchartBoxMeter = {

    tooltip: {
        show:false,
    },

    series: [
        {
            name: '最内层线',
            type: 'gauge',
            radius: '50%',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                lineStyle: {
                    width:4,
                    color:[[1,'#6ad1f2']]
                },
            },
            splitLine: {
                show:false
            },
            axisLabel: {
                show:false
            },
            axisTick:{
                show:false
            },
            detail:{
                show:false
            },
            pointer:{
                show:false
            },
            markPoint:{
                symbol:'circle',
                symbolSize:12,
                "itemStyle":{
                    "normal":{
                        color:'#fede2e'
                    }
                },
                label:{
                    normal:{
                        show:false
                    }
                },
                data: [
                    {
                        name:'',
                        x:'50%',
                        y:'50%',
                        value:''
                    }
                ]
            },
            markLine:{ 
                silent:false,
                symbolSize:0,
                label:{
                    show:false
                },
                lineStyle:{
                    width:2,
                    color:'#6ad1f2',
                    type:"solid"
                },
                data: [
                    [
                        {
                            name: '',
                            x: "5%",
                            y: "50%"
                        },
                        {
                            x: "95%",
                            y: "50%"
                        }
                    ]
                ]
            },
        },
        {
            name: '推送',
            type: 'gauge',
            radius: '90%',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            splitNumber:100,
            axisLine: {
                lineStyle: {
                    width:4,
                    //仪表盘的轴线可以被分成不同颜色的多段。每段的结束位置和颜色可以通过一个数组来表示
                    color:[[1,'#6ad1f2']]
                },
            },
            splitLine: {
                show:true,
                length:0
            },
            axisLabel: {
                formatter: function(e) {},
                distance:-5,
                textStyle: {
                    color:"#fa913c",
                    fontSize: 14,
                    fontWeight: "bold",
                    backgroundColor:"#333",
                    padding:2
                }
            },
            axisTick:{
                show:false,
            },
            //仪表盘详情
            detail:{
                show:false
            },
            //仪表盘指针
            pointer:{
                show:true,
                length:'70%',
                width:4
            },
            //仪表盘指针样式
            itemStyle:{
                color:'#6ad1f2',
            },
            //标题
            title:{
                offsetCenter: [0, '40%'],
                fontSize:14,
                color:"#333"
            },
            data:[]
        }
    ]
};

// 第一屏的echart , 第二屏的 echart 公用同一个 
var optionEchartBoxOffice = {

    //鼠标移上提示
    "tooltip": {
        "trigger": "axis"
    },

    legend: {
        show:true,
        left : 'center',
        top : 'top',
        data:[],
    },

    //gird
    "grid": {
        "borderWidth": 0,
        "left": '5%',
        "right": '5%',
        "top": '15%',
        "bottom": '10%',
        textStyle: {
            color: "#fff"
        }
    },

    //日期月份
    "xAxis": [
        {
            "type": "category",
            //坐标轴
            "axisLine": {
                show:true,
                lineStyle: {
                    color: '#333',
                    width:1,
                    opacity:0.5
                }
            },
            //分割线
            "splitLine": {
                "show": false
            },
            //坐标刻度
            "axisTick": {
                "show": false,
            },
            //分割区域
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "color":"#333",
            },
            //"data": ['北京','上海','广东','浙江','天津','深圳','广西','湖南']
            "data": []
        }
    ],

    "yAxis": [
        {
            name:"单位：户数",
            nameGap:10,
            "type": "value",
            index:0,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#333',
                    opacity:0.5
                }
            },
            "axisTick": {
                "show": true,
                inside:true
            },
            "axisLabel": {
                "interval": 0,
                "color":"#333"
            },
            "splitArea": {
                "show": false
            },
        },
        {
            name:"占比",
            nameGap:10, 
            "type": "value",
            index:1,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#333',
                    opacity:0.5
                }
            },
            "axisTick": {
                "show": true,
                inside:true
            },
            "axisLabel": {
                "interval": 0,
                "color":"#333"
            },
            "splitArea": {
                "show": false
            },
        }
    ],
  
    "series": [
        
        {
            "name": "增值税纳税人数",
            "type": "bar",
            "yAxisIndex": 0,
            "barMaxWidth": 38,
            zlevel:1,
            "itemStyle": {
                "normal": {
                    "color": "#41c7f4",
                    "label": {
                        "show": false
                    }
                }
            },
            "data": []
            /*
            [
                8000,
                45000,
                140000,
                180000,
                240000,
                160000,
                60000,
                90000
            ]
            */
        }, 
        {
            "name": "识别户数",
            "type": "bar",
            zlevel:0,
            "yAxisIndex": 0,
            "barMaxWidth": 38,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "#b4df4f",
                    "label": {
                        "show": false
                    }
                }
            },
            "data": []
        },
        {
            "name": "占比",
            "type": "line",
            "yAxisIndex": 1,
            zlevel:3,
            smooth:false,
            symbolSize:5,
            symbol:'circle',
            lineStyle:{
                type:"solid"
            },
            "itemStyle": {
                "normal": {
                    "color": "#fc3e04",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": []
        }
    ]
};

// 第三屏的echart 
var optionEchartBoxBar = {

    //鼠标移上提示
    "tooltip": {
        "trigger": "axis",
        formatter:function(param){
            return param[0].data.name2+"<br/>"+param[0].marker+param[0].seriesName+"："+param[0].value + "";
        }
    },

    //gird
    "grid": {
        "borderWidth": 0,
        "left": '10%',
        "right": '10%',
        "top": '15%',
        "bottom": '10%',
        textStyle: {
            color: "#fff"
        }
    },

    //日期月份
    "xAxis": [
        {
            name:"指标",
            nameGap:15,
            "type": "category",
            //坐标轴
            "axisLine": {
                show:true,
                lineStyle: {
                    color: '#333',
                    width:1,
                    opacity:0.5
                }
            },
            //分割线
            "splitLine": {
                "show": false
            },
            //坐标刻度
            "axisTick": {
                "show": false,
            },
            //分割区域
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "color":"#333",
                rotate:15
            },
            "data": []
        }
    ],

    "yAxis": [
        {
            name:"识别户数",
            nameGap:15,
            "type": "value",
            index:0,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#333',
                    opacity:0.5
                }
            },
            "axisTick": {
                "show": true,
                inside:true
            },
            "axisLabel": {
                "interval": 0,
                "color":"#333"
            },
            "splitArea": {
                "show": false
            },
        },
        
    ],
  
    "series": [
        
        {
            "name": "识别户数",
            "type": "bar",
            "yAxisIndex": 0,
            "barMaxWidth": 38,
            zlevel:1,
            "itemStyle": {
                "normal": {
                    "color": "#41c7f4",
                    "label": {
                        "show": false
                    }
                }
            },
            "data": [
            ]
        }, 
        
        
    ]
}

// 第四屏的echart
var optionEchartBoxMouth = {


    //鼠标移上提示
    "tooltip": {
        "trigger": "axis"
    },

    legend: {
        show:true,
        left : 'center',
        top : 'top',
        data:[],
    },

    //gird
    "grid": {
        "borderWidth": 0,
        "left": '5%',
        "right": '5%',
        "top": '15%',
        "bottom": '10%',
        textStyle: {
            color: "#fff"
        }
    },

    //日期月份
    "xAxis": [
        {
            "type": "category",
            //坐标轴
            "axisLine": {
                show:true,
                lineStyle: {
                    color: '#333',
                    width:1,
                    opacity:0.5
                }
            },
            //分割线
            "splitLine": {
                "show": false
            },
            //坐标刻度
            "axisTick": {
                "show": false,
            },
            //分割区域
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "color":"#333",
            },
            "data": []
        }
    ],

    "yAxis": [
        {
            name:"单位：户数",
            nameGap:10,
            "type": "value",
            index:0,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#333',
                    opacity:0.5
                }
            },
            "axisTick": {
                "show": true,
                inside:true
            },
            "axisLabel": {
                "interval": 0,
                "color":"#333"
            },
            "splitArea": {
                "show": false
            },
        }
    ],
  
    "series": [
        
        {
            "name": "识别户数",
            "type": "bar",
            "yAxisIndex": 0,
            "barMaxWidth": 38,
            zlevel:1,
            "itemStyle": {
                "normal": {
                    "color": "#41c7f4",
                    "label": {
                        "show": false
                    }
                }
            },
            "data": []
        },
        {
            "name": "推送户次",
            "type": "line",
            "yAxisIndex": 0,
            zlevel:3,
            smooth:false,
            symbolSize:5,
            symbol:'circle',
            lineStyle:{
                type:"solid"
            },
            "itemStyle": {
                "normal": {
                    "color": "#fc3e04",
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
            ]
        }
    ]
}


/*
* 计算含中文字符串的实际长度，或者截取字符串
* @param str {stirng} 需要处理计算的字符串
* @param cutStrLength {Number} 需要截取到第几位,
* @param ifAddDot {Boolean} 截断以后是否追加。。。,
* @return 情况一： 如果没有参数二，返回字符串真实长度
* @return 情况二： 如果有参数二，返回一个对象记录截取内容
* @return 情况三： 如果还有参数三，截取内容后追加...
*/
window.GetLengthByCodeOrCut = function(str,cutStrLength,ifAddDot) {
  cutStrLength = cutStrLength?cutStrLength:0;
  var realLength = 0, len = str.length, charCode = -1;
  var ifCut=false;
  var nowStr="";
  if(!isNaN(cutStrLength)&&cutStrLength!=0){
    ifCut=true;
  }
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
       realLength += 1;
    }else{
       realLength += 2;
    }
    nowStr=nowStr+str.charAt(i);
    if(ifCut&&cutStrLength<=realLength){
      return {
        hasCut:true,
        cutLength:cutStrLength,
        realLength:realLength,
        cutStr:ifAddDot?(nowStr+"..."):nowStr,
        fullStr:str
      };
    }
  }
  if(ifCut&&cutStrLength>realLength){
      return {
        hasCut:false,
        fullStr:str,
    cutStr:nowStr
      };
  }else{
    return realLength;
  }
};

//初始化页面的其他信息
var initHmtlNum = function(data){

    //识别数据
    $(".js-shibie").each(function(index,preDom){
        $(preDom).html(data.shiBie[index]);
    });

    //推送数据
    $(".js-tuisong").each(function(index,preDom){
        $(preDom).html(data.tuiSong[index]);
    });

    //成效数据
    $(".js-chengxiao").each(function(index,preDom){
        $(preDom).html(data.chengXiao[index]);
    })

};

//页面的控制对象
var PageObj ={

    //监听数据回调对象--延迟对象
    promiseObj:null,

    //传递的数据
    data:[],

    //存放数组: 按识别内容的区分
    ModefyGroupData:[],

    //需要传递的参数
    param:{

        //总体外框的ID
        "wrapperID":"wrapperDom",

        //外框的 $Dom
        $wrapperDom:null,

        //日期选择框的对象
        "$miniDateSelect":null,

        //其他页面需要初始化的参数
        initHmtlNum:$.noop,

        //echart参数: 推送问题率 仪表
        echartIdMeter:"EchartBoxMeter",
        //echart参数: 推送问题率
        echartOptonMeter:optionEchartBoxMeter,

        //切换下方各个屏幕的对象
        switchBtnClass:".js-switch-btn",
        switchCntClass:".js-switch-column",

        //echart参数: 按税务机关
        echartIdOffice:"EchartBoxOffice",
        //echart参数: 按税务机关
        echartOptonOffice:optionEchartBoxOffice,
        //控制切换的按钮$集合: 按税务机关
        $echartCrtolOffice:null,

        //echart参数: 按行业
        echartIdHang:"EchartBoxHang",
        //echart参数: 按行业 optionEchartBoxHang
        echartOptonHang:optionEchartBoxOffice,
        //控制切换的按钮$集合: 按行业
        $echartCrtolHang:null,

        //echart参数: 按识别内容
        echartIdBar:"EchartBoxBar",
        //echart参数: 按识别内容
        echartOptonBar:optionEchartBoxBar,
        //按钮的外框: 按识别内容
        $echartCrtolContentWrapper:$(".js-btn-switch-content"),
        //内部按钮的class: 按识别内容
        $echartCrtolContentBtnClass:".js-content-btn",
        //输出的表格: 按识别内容
        $echartCrtolContentTable:$("#ContentTable"),
        //分组的间隔: 按识别内容
        PreContentPart:8,

        //echart参数: 按月份
        echartIdMouth:"EchartBoxMouth",
        //echart参数: 按月份
        echartOptonMouth:optionEchartBoxMouth,
        //控制切换的按钮$集合: 按月份
        $echartCrtolMouth:null,
    },

    //用于保存请求到的数据
    data:{},

    /*初始化自身参数 和 $DOM对象 以及 事件注册
     @param param  
     @return null
    * */
    init: function(param){
        // 传递的日期值
        var dateValue;
        // 初始化各个参数
        PageObj.param=$.extend({},PageObj.param,param);
        PageObj.param.$wrapperDom = $("#"+this.param.wrapperID);

        if(PageObj.param.$miniDateSelect){
            dateValue = PageObj.param.$miniDateSelect.getValue();
        }
        dateValue=dateValue?dateValue:"";
        this.getPageData(dateValue);

        this.onevent();
    },

    /*操作页面数据获取
     @param data {String} 需要查询的日期
     @return null
    * */
    getPageData:function(data){
        var _this = this;
        //不是第一次加载，就不需要注册监听事件了
        if(this.promiseObj){
            GloabConfig.GetDataAjax(data,true);
        }else{
            this.promiseObj = GloabConfig.GetDataAjax(data,true);
            this.promiseObj.progress(function(data){
                //获取到的数据
                _this.data=data;
                //初始化头部信息
                _this.param.initHmtlNum(data);
                //初始化 问题率
                _this.echartInitQuestion();
                //重置下方数据
                _this.ResetAll();
                //切换到第一屏显示
                _this.switchColumn(0);
            })
        }
    },

    /*初始化 echart元素 问题率 仪表
     @param echartId {String} echart的ID
     @param echartOption {Object} echart的Option
     @return null
     */
    _ehcartInit: function(echartId,echartOption){
        setTimeout(function(){
            SingleEchart.initSingleEchart( echartId, echartOption );
        },100)
    },

    /*初始化 echart元素 问题率 仪表
     @return null
     */
    echartInitQuestion:function(){
        var _this = this;
        var data = _this.data;
        //展示头部的echart
        //echartDataQuestion
        var option = _this.param.echartOptonMeter;
        option.series[1].data=[data.echartDataQuestion];
        option.series[1].axisLabel.formatter=function(e){
            if(e == parseInt(data.echartDataQuestion.value)){
                return data.echartDataQuestion.value+'%';
            }
        };
        _this._ehcartInit(  _this.param.echartIdMeter, option );
    },

    //重置所有元素 所有的元素都是通过是否具有 current 来表示是否已经有数据
    ResetAll:function(){
        var _this = this;
        _this.param.$echartCrtolOffice.data("hasInitData",false).removeClass("current");
        _this.param.$echartCrtolHang.data("hasInitData",false).removeClass("current");
        _this.param.$echartCrtolMouth.data("hasInitData",false).removeClass("current");
        _this.param.$echartCrtolMouth.data("hasInitData",false).removeClass("current");
        _this.param.$echartCrtolContentWrapper.data("hasInitData",false).html("");
    },

    /*用于切换各个屏幕
     @param param_num_index {Number} 需要切换的大栏目号
    */
    switchColumn: function( param_num_index ) {

        var _this = this;

        var $btnGroup = _this.param.$wrapperDom.find(_this.param.switchBtnClass);
        var $GroupColumn = _this.param.$wrapperDom.find(_this.param.switchCntClass);

        _this._changeShowStyelIndex($GroupColumn,param_num_index);
        _this._changeShowStyelIndex($btnGroup,param_num_index);
        //按机关
        if(param_num_index==0){
            //是不是第一次点击，第一次需要默认显示第一个切换的数据
            if(_this.param.$echartCrtolOffice.data("hasInitData")){
                _this.echartInitJiGuan();
            }else{
                _this.param.$echartCrtolOffice.data("hasInitData",true);
                _this._changeShowStyelIndex(_this.param.$echartCrtolOffice,0);
                _this.echartInitJiGuan(0);
            }
        }
        //按行业
        if(param_num_index==1){
            //是不是第一次点击，第一次需要默认显示第一个切换的数据
            if(_this.param.$echartCrtolHang.data("hasInitData")){
                _this.echartInitHang();
            }else{
                _this.param.$echartCrtolHang.data("hasInitData",true);
                _this._changeShowStyelIndex(_this.param.$echartCrtolHang,0);
                _this.echartInitHang(0);
            }
        }
        //按月份
        if(param_num_index==3){
            if( _this.param.$echartCrtolMouth.data("hasInitData") ){
                _this.echartInitMouth();
            }else{
                _this.param.$echartCrtolMouth.data("hasInitData",true);
                _this._changeShowStyelIndex(_this.param.$echartCrtolMouth,0);
                _this.echartInitMouth(0);
            }
        }
        //按识别内容
        if(param_num_index==2){
            _this.f_ModefyData();
            var $BtnGroup = _this.param.$echartCrtolContentWrapper.find( _this.param.$echartCrtolContentBtnClass);
            //是否初始化按钮切换列表
            if($BtnGroup.length>0 ){

                _this.InitContent();

            }else{

                var pushHtml="";
                $(_this.ModefyGroupData).each(function(index,preData){
                    pushHtml=pushHtml+'<span class="switchbtn js-content-btn">'+preData.name+'</span>';
                });
                _this.param.$echartCrtolContentWrapper.html(pushHtml);
                $BtnGroup = _this.param.$echartCrtolContentWrapper.find( _this.param.$echartCrtolContentBtnClass);
                _this._changeShowStyelIndex($BtnGroup,0);

                _this.InitContent(0);
            }
        }
    },

    /*改变样式函数
      @param param_o_$Group {$Dom} 需要删除样式的总体对象
      @param param_o_$singe {$Dom} 需要添加样式的单个对象
      @return null
    */
    _changeShowStyel:function(param_o_$Group,param_o_$singe){
        param_o_$Group.removeClass("current");
        param_o_$singe.addClass("current")
    },

    /*改变样式函数
      @param param_o_$Group {$Dom} 需要删除样式的总体对象
      @param param_n_index {number} 需要特殊显示的序列
      @return null
    */
    _changeShowStyelIndex:function(param_o_$Group,param_n_index){
        param_o_$Group.removeClass("current");
        param_o_$Group.eq(param_n_index).addClass("current");
    },

    /*初始化 echart元素　按税务机关
      @param index {Number} 需要切换的栏目号，不传入则只对echart做resize处理
      @return null
    */
    echartInitJiGuan:function(index){    
        var _this = this;
        _this._echartInitJiGuanAndHang( index, _this.param.echartIdOffice, _this.param.echartOptonOffice , _this.data.ShuiWuJiGuan );
    },

    /*初始化 echart元素　按行业
    @param index {Number} 需要切换的栏目号，不传入则只对echart做resize处理
    */
    echartInitHang:function(index){
        var _this = this;
        _this._echartInitJiGuanAndHang( index, _this.param.echartIdHang, _this.param.echartOptonHang , _this.data.HangYe );
    },

    /*合并联合处理函数 echart元素　按税务机关 按行业
     @param index {Number} 需要切换的栏目号，不传入则只对echart做resize处理
     @param echartId {String} echart的ID
     @param echartOption {Object} echart的Option
     @param dataArray {Object} 后台获取的数据
     @return null
     */
    _echartInitJiGuanAndHang(index,echartId,echartOption,dataArray){
        var _this = this;
        // echart 配置参数
        var option =echartOption ;
        var data  ;
        var currentIndex ;
        if( typeof index =="undefined"){
            SingleEchart.getEchartDom(echartId).resize();
            return true;
            currentIndex=0
        }else{
            currentIndex=index;
        }
        if(currentIndex==0){
            option.yAxis[0].name="单位：户数";
            option.series[0].name="增值税纳税人数";
            option.series[1].name="识别户数";
            option.legend.data = ["增值税纳税人数","识别户数","占比"];
        }else{
            option.yAxis[0].name="单位：户次";
            option.series[0].name="已推送户次";
            option.series[1].name="已反馈户次";
            option.legend.data = ["已推送户次","已反馈户次","占比"];
        }
        data = dataArray[currentIndex];
        
        option.xAxis[0].data = data.name;
        option.series[0].data = data.TotalValue;
        option.series[1].data = data.recognizeValue;
        option.series[2].data = data.preCent;
        _this._ehcartInit(  echartId, option );
    },

    /*初始化 echart元素　按月份
     @param index {Number} 需要切换的栏目号，不传入则只对echart做resize处理
    */
    echartInitMouth:function(index){
        var _this = this;
        var option =_this.param.echartOptonMouth ;
        var data  ;
        var currentIndex ;
        if( typeof index =="undefined"){
            SingleEchart.getEchartDom(_this.param.echartIdMouth).resize();
            return true;
            currentIndex=0;
        }else{
            currentIndex=index;
        }
        if(currentIndex==0){
            option.yAxis[0].name="单位：户数"
        }else{
            option.yAxis[0].name="单位：户次"
        }
        option.legend.data = ["识别户数","推送户次"];

        data = _this.data.Mouth[currentIndex];
        option.xAxis[0].data=data.name;
        option.series[0].data=data.TotalValue;
        option.series[1].data=data.recognizeValue;
        _this._ehcartInit(  _this.param.echartIdMouth, option );
    },

    /*专门处理 按识别内容部分的数据 */
    f_ModefyData:function(){
        var _this = this;

        var GroupData=[];
        var part = _this.param.PreContentPart;
        var groupindex =-1;
        var currentName;
        //标记是否已经编辑过，重新请求，会没有此属性
        if(_this.data.Content.hasModefyed==true){
            return true;
        }
        _this.data.Content.hasModefyed=true;

        $(_this.data.Content).each(function(index,preData){
            preData.rank=(index+1);
            //这里将字符串截取到4个字符
            preData.cutName = GetLengthByCodeOrCut(preData.name,8,true).cutStr;

            if( index%part==0){
                groupindex++;
                currentName=((groupindex)*part+1)+"-"+((part*(groupindex+1)));
                GroupData[groupindex]={
                    name:currentName,
                    group:[]
                };
            }
            GroupData[groupindex].group.push(preData);
        });
        _this.ModefyGroupData=GroupData;

    },

    /*按内容处理的函数 处理按钮，处理表格，处理echart
     @param index {Number} 需要切换的栏目号，不传入则只对echart做resize处理
    */
    InitContent:function(index){
        var _this = this;
        if( typeof index =="undefined"){
           SingleEchart.getEchartDom(_this.param.echartIdBar).resize();
           return true;
        }

        //绘制表格数据
        ContentTable.draw(_this.param.$echartCrtolContentTable, _this.ModefyGroupData[index] );

        var data = _this.ModefyGroupData[index].group;
        var option = _this.param.echartOptonBar;
        var nameArray=[];
        var valueArray=[];
        $(data).each(function(index,preData){
            nameArray.push(preData.cutName);
            //name2 是真正的标签名字，由于标签名字过长，X轴坐标会隐藏截掉一部分
            valueArray.push({value:preData.value,name2:preData.name});
        });
        option.xAxis[0].data=nameArray;
        option.series[0].data=valueArray;
        _this._ehcartInit(  _this.param.echartIdBar, option );
    },

    
    //注册页面事件
    onevent:function(){
        var _this = this;

        //日期选择框，改变值，出发改变
        if(_this.param.$miniDateSelect){
            _this.param.$miniDateSelect.on("valuechanged", function (param) {
                _this.getPageData(param.value);
            });      
        }

        //大块的标签切换
        _this.param.$wrapperDom.on("click", _this.param.switchBtnClass , function () {
            var index = $(this).index();
            _this.switchColumn(index);
        });

        //按机关的点击切换
        _this.param.$echartCrtolOffice.on("click",  function () {
            var index = $(this).index();
            _this._changeShowStyelIndex(_this.param.$echartCrtolOffice,index);
            _this.echartInitJiGuan(index);
        });

        //按行业的点击切换
        _this.param.$echartCrtolHang.on("click",  function () {
            var index = $(this).index();
            _this._changeShowStyelIndex(_this.param.$echartCrtolHang,index);
            _this.echartInitHang(index);
        });

        //按月份的点击切换
        _this.param.$echartCrtolMouth.on("click",  function () {
            var index = $(this).index();
            _this._changeShowStyelIndex(_this.param.$echartCrtolMouth,index);
            _this.echartInitMouth(index);
        });

        //按 识别内容 的点击切换
        _this.param.$echartCrtolContentWrapper.on("click", _this.param.$echartCrtolContentBtnClass, function () {
            var index = $(this).index();
            var $btnGroup = _this.param.$echartCrtolContentWrapper.find( _this.param.$echartCrtolContentBtnClass);
            _this._changeShowStyelIndex($btnGroup,index);
            _this.InitContent(index);
        });
    }

};



$(function(){

    mini.parse();

    //初始化页面参数
    PageObj.init({

        //初始化页面函数
        initHmtlNum:initHmtlNum,
        //日期选择控件
        $miniDateSelect:mini.get(  $(".js-date-select").get(0)  ),
        //按机关
        $echartCrtolOffice:$(".js-switchbtn-office"),
        //按行业
        $echartCrtolHang:$(".js-switchbtn-hang"),
        //按月份
        $echartCrtolMouth:$(".js-switchbtn-mouth"),
        //按内容
        $echartCrtolContentWrapper:$(".js-btn-switch-content"),
        //按内容的切换按钮
        $echartCrtolContentBtnClass:".js-content-btn",
        //按内容的表格部分    
        $echartCrtolContentTable:$("#ContentTable")

    });

});


