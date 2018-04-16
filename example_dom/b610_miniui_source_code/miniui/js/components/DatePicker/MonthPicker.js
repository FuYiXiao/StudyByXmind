mini.MonthPicker = function () {
    mini.MonthPicker.superclass.constructor.call(this);

}

mini.extend(mini.MonthPicker, mini.DatePicker, {
    uiCls: 'mini-monthpicker',
    valueFormat: "",
    format: "yyyy-MM",
    _monthPicker: true
});
mini.regClass(mini.MonthPicker, 'monthpicker');