  
    var graph = new joint.dia.Graph();

 

    //定义画布
    var paper = new joint.dia.Paper({
        el: $('#paper'),
        width: 1100,
        height: 1100,
        gridSize: 1,
        model: graph,
    });

    //去除默认样式，使所有事件不可用
    paper.$el.css('pointer-events', 'none')

   //定义形状
    var state = function(x, y, shape, background, text){
        var cell;
        if(shape==="rect"){
            //正方形
            cell = new joint.shapes.basic.Rect({
                position: { x: x, y: y },//坐标
                size: { width: 140, height: 40 },//宽高
                attrs: { 
                    rect: {
                        fill: {
                            type: 'linearGradient',
                            stops: [
                                { offset: '0%', color: background },//渐变开始
                                { offset: '100%', color: '#fe8550' }//渐变结束
                            ],
                            attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }
                        },
                        stroke: background,//边框颜色
                        'stroke-width': 1//边框大小
                    },
                    text: { 
                        text: text,
                        fontSize:16 
                    } //显示文字
                }
            });
        } else if(shape==="ellipse"){
            //椭圆
            cell = new joint.shapes.basic.Ellipse({
                position: { x: x, y: y },//坐标
                size: { width: 140, height: 40 },//宽高
                attrs: { 
                    ellipse: {
                        fill: {
                            type: 'linearGradient',
                            stops: [
                                { offset: '0%', color: background },//渐变开始
                                { offset: '100%', color: '#FFFFFF' }//渐变结束
                            ],
                            //渐变方向
                            attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }
                        },
                        stroke: background,//边框颜色
                        'stroke-width': 1//边框大小
                    },
                    text: { 
                        text: text,
                        fontSize:16 
                    } //显示文字
                }
            });
        } else if(shape==="Rhombus"){
            //菱形
            cell = new joint.shapes.basic.Rhombus({
                position: { x: x, y: y },//坐标
                size: { width: 140, height: 40 },//宽高
                attrs: { 
                    path: {
                        fill: {
                            type: 'linearGradient',
                            stops: [
                                { offset: '0%', color: background },//渐变开始
                                { offset: '100%', color: '#FFFFFF' }//渐变结束
                            ],
                            //渐变方向
                            attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }
                        },
                        stroke: background,//边框颜色
                        'stroke-width': 1//边框大小
                    },
                    text: { 
                        text: text,
                        fontSize:16 
                    } //显示文字
                }
            });

        }
        graph.addCell(cell);
        return cell;
    };
    
    //定义连线
    function link(source, target, label){
        var cell = new joint.dia.Link({ 
            source: { id: source.id },
            target: { id: target.id },
            labels: [{ position: 0.5, attrs: { text: { text: label || '', 'font-weight': 'bold' } } }],
            router: { name: 'manhattan' },//设置连线弯曲样式 manhattan直角
            attrs: {
                '.connection': {
                    stroke: '#333333',//连线颜色
                    'stroke-width': 2//连线粗细
                },
                '.marker-target': {
                    fill: '#333333',//箭头颜色
                    d: 'M 10 0 L 0 5 L 10 10 z'//箭头样式
                }
            }
        });
        graph.addCell(cell);
        return cell;
    }

    //创建元素
    //var state2 = state(400,300,"rect","#f7a07b", "HTTP错误码分析");
    //var state3 = state(600,300,"rect","#f7a07b", joint.util.breakText("TCP异常和其他原因",{width:80}));
    var node1 = state(200,0,"ellipse","#ff8700", "接听来电");
    var ifnode1 = state(200,100,"Rhombus","#00FFFF", "是否受理范围");

    var node2 = state(300,200,"rect","#f7a07b", "查询12366知识");
    var ifnode2 = state(300,300,"Rhombus","#00FFFF", "能否答复");

    var node3 = state(500,400,"rect","#f7a07b", "现场求助");
    var node4 = state(650,400,"rect","#f7a07b", "转接答复");
    var node5 = state(800,400,"rect","#f7a07b", "三方通话");

    var ifnode3 = state(650,500,"Rhombus","#00FFFF", "能否答复");

    var node6 = state(650,600,"rect","#f7a07b", "提交工单");

    var ifnode4 = state(650,700,"Rhombus","#00FFFF", "能否答复");

    var ifnode5 = state(850,700,"Rhombus","#00FFFF", "是否疑难问题");


    var node7 = state(750,800,"rect","#f7a07b", "1.5疑难问题");

    var node8 = state(950,800,"rect","#f7a07b", "工单转出");

    var node9 = state(350,900,"rect","#f7a07b", "答复");

    var node10 = state(350,1000,"rect","#f7a07b", "小节");

    //创建连线
    //link(state1, state2, "≥70%");
    link(node1, ifnode1, "");
    link(ifnode1, node2, "是");
    link(node2, ifnode2, "");

    link(ifnode2, node3, "");
    link(ifnode2, node4, "否");
    link(ifnode2, node5, "");

    link(node3, ifnode3, "");
    link(node4, ifnode3, "");
    link(node5, ifnode3, "");

    link(ifnode3, node6, "否");

    link(node6, ifnode4, "");

    link(ifnode4, ifnode5, "否");

    link(ifnode5, node7, "是");
    link(ifnode5, node8, "否");

    link(node7, node9, "");
    link(node8, node9, "");

    link(node9, node10, "");

    link(ifnode2, node9, "能");

    link(ifnode1, node10, "否");
