
mini = mini || {};


mini._MaskID = 1;

mini._MaskObjects = {};

mini.mask = function (options) {
    
    var el = mini.byId(options);
    if (mini.isElement(el)) options = { el: el };
    else if (typeof options == "string") options = { html: options };

    options = mini.copyTo({
        html: "",
        cls: "",
        style: "",
        iconCls:"",
        message:"",
        backStyle: "background:#ccc"
    }, options);
    options.el = mini.byId(options.el);
    if (!options.el) options.el = document.body;
    var el = options.el;

    mini["unmask"](options.el);
    el._maskid = mini._MaskID++;
    mini._MaskObjects[el._maskid] = options;

    // 增加图标和文字 pzf 2014-07
    var icon = '<div class="' + options.iconCls + '"></div>';
    var s = '<table class="mini-messagebox-table"  cellspacing="0" cellpadding="0"><tr><td>'
        + icon + '</td><td  class="mini-messagebox-content-text">'
        + (options.html || options.message || "") + '</td></tr></table>';


    var maskEl = mini.append(el, '<div class="mini-mask">' +
        '<div class="mini-mask-background" style="' + options.backStyle + '"></div>' +
                        '<div class="mini-mask-msg ' + options.cls + '" style="' + options.style + '">' + s + '</div>'
        + '</div>');
    //解决遮罩层不能覆盖滚动条下的部分 潘正锋 2013-07-01
    if (el == document.body) mini.addClass(maskEl, 'mini-fixed');

    options.maskEl = maskEl;
    if (!mini.isNull(options.opacity)) {
        mini.setOpacity(maskEl.firstChild, options.opacity);
    }

    function center() {
        msgEl.style.display = "block";
        var size = mini.getSize(msgEl);
        msgEl.style.marginLeft = -size.width / 2 + "px";
        msgEl.style.marginTop = -size.height / 2 + "px";
    }
    var msgEl = maskEl.lastChild;
    msgEl.style.display = "none";
    
    setTimeout(function () {
        center();
    }, 0);
}

/*
 * 取消遮罩层
 * @param el 要取消那个元素上的遮罩层。
 */
mini["unmask"] = function (el) {
    el = mini.byId(el);
    if (!el) el = document.body;
    var options = mini._MaskObjects[el._maskid];
    if (!options) return;
    delete mini._MaskObjects[el._maskid];    
    var maskEl = options.maskEl;
    options.maskEl = null;
    if (maskEl && maskEl.parentNode) {
        maskEl.parentNode.removeChild(maskEl);
    }
}