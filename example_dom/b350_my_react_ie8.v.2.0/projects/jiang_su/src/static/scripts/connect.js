// 基于准备好的dom，初始化echarts实例

var myChart = echarts.init(document.getElementById('echartbox'));

var option = {

    //筛选过滤
    "legend": {
        x: '10',
        bottom: '70',
        orient:'vertical',
        textStyle: {
            color: '#fff',
            fontSize :14
        },
        pageButtonPosition:'start',
        data: ['转接人工', '人工接起', '接通率']
    },

    //鼠标移上提示
    "tooltip": {
        "trigger": "axis"
    },

    //gird
    "grid": {
        "borderWidth": 0,
        "left": 160,
        "bottom": 60,
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
                show:false,
                lineStyle: {
                    color: '#fff',
                    type:"dashed",
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
                alignWithLabel:true,
                legend:5,
                lineStyle:{
                    width:5,
                    type:"dotted"
                }
            },
            //分割区域
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "color":"#fff",
                margin:16
            },
            "data": [201706,201707,201708,201709,201710,201711,201712,201801,201802,201803,201804,201805]
        }
    ],

    "yAxis": [
        {
            "type": "value",
            index:0,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": true,
                inside:true
            },
            "axisLabel": {
                "interval": 0,
                "color":"#fff"
            },
            "splitArea": {
                "show": false
            },
        },
        {
            "type": "value",
            index:1,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": true,
                inside:true
            },
            "axisLabel": {
                "interval": 0,
                "color":"#fff"
            },
            "splitArea": {
                "show": false
            },
        }
    ],
  
    "series": [
        

        {
            "name": "人工接起",
            "type": "bar",
            "yAxisIndex": 0,
            "barMaxWidth": 38,
            zlevel:1,
            "itemStyle": {
                "normal": {
                    "color": "#ff4a23",
                    "label": {
                        "show": false
                    }
                }
            },
            "data": [
                8000,
                45000,
                140000,
                180000,
                240000,
                160000,
                60000,
                90000,
                190000,
                130000,
                70000,
                140000
            ]
        }, 
        {
            "name": "转接人工",
            "type": "bar",
            zlevel:0,
            "yAxisIndex": 0,
            "barMaxWidth": 38,
            "barGap": "-100%",
            "itemStyle": {
                "normal": {
                    "color": "#1de7ff",
                    "label": {
                        "show": false
                    }
                }
            },
            "data": [
                80200,
                68000,
                149000,
                190000,
                260000,
                190000,
                100000,
                90300,
                193000,
                170000,
                80000,
                140000
            ]
        },
        {
            "name": "接通率",
            "type": "line",
            "yAxisIndex": 1,
            zlevel:3,
            smooth:true,
            symbolSize:10,
            symbol:'circle',
            lineStyle:{
                type:"dashed"
            },
            "itemStyle": {
                "normal": {
                    "color": "#fff",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                30,
                60,
                80,
                78,
                70,
                68,
                98,
                70,
                90,
                98,
                98,
                100
            ]
        },
        {
            "name": "",
            "type": "line",
            zlevel:4,
            yAxisIndex:1,
            markLine : {
                symbol:[],
                lineStyle: {
                    normal: {
                        type: 'solid',
                        width:3,
                        color:'#ff4a23'
                    }
                },
                animationDuration:2000,
                label:{
                    show:true,
                    position:'left',
                    color:"#fff",
                    fontSize:16,
                    formatter:'年度目标值\n{b}{c}%'
                },
                data:[{
                    yAxis:74.52,
                    x:100
                }]
            },
            
        }
    ]
}


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);