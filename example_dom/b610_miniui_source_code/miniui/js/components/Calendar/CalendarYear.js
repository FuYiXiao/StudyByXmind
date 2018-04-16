mini.CalendarYear = function () {
    this.viewDate = new Date();
    this._selectedDates = [];
    mini.CalendarYear.superclass.constructor.call(this);
}
mini.extend(mini.CalendarYear, mini.Control, {
    width: 220,

    _clearBorder: false,
    uiCls: "mini-calendaryear",
    _create: function () {
        this.el = document.createElement("div");
        this.startYear = parseInt(this.viewDate.getFullYear() / 10) * 10;
        this.selectYear = this.viewDate.getFullYear();

        s = '<div class="mini-calendaryear-years"></div>';
        this.el.innerHTML = s ;
        this.yearsEl = this.el.childNodes[0];

        this.updateYears();

    },
    _initEvents: function () {
        mini.on(this.el, "click", this.__OnClick, this);
    },

    updateYears: function () {
        var s = '';
        for (var i = this.startYear, l = this.startYear + 20; i < l; i++) {
            var text = i;
            var cls = "";
            if (this.selectYear == i) cls = "mini-calendaryear-year-selected";
            s += '<a id="' + i + '" class="mini-calendaryear-year ' + cls + '" href="javascript:void(0);" hideFocus onclick="return false">' + text + '</a>';
        }
        s += '<div class="mini-calendaryear-prevYear"></div><div class="mini-calendaryear-nextYear"></div><div style="clear:both;"></div>';
        this.yearsEl.innerHTML = s;

    },

    __OnClick: function (e) {

        var t = e.target;
        var yearEl = mini.findParent(t, "mini-calendaryear-year");
        if (yearEl) {
            this.selectYear = parseInt(yearEl.id);
            this.setValue(this.selectYear);
            this.updateYears();
            this._OnDateClick(this.selectYear);
        }
        else if (mini.findParent(t, "mini-calendaryear-prevYear")) {
            this.startYear = this.startYear - 20;
            this.updateYears();
        }
        else if (mini.findParent(t, "mini-calendaryear-nextYear")) {
            this.startYear = this.startYear + 20;
            this.updateYears();
        }

    },
    _OnDateClick: function (year, action) {
        var e = { year: year, action: action };
        this.fire("dateclick", e);

    },
    setValue: function (value) {
        this.value = value;
        this.selectYear = value;
        this.startYear = parseInt(this.selectYear / 10) * 10;
    },
    getValue: function () {
       return this.value;

    }


})


mini.regClass(mini.CalendarYear, "calendaryear");