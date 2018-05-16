// 基于准备好的dom，初始化echarts实例

var myChart = echarts.init(document.getElementById('echartbox'));

//获取数据
var data = [{
    "name": "直接办结",
    "value": 25
}, {
    "name": "求助办结",
    "value": 25
}, {
    "name": "转接办结",
    "value": 42
}, {
    "name": "工单",
    "value": 38
}];

var xData = [],
    yData = [];

data.map(function(a, b) {
    xData.push(a.name);
    yData.push(a.value);
});

var option = {

    color: ['#fff'],

    tooltip: {
        trigger: 'axis',
        //分割线不显示
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
          return prams[0].name+":"+prams[0].data + "%"
        }
    },

    grid: {
        left: '0%',
        right: '0%',
        bottom: '26',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
          show:false
        },
        axisLine: {
          show:false,
          lineStyle: {
                color: '#fff'
          }
        },
        axisLabel: {
            color: '#fff',
            fontSize:18,
            margin:16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: true,
                lineStyle:{
                   color: ['#fff'],
                   opacity:0.1
                }
            },
            axisTick: {
                show: false
            },
            min: 0,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: 0,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [
          {
            name: '工单管理',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            /*
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            */
            itemStyle:{
              normal:{
                  barBorderRadius:20,
                  color:function(idx) {
                      console.log(idx)
                      var color = ['#dc4e54','#db8258','#eda350','#a6a34b','#84aa6d','#84abab']
                      return color[idx.dataIndex % color.length]
                  }
              }  
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};;

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);