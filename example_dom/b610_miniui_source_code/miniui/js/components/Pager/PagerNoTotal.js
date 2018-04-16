

mini.PagerNoTotal = function () {
    mini.PagerNoTotal.superclass.constructor.call(this);
}
mini.extend(mini.PagerNoTotal, mini.Control, {
    pageIndex: 0,
    pageSize: 10,


    showPageIndex: true,
    showPageSize: true,

    showReloadButton: true,

    _clearBorder: false,

    showButtonText: false,
    showButtonIcon: true,

    firstText: "首页",
    prevText: "上一页",
    nextText: "下一页",

    sizeList: [10, 20, 50, 100],

    uiCls: "mini-pagernototal",
    _create: function () {
        this.el = document.createElement("div");
        this.el.className = "mini-pager";


        var s = '<div class="mini-pager-left"></div>';
        this.el.innerHTML = s;

        this.buttonsEl = this._leftEl = this.el.childNodes[0];



        this.sizeEl = mini.append(this.buttonsEl, '<span class="mini-pager-size"></span>');


        this.sizeCombo = new mini.ComboBox();
        this.sizeCombo.setName("pagesize");
        this.sizeCombo.setWidth(48);
        this.sizeCombo.render(this.sizeEl);
        mini.append(this.sizeEl, '<span class="separator"></span>');

        this.firstButton = new mini.Button();
        this.firstButton.render(this.buttonsEl);

        this.prevButton = new mini.Button();
        this.prevButton.render(this.buttonsEl);

        this.indexEl = document.createElement("span");
        this.indexEl.className = 'mini-pager-index';
        this.indexEl.innerHTML = '<input id="" type="text" class="mini-pager-num"/>';
        this.buttonsEl.appendChild(this.indexEl);

        this.numInput = this.indexEl.firstChild;


        this.nextButton = new mini.Button();
        this.nextButton.render(this.buttonsEl);


        mini.append(this.buttonsEl, '<span class="separator"></span>');

        this.reloadButton = new mini.Button();
        this.reloadButton.render(this.buttonsEl);

        this.firstButton.setPlain(true);
        this.prevButton.setPlain(true);
        this.nextButton.setPlain(true);

        this.reloadButton.setPlain(true);

        this.update();
    },
    destroy: function (removeEl) {
        if (this.pageSelect) {
            mini.clearEvent(this.pageSelect);
            this.pageSelect = null;
        }
        //内存泄露问题优化 赵美丹 2013-04-17
        if (this.sizeCombo) {
            mini.clearEvent(this.sizeCombo);
            this.sizeCombo.destroy(removeEl);
            this.sizeCombo = null;
        }
        if (this.sizeEl) {
            mini.clearEvent(this.sizeEl);
            this.buttonsEl.removeChild(this.sizeEl);
            this.sizeEl = null;
        }
        if (this.firstButton) {
            mini.clearEvent(this.firstButton);
            this.firstButton.destroy(removeEl);
            this.firstButton = null;
        }
        if (this.prevButton) {
            mini.clearEvent(this.prevButton);
            this.prevButton.destroy(removeEl);
            this.prevButton = null;
        }
        if (this.numInput) {
            mini.clearEvent(this.numInput);
            this.indexEl.removeChild(this.numInput);
            this.numInput = null;
        }

        if (this.indexEl) {
            mini.clearEvent(this.indexEl);
            this.buttonsEl.removeChild(this.indexEl);
            this.indexEl = null;
        }
        if (this.nextButton) {
            mini.clearEvent(this.nextButton);
            this.nextButton.destroy(removeEl);
            this.nextButton = null;
        }

        if (this.reloadButton) {
            mini.clearEvent(this.reloadButton);
            this.reloadButton.destroy(removeEl);
            this.reloadButton = null;
        }
        if (this.buttonsEl) {
            mini.clearEvent(this.buttonsEl);
            this.el.removeChild(this.buttonsEl);
            this.buttonsEl = null;
            this._leftEl = null;
        }


        mini.Pager.superclass.destroy.call(this, removeEl);
    },
    _initEvents: function () {

        mini.Pager.superclass._initEvents.call(this);

        this.firstButton.on("click", function (e) {
            this._OnPageChanged(0);
        }, this);
        this.prevButton.on("click", function (e) {
            this._OnPageChanged(this.pageIndex - 1);
        }, this);
        this.nextButton.on("click", function (e) {
            this._OnPageChanged(this.pageIndex + 1);
        }, this);

        this.reloadButton.on("click", function (e) {
            this._OnPageChanged();
        }, this);


        function doPage() {
            if (changing) return;
            changing = true;
            var index = parseInt(this.numInput.value);
            if (isNaN(index)) {
                this.update();
            } else {
                this._OnPageChanged(index - 1);
            }
            setTimeout(function () {
                changing = false;
            }, 100);
        }

        var changing = false;
        mini.on(this.numInput, "change", function (e) {
            doPage.call(this);
        }, this);

        mini.on(this.numInput, "keydown", function (e) {
            if (e.keyCode == 13) {
                doPage.call(this);
                e.stopPropagation();
            }
        }, this);


        this.sizeCombo.on("valuechanged", this.__OnPageSelectChanged, this);
    },
    doLayout: function () {
        if (!this.canLayout()) return;
        mini.layout(this._leftEl);
    },
    setPageIndex: function (value) {
        if (isNaN(value)) return;
        this.pageIndex = value;
        this.update();
    },
    getPageIndex: function () {
        return this.pageIndex;
    },
    setPageSize: function (value) {
        if (isNaN(value)) return;
        this.pageSize = value;
        this.update();
    },
    getPageSize: function () {
        return this.pageSize;
    },

    setSizeList: function (value) {
        if (!mini.isArray(value)) return;
        this.sizeList = value;
        this.update();
    },
    getSizeList: function () {
        return this.sizeList;
    },
    setShowPageSize: function (value) {
        this.showPageSize = value;
        this.update();
    },
    getShowPageSize: function () {
        return this.showPageSize;
    },
    setShowPageIndex: function (value) {
        this.showPageIndex = value;
        this.update();
    },
    getShowPageIndex: function () {
        return this.showPageIndex;
    },
    setShowTotalCount: function (value) {
        this.showTotalCount = value;
        this.update();
    },
    getShowTotalCount: function () {
        return this.showTotalCount;
    },
    setShowPageInfo: function (value) {
        this.showPageInfo = value;
        this.update();
    },
    getShowPageInfo: function () {
        return this.showPageInfo;
    },
    setShowReloadButton: function (value) {
        this.showReloadButton = value;
        this.update();
    },
    getShowReloadButton: function () {
        return this.showReloadButton;
    },


    getTotalPage: function () {
        return this.totalPage;
    },
    update: function (index, size, total) {

        if (mini.isNumber(index)) this.pageIndex = parseInt(index);
        if (mini.isNumber(size)) this.pageSize = parseInt(size);
        if (mini.isNumber(total)) this.totalCount = parseInt(total);


        if (this.pageIndex <= 0) this.pageIndex = 0;


        this.firstButton.enable();
        this.prevButton.enable();
        this.nextButton.enable();


        if (this.pageIndex == 0) {
            this.firstButton.disable();
            this.prevButton.disable();
        }
        if (this.totalCount < this.pageSize) {
            this.nextButton.disable();
        }
        this.numInput.value = this.pageIndex > -1 ? this.pageIndex + 1 : 0;


        var sizeList = this.sizeList.clone();
        if (sizeList.indexOf(this.pageSize) == -1) {
            sizeList.push(this.pageSize);
            sizeList = sizeList.sort(function (a, b) {
                return a > b;
            });
        }
        var sizes = [];
        for (var i = 0, l = sizeList.length; i < l; i++) {
            var num = sizeList[i];
            var option = {};
            option.text = num;
            option.id = num;
            sizes.push(option);
        }
        this.sizeCombo.setData(sizes);
        this.sizeCombo.setValue(this.pageSize);


        var firstText = this.firstText, prevText = this.prevText, nextText = this.nextText, lastText = this.lastText;
        if (this.showButtonText == false) {
            firstText = prevText = nextText = lastText = "";
        }
        this.firstButton.setText(firstText);
        this.prevButton.setText(prevText);
        this.nextButton.setText(nextText);


        var firstText = this.firstText, prevText = this.prevText, nextText = this.nextText;
        if (this.showButtonText == true) {
            firstText = prevText = nextText = "";
        }
        this.firstButton.setTooltip(firstText);
        this.prevButton.setTooltip(prevText);
        this.nextButton.setTooltip(nextText);


        this.firstButton.setIconCls(this.showButtonIcon ? "mini-pager-first" : "");
        this.prevButton.setIconCls(this.showButtonIcon ? "mini-pager-prev" : "");
        this.nextButton.setIconCls(this.showButtonIcon ? "mini-pager-next" : "");


        this.reloadButton.setIconCls(this.showButtonIcon ? "mini-pager-reload" : "");
        this.reloadButton.setVisible(this.showReloadButton);

        var s = this.reloadButton.el.previousSibling;
        if (s) {
            s.style.display = this.showReloadButton ? "" : "none";
        }

        this.indexEl.style.display = this.showPageIndex ? "" : "none";
        this.sizeEl.style.display = this.showPageSize ? "" : "none";





    },
    __OnPageSelectChanged: function (e) {
        var size = parseInt(this.sizeCombo.getValue());
        this._OnPageChanged(0, size);
    },
    _OnPageChanged: function (index, size) {

        var e = {
            pageIndex: mini.isNumber(index) ? index : this.pageIndex,
            pageSize: mini.isNumber(size) ? size : this.pageSize,
            cancel: false,
            isreload: index===undefined && size === undefined
        };

        if (e.pageIndex < 0) e.pageIndex = 0;

        this.fire("beforepagechanged", e);
        if (e.cancel == true) {
            return;
        }

        this.fire("pagechanged", e);
        this.update(e.pageIndex, e.pageSize);

    },
    onPageChanged: function (fn, scope) {
        this.on("pagechanged", fn, scope);
    },
    getAttrs: function (el) {
        var attrs = mini.Pager.superclass.getAttrs.call(this, el);

        mini._ParseString(el, attrs,
            ["onpagechanged", "sizeList", "onbeforepagechanged"
            ]
        );
        mini._ParseBool(el, attrs,
            ["showPageIndex", "showPageSize",  "showReloadButton"
            ]
        );
        mini._ParseInt(el, attrs,
            ["pageIndex", "pageSize"
            ]
        );



        if (typeof attrs.sizeList == "string") {
            attrs.sizeList = eval(attrs.sizeList);
        }

        return attrs;
    }

});
mini.regClass(mini.PagerNoTotal, "pagernototal");

