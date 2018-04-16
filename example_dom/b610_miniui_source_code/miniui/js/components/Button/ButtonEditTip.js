
/**
 * ButtonEditTip 是mini UI buttonEdit中的提示组件
 * @class mini.Button
 * @constructor
 * @extends mini.Control
 */

mini.ButtonEditTip = function (el) {
    this.textEl = el;


    this.attr = '';
    this.attrDelimiter = ",";
    this._create();
}

mini.ButtonEditTip.prototype = {

    /**
     * 分隔符
     * @type String
     * @author 赵美丹
     */
    delimiter: "<br/>",

    attrDelimiter: ",",


    /**
     * 创建组件最外层HTML结构，并绑定给组件实例。
     * @default
     * @private
     */
    _create: function () {

        this.el = document.createElement("div");
        this.el.className = "mini-buttonedittip";
        this.el.innerHTML = '<div class="mini-buttonedittip-colortip">'
        + '<div class="mini-buttonedittip-content"></div>'
        + '</div>';
        this._contentEl = this.el.firstChild.childNodes[0];

        var lengthspanEl = document.getElementById("lengthspan");
        //if undefined create it
        if (!lengthspanEl) {
            var _lengthspanEl = document.createElement("span");
            _lengthspanEl.className = "lengthspan";
            _lengthspanEl.id = "lengthspan";
            document.body.appendChild(_lengthspanEl);
            this._lengthspanEl = _lengthspanEl;
        } else{
            this._lengthspanEl = lengthspanEl;
        }
        document.body.appendChild(this.el);

        mini_on(this.textEl, "mouseenter", this.show, this);
        mini_on(document, "mousemove", this.hide, this);
    },
    /**
     * 析构函数
     */
    destroy: function (removeEl) {
        //内存泄露问题优化 赵美丹 2013-04-17
        if (this.textEl) {
            this.textEl.onmouseenter = null;
            this.textEl.onmouseleave = null;
            mini.clearEvent(this.textEl);
            //mini.clearEvent(document);
            //clearEvent(document)会取消所有document上的事件 pzf 2005-06
            mini_un(document, "mousemove", this.hide, this);
        }
        this.el = null;
        this._lengthspanEl = null;
        this._contentEl = null;


    },
    /**
     * 更新组件函数
     */
    _doUpdate: function (text) {
        //特殊字符处理 潘正锋 2013-05-06
        text = mini.htmlEncode(text).split(mini.htmlEncode(this.attrDelimiter)).join(this.delimiter);
        this._contentEl.innerHTML = text;
    },
    /**
     * 判断字数是否超过
     */
    isOverFlow: function (el, text) {
        if (mini.isNull(text) || text === '')
            return false;
        //如果长度非常长，取200个字符就够了
        if (text.length > 300)
            text = text.substring(0, 300);
        var style;

        if (document.defaultView) //火狐
            style = document.defaultView.getComputedStyle(el, null);
        else
            style = el.currentStyle;//IE
        var fontSize = style.fontSize;
        var fontFamily = style.fontFamily;

        this._lengthspanEl.innerHTML = text;
        this._lengthspanEl.style.fontSize = fontSize;
        this._lengthspanEl.style.fontFamily = fontFamily;
        //解决数字刚好显示的情况下仍显示tooltip的问题 赵美丹 2013-05-28
        if (this._lengthspanEl.offsetWidth - 2 > el.clientWidth) {
            return true;
        }
        return false;
    },
    /**
     * 显示tip
     */
    show: function () {

        var text = this.textEl.value;

        if (!this.isOverFlow(this.textEl, text))
            return;
        this._doUpdate(text);
        var box = mini.getBox(this.textEl);
        this._contentEl.height = "auto";
        //最小200
        var width = Math.max(parseInt(this.textEl.clientWidth) + 10, 200);

        //解决输入框较小时，tooltip偏移输入框的问题 赵美丹 2013-05-28
        var left = box.x + box.width / 2 - width / 2;
        var top = (box.y + box.height + 1);
        //超过边框处理 潘正锋
        if (left + width > jQuery(window).width())
            left = jQuery(window).width() - width;
        if (left < 0)
            left = 0;
        this.el.style.left = left + 5 + "px";
        this.el.style.top = top + "px";
        this.el.style.display = "block";
        this._contentEl.style.height = "auto";
        mini.setWidth(this._contentEl,width) ;
        //解决 ie6下面point的width:100%会跑到外面去 pzf 2014-10
        //mini.setWidth(this._pointyEl,width);
        if (mini.getHeight(this._contentEl) > 200) {
            mini.setHeight(this._contentEl,188) ;
        }
        //解决输入框光标穿透tooltip的问题 赵美丹 2013-03-12
        this.el.focus();
        this.isshow = true;
    },
    hide: function (e) {
        if (mini.findParent(e.target, "mini-buttonedittip")||mini.findParent(e.target, "mini-buttonedit-input")) {
            return;
        }
        this.el.style.display = "none";
    },
    setIsshow: function (value) {
        if (this.isshow != value) {
            this.isshow = value;
            this.isshow ? this.show() : this.hide();
        }
    },
    getIsshow: function () {
        return this.isshow;
    }


}