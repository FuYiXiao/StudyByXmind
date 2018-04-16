mini.MoneyBox = function () {
    mini.MoneyBox.superclass.constructor.call(this);
}
mini.extend(mini.MoneyBox, mini.TextBox,
    {
        digit: 2,
        minValue: NaN,
        maxValue: NaN,
        uiCls: "mini-moneybox",
        setText: function (value) {

            value = this._formatText(this.value);
            if (value === null || value === undefined) value = "";
            this.text = value;
            this._textEl.value = value;
        },
        setValue: function (value, firechangedevent) {
            if (value === null || value === undefined)
                value = "";
            value = String(value);
            if (value.length > this.maxLength) {
                value = value.substring(0, this.maxLength);
            }

            if (this.value !== value) {

                value = this._formatValue(value);
                this.value = value;
                this._valueEl.value = value;
                this.setText(value);
                this._doEmpty();
                if (firechangedevent === undefined)
                    firechangedevent = true;
                if (firechangedevent)
                    this._OnValueChanged();
            }
        },
        _formatText: function (value) {
            return mini.util.StringUtil.formatMoney(value, this.digit);
        },
        _formatValue: function (value) {
            if (undefined == value || value == "" || !value) {
                return "";
            }
            value = value.replace(/\,/g, "");
            var tpMoney = new Number(value);
            if (isNaN(tpMoney)) {
                return "";
            }
            tpMoney = new Number(this._ValueLimit(value));
            //ie8下面会不准确 pzf 2015-06
            //tpMoney = tpMoney.toFixed(this.digit);
            tpMoney = mini.util.MathUtil.toFixed(tpMoney,this.digit);
            return tpMoney;
        },
        _ValueLimit: function (value) {
            if (isNaN(this.minValue) && isNaN(this.maxValue))
                return value;
            if (this.minValue > this.maxValue) {
                return value;
            }
            if (!isNaN(this.minValue) && value < this.minValue) {
                value = this.minValue;
            }
            if (!isNaN(this.maxValue) && value > this.maxValue) {
                value = this.maxValue;
            }
            return value;
        },
        getAttrs: function (el) {
            var attrs = mini.MoneyBox.superclass.getAttrs.call(this, el);
            mini._ParseInt(el, attrs, ["digit", "minValue", "maxValue"]);
            return attrs;
        }
    }
)

mini.regClass(mini.MoneyBox, 'moneybox');