
mini = mini || {};

/*
 * 根据给定验证规则验证元素值是否符合条件
 * @param vtype 验证类型名字符串
 * @param value 实际值
 * @param e 待验证元素
 * @param scope 验证规则集合对象 非必须
 * @function
 * @private
 */
mini._ValidateVType = function (vtype, value, e, scope) {
    var vtypes = vtype.split(";");
    for (var i = 0, l = vtypes.length; i < l; i++) {
        var vtype = vtypes[i].trim();
        // 类似这样的验证规则rangeLength:2,6
        var vv = vtype.split(":");
        var vt = vv[0];
        var args = vv[1];
        if (args) args = args.split(",");
        else args = [];

        //根据验证方法名取得验证方法。
        var fn = mini.VTypes[vt];
        if (fn) {
            var isValid = fn(value, args);
            if (isValid !== true) {
                e.isValid = false;
                var vtext = vv[0] + "ErrorText";
                e.errorText = scope[vtext] || mini.VTypes[vtext] || "";
                e.errorText = String.format(e.errorText, args[0], args[1], args[2], args[3], args[4]);
                break;
            }
        }
    }
}

/*
 * 根据给定参数获取验证错误提示信息。
 * @param obj DOM对象
 * @param field 验证类型名
 * @private
 */
mini._getErrorText = function (obj, field) {
    if (obj && obj[field]) {
        return obj[field];
    } else {
        return mini.VTypes[field]
    }

}

/*
 * @namespace mini.VTypes 验证方法和提示信息。
 */
mini.VTypes = {
    uniqueErrorText: "不能重复.",
    requiredErrorText: "不能为空.",
    emailErrorText: "请输入邮件格式.",
    urlErrorText: "请输入URL格式.",
    floatErrorText: "请输入数字.",
    intErrorText: "请输入整数.",
    dateErrorText: "请输入日期格式 {0}.",
    maxLengthErrorText: "不能超过 {0} 个字符.",
    minLengthErrorText: "不能少于 {0} 个字符.",
    maxErrorText: "数字不能大于 {0}.",
    minErrorText: "数字不能小于 {0}.",
    rangeLengthErrorText: "字符长度必须在 {0} 到 {1} 之间.",
    rangeCharErrorText: "字符数必须在 {0} 到 {1} 之间.",
    rangeErrorText: "数字必须在 {0} 到 {1} 之间.",
    rangeDecimalsErrorText:"请保留小数点后 {0} 位小数.",
    moneyErrorText: "金额格式应为9,999,999.00.",
    /*
	 * 不能为空
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    required: function (v, args) {
        if (mini.isNull(v) || v === "") return false;
        return true;
    },
    /*
	 * 正确的Email格式字符串
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    email: function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        if (v.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
            return true;
        else
            return false;
    },
    /*
	 * 正确的URL格式字符串
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    url: function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        function IsURL(str_url) {
            str_url = str_url.toLowerCase();

            var strRegex = "^((https|http|ftp|rtsp|mms)?:\/\/)"
                        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
                        + "(([0-9]{1,3}\.){3}[0-9]{1,3}"
                        + "|"
                        + "([0-9a-z_!~*'()-]+\.)*"
                        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\."
                        + "[a-z]{2,6})"
                        + "(:[0-9]{1,4})?"
                        + "((/?)|"
                        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
            var re = new RegExp(strRegex);

            if (re.test(str_url)) {
                return (true);
            } else {
                return (false);
            }
        }
        return IsURL(v);
    },
    /*
	 * 整数值
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    "int": function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        function isInteger(s) {
            if (s < 0) {
                s = -s;
            }
            var n = String(s);
            return n.length > 0 && !(/[^0-9]/).test(n);
        }
        return isInteger(v);

    },
    /*
	 * 浮点数值
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    "float": function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        function isFloat(s) {
            if (s < 0) {
                s = -s;
            }
            var n = String(s);
            //原先得判断太简单了 完全不符合要求 潘正锋 2013-06
            var patrn=/^([-]?)([1-9]\d*(\.\d+){0,1})$|^0(\.\d+){0,1}$/;
            return n.length > 0 && patrn.test(n);
        }
        return isFloat(v);

    },
    /*
	 * 正确的日期格式
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    "date": function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        if (!v) return false;
        var d = null;
        var format = args[0];

        if (format) {
            d = mini.parseDate(v, format);
            if (d && d.getFullYear) {
                if (mini.formatDate(d, format) == v) return true;
            }
        } else {
            d = mini.parseDate(v, "yyyy-MM-dd");
            if (!d) d = mini.parseDate(v, "yyyy/MM/dd");
            if (!d) d = mini.parseDate(v, "MM/dd/yyyy");
            if (d && d.getFullYear) return true;
        }

        return false;
    },
    /*
	 * 值的最大长度验证
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    maxLength: function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        var n = parseInt(args);
        if (!v || isNaN(n)) return true;
        if (v.length <= n) return true;
        else return false;
    },
    /*
	 * 值的最小长度验证
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    minLength: function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        var n = parseInt(args);
        if (isNaN(n)) return true;
        if (v.length >= n) return true;
        else return false;
    },
    /*
	 * 在某个区间长度的验证
	 * @param v 待验证值
	 * @param args 其他参数
	 * @returns {Boolean}
	 */
    rangeLength: function (v, args) {
        if (mini.isNull(v) || v === "") return true;
        if (!v) return false;
        var min = parseFloat(args[0]), max = parseFloat(args[1]);
        if (isNaN(min) || isNaN(max)) return true;
        if (min <= v.length && v.length <= max) return true;
        return false;
    },
    /*
    * 在某个区间的字符数个数验证
    * @param v 待验证值
    * @param args 其他参数
    * @returns {Boolean}
    */
    rangeChar: function (v, args) {
        if (mini.isNull(v) || v === "") return true;

        var min = parseFloat(args[0]), max = parseFloat(args[1]);
        if (isNaN(min) || isNaN(max)) return true;
       //将中文标点符号也纳入到校验范围中 潘正锋 2013-10-12
        function isChinese(v) {
            var reg = /[^\x00-\xff]/ig;
            if (v.match(reg) != null) return true;
            return false;
        }

        var len = 0;
        var ss = String(v).split("");
        for (var i = 0, l = ss.length; i < l; i++) {
            if (isChinese(ss[i])) {
                len += 2;
            } else {
                len += 1;
            }
        }

        if (min <= len && len <= max) return true;
        return false;
    },
    /*
    * 在某个区间的数字范围验证
    * @param v 待验证值
    * @param args 其他参数
    * @returns {Boolean}
    */
    range: function (v, args) {
        if (mini.VTypes["float"](v, args) == false) return false;

        if (mini.isNull(v) || v === "") return true;
        v = parseFloat(v);
        if (isNaN(v)) return false;
        var min = parseFloat(args[0]), max = parseFloat(args[1]);
        if (isNaN(min) || isNaN(max)) return true;
        if (min <= v && v <= max) return true;
        return false;
    },

    rangeDecimals:function(v,args){
        if (mini.isNull(v) || v === "") return true;
        if(v.indexOf(".")==-1) return true;
        var n = parseInt(args);
        if (isNaN(n)) return true;
        var reg = new RegExp("^-?0\\.\\d{1,"+n+"}$|^-?[1-9]\\d*\\.\\d{1,"+n+"}$");
        if (v.match(reg) != null) return true;
        return false;
    },
    money:function(v,args){
        if (mini.isNull(v) || v === "") return true;
        var reg;
        //遇到中文和字母就有问题，首先先判断内容 pzf 2014
        reg = /^[\d|\,\.]*$/;
        if (!reg.test(v)) return false;
        var n = parseInt(args);
        //没有保留几位小数点的要求
        if (isNaN(n))
            reg = "^-?([1-9]{1,3})(,\\d{3})*(\\.\\d+)?$|^-?(0\\.\\d+)$";
        else
            reg = "^-?([1-9]{1,3})(,\\d{3})*(\\.\\d{"+n+"})$|^-?(0\\.\\d{"+n+"})$";
        reg = new RegExp(reg);
        if (v.match(reg) != null) return true;
        return false;
    }
};

