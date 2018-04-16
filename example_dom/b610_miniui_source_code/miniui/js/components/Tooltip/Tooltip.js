mini.ToolTip = function () {
    mini.ToolTip.superclass.constructor.call(this);


}
mini.extend(mini.ToolTip, mini.Control, {

    selector: '[title]',
    placement: 'bottom',
    trigger: 'hover focus',

    uiCls: "mini-tooltip",

    _create: function () {
        this.el = jQuery('<div class="mini-tooltip"><div class="mini-tooltip-arrow"></div><div class="mini-tooltip-inner"></div></div>')[0];
        this.$element = jQuery(this.el);
        this.$element.appendTo(document.body);
    },
    _initEvents: function () {

    },
    _bindTooltip: function () {
        this.el.style.padding = "";
        var jq = jQuery(document),
            selector = this.selector,
            type = 'tooltip';

        var triggers = this.trigger.split(' ');

        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i]

            if (trigger == 'click') {
                jq.delegate(selector,'click.' + type,  $.proxy(this._toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
                 /**将on改成delegate，这样就不用将jquery升级到1.7了*/
                jq.delegate(selector,eventIn + '.' + type,  $.proxy(this._enter, this))
                jq.delegate(selector,eventOut + '.' + type,  $.proxy(this._leave, this))
            }
        }
    },

    setSelector: function (value) {
        this.selector = value;
        this._bindTooltip();
    },
    getSelector: function () {
        return this.selector;
    },
    setPlacement: function (value) {
        this.placement = value;
    },
    getPlacement: function () {
        return this.placement;
    },

    _enter: function (e) {
        this.open(e.target);
    },
    _leave: function (e) {

        this.close();
    },
    _toggle: function (e) {
        if (this._getTip().css("display") == 'none') {
            this.enter(e);
        } else {
            this.leave(e);
        }
    },

    open: function (target) {
        var target = $(target)[0] || this.target,
            jq = $(target),
            content = this.getContent(target);

        var e = { element: target, content: content, cancel: !content };
        this.fire("beforeopen", e);
        if (e.cancel) return;

        this.$element.show();

        this._target = target;
        this.setContent(e.content);

        this.fire("open", { element: target });

    },
    close: function () {
        this._target = null;
        this.$element.hide();
    },
    showLoading: function () {
        this.setContent('<div class="mini-tooltip-loading"></div>');
    },
    setContent: function (value) {
        this.$element.children(".mini-tooltip-inner").html(value || '&nbsp;');
        this.applyPlacement();
    },
    getContent: function (element) {
        var content = element.title;
        if (content) {
            $(element).attr("data-tooltip", content).attr("title", "");
        }
        if (!content) {
            content = $(element).attr("data-tooltip");
        }
        return content;
    },
    applyPlacement: function () {
        if (!this._target) return;
        if (this.$element.css("display") == "none") return;
        var target = this._target,
            jq = jQuery(target),
            placement = jq.attr("data-placement") || this.placement,
            tip = this.$element;

        tip.show().css({ left: "-2000px", top: "-2000px" });

        function applyCls(placement) {

            tip.removeClass("mini-tooltip-left mini-tooltip-top mini-tooltip-right mini-tooltip-bottom mini-tooltip-bottomleft mini-tooltip-topleft mini-tooltip-bottomright mini-tooltip-topright")
                .addClass('mini-tooltip-' + placement);
        }
        function applyPos(pos) {
            tip.offset(pos);
        }


        var box = mini.getBox(target);
        var vbox = mini.getViewportBox();
        var topspace = box.top - vbox.top, bottomspace = vbox.bottom - box.bottom;

        applyCls(placement);

        var tipbox = mini.getBox(tip[0]);
        var pos = mini.getCalculatedOffset(placement, box, tipbox.width, tipbox.height);



        if (placement == "left") {
        } else if (placement == "right") {
        } else if (placement == "top") {
        } else if (placement == "bottom") {

        } else if (placement == "bottomleft" && topspace > bottomspace) {

            if (pos.top + tipbox.height > vbox.bottom) {
                placement = "topleft";
            }
        } else if (placement == "topleft") {

        }

        applyCls(placement);
        pos = mini.getCalculatedOffset(placement, box, tipbox.width, tipbox.height);


        applyPos(pos);
    },


    getAttrs: function (el) {
        var attrs = mini.ToolTip.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            ['selector', 'placement', "onbeforeopen", "onopen", "onclose"
            ]
        );

        return attrs;
    }
});
mini.regClass(mini.ToolTip, "tooltip");

