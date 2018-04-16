mini.YearPicker = function () {
    mini.YearPicker.superclass.constructor.call(this);
    mini.addClass(this.el, "mini-datepicker");
    this.on("validation", this.__OnValidation, this);
}
mini.extend(mini.YearPicker, mini.PopupEdit, {
    uiCls: 'mini-yearpicker',
    popupWidth: "",
    _getCalendar: function () {
        if (!mini.YearPicker._Calendar) {
            var calendar = mini.YearPicker._Calendar = new mini.CalendarYear();

            calendar.setStyle("border:0;");
        }
        return mini.YearPicker._Calendar;
    },

    _createPopup: function () {
        mini.YearPicker.superclass._createPopup.call(this);

        this._calendar = this._getCalendar();
    },
    showPopup: function () {
        this._calendar = this._getCalendar();
        this._calendar.beginUpdate();
        this._calendar._allowLayout = false;
        if (this._calendar.el.parentNode != this.popup._contentEl) {
            this._calendar.render(this.popup._contentEl);
        }



        /**增加返回值判断 解决父类return后子类任然 潘正锋 2013-07-08*/
        if (mini.YearPicker.superclass.showPopup.call(this) === false)
            return;

        function doUpdate() {
            if (!this._checkYear(this.value)) {
                this._calendar.setValue(mini.formatDate(new Date(),"yyyy"));
                this._calendar.updateYears();
            }
            else {
                this._calendar.setValue(this.value);
                this._calendar.updateYears();
            }

            if (this._calendar._target) {
                var obj = this._calendar._target;

                this._calendar.un("dateclick", obj.__OnDateClick, obj);

            }

            this._calendar.on("dateclick", this.__OnDateClick, this);


            this._calendar.endUpdate();

            this._calendar._allowLayout = true;

            this._calendar.focus();

            this._calendar._target = this;
        }

        var me = this;

        doUpdate.call(me);


    },
    hidePopup: function () {

        mini.YearPicker.superclass.hidePopup.call(this);
        this._calendar.un("dateclick", this.__OnDateClick, this);

    },
    setValue: function (value) {
        if (this.value != value) {
            this.value = value;
            this.text = this._textEl.value = this._valueEl.value = this.value;
            this._calendar.setValue(this.value);
            this._calendar.updateYears();
            this._OnValueChanged();

        }

    },
    __OnDateClick: function (e) {

        if (this.showOkButton && e.action != "ok") return;

        var date = this._calendar.getValue();


        this.setValue(date);


        this.hidePopup();

        this.focus();
    },
    __OnValidation: function (e) {

        if (e.isValid == false) return;
        if (this.value == "") return;
        if (!this._checkYear(this.value)) {
            e.isValid = false;
            e.errorText = "格式错误";
        }

    },
    _checkYear:function(year){
        var re = /^[1-9]\d{3}$/;
        return re.test(year);
    }


});
mini.regClass(mini.YearPicker, 'yearpicker');