mini.summaryTypes = {
    "count": function (data) {
        if (!data) data = [];
        return data.length;
    },
    "max": function (data, field) {
        if (!data) data = [];
        var max = null;
        for (var i = 0, l = data.length; i < l; i++) {
            var o = data[i];
            var value = parseFloat(o[field]);
            if (value === null || value === undefined || isNaN(value)) continue;
            if (max == null || max < value) {
                max = value;
            }
        }
        return max;
    },
    "min": function (data, field) {
        if (!data) data = [];
        var min = null;
        for (var i = 0, l = data.length; i < l; i++) {
            var o = data[i];
            var value = parseFloat(o[field]);
            if (value === null || value === undefined || isNaN(value)) continue;
            if (min == null || min > value) {
                min = value;
            }
        }
        return min;
    },
    "avg": function (data, field) {
        if (!data) data = [];
        if (data.length == 0) return 0;
        var total = 0;
        for (var i = 0, l = data.length; i < l; i++) {
            var o = data[i];
            var value = parseFloat(o[field]);
            if (value === null || value === undefined || isNaN(value)) continue;
            total += value;
        }
        var v = total / data.length;
        return v;
    },
    "sum": function (data, field) {
        if (!data) data = [];
        var total = 0;
        for (var i = 0, l = data.length; i < l; i++) {
            var o = data[i];
            var value = parseFloat(o[field]);
            if (value === null || value === undefined || isNaN(value)) continue;
            total += value;
        }
        return total;
    }
};


mini.formatCurrency = function (num, prefix) {
    if (num === null || num === undefined) num == 0;
    num = String(num).replace(/\$|\,/g, '');
    if (isNaN(num)) {
        num = "0";
    }
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }
    prefix = prefix || '';
    return prefix + (((sign) ? '' : '-') + num + '.' + cents);
}

//扩展数据类型--百分比 赵美丹 2013-04-07
mini.formatPercent = function (num, showPercent, decimalPlaces) {
    if (num === null || num === undefined) null == "";
    num = Number(num);
    if (isNaN(num)) {
        num = "0";
    }
    var suffix = '%';
    if (showPercent === false) {
        suffix = '';
    }
    return parseFloat((num * 100).toFixed(decimalPlaces)) + suffix;
}