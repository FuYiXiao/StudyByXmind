
mini = mini || {};

/*
 * 负责HTML解析，创建组件，并将组件与HTML进行绑定。
 * @param el 解析限定区域
 */
mini._firstParse = true;
mini.parse = function (el) {
    if (mini._firstParse) {

        mini._firstParse = false;

        var _doms = document.getElementsByTagName("iframe");
        var doms = [];
        for (var i = 0, l = _doms.length; i < l; i++) {
            var d = _doms[i];
            doms.push(d);
        }

        for (var i = 0, l = doms.length; i < l; i++) {
            var d = doms[i];
            var src = $(d).attr("src");
            if (!src) continue;

            d.loaded = false;

            d._onload = d.onload;
            d._src = src;
            d.onload = function () { };
            d.src = "";

        }
        setTimeout(function () {

            for (var i = 0, l = doms.length; i < l; i++) {
                var d = doms[i];

                if (d._src && $(d).attr("src") == "") {
                    d.loaded = true;
                    d.onload = d._onload;
                    d.src = d._src;
                    d._src = d._onload = null;

                }
            }
        }, 20);

    }


    //有ID作为参数的情况。
    if (typeof el == "string") {
        var id = el;
        el = mini.byId(id);				//通过ID选择DOM对象
        if (!el) el = document.body; 	//如果给定ID没有匹配的DOM对象，则默认元素设置为BODY。
    }
    
    if (el && !mini.isElement(el))	 	//对象el如果不是DOM！
    	el = el.el;
    if (!el) 							//保底的做法。
    	el = document.body;

    var visible = mini.WindowVisible;	//是否显示。
    if (isIE) {							//如果是IE则设置不显示
        mini.WindowVisible = false;
    }

    mini._doParse(el);
  
    mini.WindowVisible = visible;		//晚上后再设置回原状态。

    mini.layout(el);
}

/*
 * 通常参数的是body， mini的解析策略是从body逐层解析。
 * @private
 */
mini._doParse = function (el) {
    if (!el) return;
    var nodeName = el.nodeName.toLowerCase();
    if (!nodeName) return;		//非标签。可能是document/window之流。
    
    var className = el.className;	//获取组件声明信息。
    if (className && className.split) {
        var control = mini.get(el);	//获取DOM对象绑定的组件。
        if (!control) {
            var classes = className.split(" ");
            for (var i = 0, l = classes.length; i < l; i++) {
                var cls = classes[i];
                var clazz = mini.getClassByUICls(cls);
                if (clazz) {
                    mini.removeClass(el, cls);
                    var ui = new clazz();	//创建组件
                    //性能优化 赵美丹 2013-04-17
                    ui._allowLayout = false;
                    ui = mini.applyTo.call(ui, el);	//组件绑定，生成HTML結構
                    el = ui.el;	
                    ui._allowLayout = true;
                    break;
                }
            }
        }
    }

    if (nodeName == "select"
            || mini.hasClass(el, "mini-menu")
            || mini.hasClass(el, "mini-datagrid")
            || mini.hasClass(el, "mini-treegrid")
            || mini.hasClass(el, "mini-tree")
            || mini.hasClass(el, "mini-button")
            || mini.hasClass(el, "mini-textbox")
            || mini.hasClass(el, "mini-buttonedit")
        ) {
        return;
    }

    var children = mini.getChildNodes(el, true);
    for (var i = 0, l = children.length; i < l; i++) {
        var node = children[i];
        if (node.nodeType == 1) {   //元素element 剔除文本元素之类的其他元素。
            if (node.parentNode == el) {		//随处可见的保底啊
                mini._doParse(node);
            }
        }
    }
}