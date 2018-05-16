// 基于准备好的dom，初始化echarts实例

var myChart = echarts.init(document.getElementById('echartbox'));



var data = [
    [0, 0, 25,"#fcdb76"],
    [1, 0, 25,"#1de7ff"],
    [2, 0, 42,"#ff6d29"],
    [3, 0, 38,"#036a4c"]
];

var option = {

    xAxis3D: {
        name: '',
        type: 'category',
        axisLabel:{
            textStyle:{
                color:"#fff"
            }
        },
        splitLine:{
            show:true,
        },
        data: ['直接结办', '求助结办', '转接结办', '工单']
    },
    yAxis3D: {
        show:true,
        name: '',
        type: 'category',
        splitLine:{
            show:false,
        },
        data: [] 
    },
    zAxis3D: {
        name: '',
        type: 'value',
        axisLabel:{
            textStyle:{
                color:"#fff"
            }
        },
        splitLine:{
            show:true,
        },
        min:0,
        max:100
    },
    grid3D: {
        show:true,
        boxWidth:"330",
        boxHeight:"130",
        boxDepth :"60",
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 1
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 14
            }
        },
        light: {
            main: {
                intensity: 1,
                shadow: true
            },
            ambient: {
                intensity: 0.3,
                shadow: true
            }
        },
        viewControl: {
            alpha: 5,
            beta: 20,
            //自动旋转
            //autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 5,
            distance: 250
        }
    },
    series: [{
        type: 'bar3D',
        name: '数量',
        data: data.map(function(item) {
            return {
                value: [item[0], item[1], item[2]],
                itemStyle:{
                    color:item[3]
                }, 
                label: {
                    show: true,
                    distance: 10,
                    formatter:function(param){
                        return param.data.value[2]+"%";
                    },
                    textStyle: {
                        color:item[3],
                        fontSize: 18,
                        borderWidth: 0,
                        borderColor: 'none',
                        backgroundColor: 'rgba(255,255,255,0)' 
                    },
                },
            }
        }),
        shading: 'lambert',
        itemStyle: {
            opacity: 1
        },
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);