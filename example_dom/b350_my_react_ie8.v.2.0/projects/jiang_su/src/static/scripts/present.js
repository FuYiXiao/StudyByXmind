// 基于准备好的dom，初始化echarts实例

var myChart = echarts.init(document.getElementById('echartbox'));

var option = option = {

    tooltip : {
        formatter: "{a} <br/>{c}%"
    },

    series : [
        {
            name: '人工接通率',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 100,
            splitNumber: 10,
            radius: '85%',
            //仪表盘轴线
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color:[[0.2, '#1de7ff'], [0.8, '#fcdb76'], [1, '#c23531']]
                },
            },
            //小刻度
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            //大刻度
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            //指针
            pointer: {
                width:6
            },
            //仪表盘指针样式
            itemStyle:{
                color:"#fff",
            },
            //标题
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 20,
                    color:"#fff"
                }
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color:"#fff",
                    fontSize:16
                },
                formatter:function(value){
                        return value+"%"
                }
            },
            data:[{value: 98.68, name: '人工接通率'}]
        },
        {
            name: '满意度',
            type: 'gauge',
            center: ['20%', '60%'],    // 默认全局居中
            radius: '65%',
            min: 0,
            max: 100,
            endAngle:45,
            splitNumber: 10,
            //仪表盘轴线
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color:[[0.2, '#1de7ff'], [0.8, '#fcdb76'], [1, '#c23531']]
                },
            },
            axisTick: {            // 坐标轴小标记
                length:12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length:20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            //指针
            pointer: {
                width:5
            },
            //仪表盘指针样式
            itemStyle:{
                color:"#fff",
            },
            //标题
            title : {
                offsetCenter:[0, '-20%'],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 16,
                    color:"#fff"
                }
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color:"#fff",
                    fontSize:16,
                 },
                formatter:function(value){
                        return value+"%"
                }
            },
            data:[{value: 60.68, name: '满意度'}]
        },
        {
            name: '员工利用率',
            type: 'gauge',
            center: ['80%', '60%'],    // 默认全局居中
            radius: '65%',
            min: 0,
            max: 100,
            startAngle:135,
            splitNumber: 10,
            //仪表盘轴线
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10,
                    color:[[0.2, '#1de7ff'], [0.8, '#fcdb76'], [1, '#c23531']]
                },
            },
            axisTick: {            // 坐标轴小标记
                length:12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length:20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            //指针
            pointer: {
                width:5
            },
            //仪表盘指针样式
            itemStyle:{
                color:"#fff",
            },
            //标题
            title : {
                offsetCenter:[0, '-20%'],
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize: 16,
                    color:"#fff"
                }
            },
            detail: {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color:"#fff",
                    fontSize:16
                },
                formatter:function(value){
                        return value+"%"
                }
            },
            data:[{value: 90.06, name: '员工利用率'}]
        }
    ]
};
;



// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var myChart2 = echarts.init(document.getElementById('echartbox2'));
var option2 = {
    //标题
    title: {
        text: '转接人工量',
        show: true,
        textStyle: {
            fontWeight:'400',
            fontSize: 18,
            color: '#fff' 
        },
    },
    //提示工具
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ff4a23'
            }
        }
    },
    //坐标框
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    //X坐标轴
    xAxis: [{
        type: 'category',
        //数据在刻苦之间
        boundaryGap:true,
        //刻度线样式 
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        //刻度文字样式
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisTick:{
            show:false
        },
        data: ['10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:00', '12:15']
    }],
    yAxis: [{
        type: 'value',
        name: '',
        axisTick: {
            show: false
        },
        //刻度线样式 
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        //刻度文字样式
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        //分割线
        splitLine: {
            show:true,
            lineStyle: {
                type: 'dashed',
                color: '#ccc'
            }
        }
    }],
    series: [{
        name: '转接人工量',
        type: 'line',
        symbolSize:10,
        smooth:true,
        symbol: 'circle',
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 255, 255, 0.5)'
                }, {
                    offset: 1,
                    color: 'rgba(255,255, 255, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            show:true,
            normal: {
                color: 'rgb(255,255,255)',
                borderColor: 'rgba(255,255,255,0.2)',
                borderWidth: 12

            }
        },
        label:{
            show:true
        },
        data: [120, 110, 145, 122, 165, 150, 145, 122, 165, 150]
    }, ]
}

myChart2.setOption(option2);







