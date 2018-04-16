mini.util = {};

/**
 *@class 字符串工具类，提供了一些方便的函数用于字符串操作
 *@constructor
 *@return StringUtil类
 */
mini.util.StringUtil = {}
mini.util.CookieUtil = {}
mini.util.HtmlUtil = {}
mini.util.MathUtil = {}
/**
 *去掉字符串的左边的空格
 *@param {string}s 传入要去掉空格的字符串
 */
mini.util.StringUtil.lTrim = function (s) {
    for (var i = 0; i < s.length; i++)
        if (s.charAt(i) != ' ')
            return s.substring(i, s.length);
    return "";
}

/**
 *去掉字符串的右边的空格
 *@param {string}s 传入要去掉右边空格的字符串
 */
mini.util.StringUtil.rTrim = function (s) {
    for (var i = s.length - 1; i >= 0; i--)
        if (s.charAt(i) != ' ')
            return s.substring(0, i + 1);
    return "";
}

mini.util.StringUtil.nvl = function (s, d) {
    if ((s == null) || (s == "")) {
        return d;
    } else {
        return s;
    }
}


/**
 *去掉字符串的首尾空格
 *@param {string}s 传入要去掉空格的字符串
 */
mini.util.StringUtil.trimSpace = function (s) {
    return mini.util.StringUtil.rTrim(mini.util.StringUtil.lTrim(s));
}

/**
 *用来消除字符串中所有空格。
 *@param s为字符串型
 */
mini.util.StringUtil.trimAllSpace = function (s) {
    return s.replace(/\s/g, "");
}


/**
 *去掉回车换行符
 */

mini.util.StringUtil.clearEnter = function (s) {
    var Char = '';
    var outString = "";
    var i = 0;
    for (i = 0; i < s.length; i++) {
        Char = s.charAt(i);
        if (!((Char == '\n') || (Char == '\r'))) {
            outString = outString + Char;
        }
    }
    return mini.util.StringUtil.trimSpace(outString);
}

/**
 *计算字符串的长度（包括全角字符）不去掉空格的
 *注意由于utf-8编码是变长的，所以难以判断是多少字符长。
 *本函数假设为中文GB2312编码，为2位
 *@param {string}s 传入要计算长度的字符串
 *@returns {int}长度值
 */
mini.util.StringUtil.getLength = function (s) {
    var i, sum;
    sum = 0;
    for (i = 0; i < s.length; i++) {
        if ((s.charCodeAt(i) >= 0) && (s.charCodeAt(i) <= 255))
            sum = sum + 1;
        else
            sum = sum + 2;
    }
    return sum;
}

/**
 *
 * @param value{string|number}
 * @param digit  {int}
 * @param prefix  {string}
 * @returns {string}
 */
mini.util.StringUtil.formatMoney = function (value, digit, prefix) {
    if (digit === undefined) digit = 2;
    if (!mini.util.MathUtil.isNumber(value)) {
        if (undefined == value || value == "") {
            return ""
        }
        value = new String(value);
        value = value.replace(/\,/g, "");
        value = new Number(value);
        if (isNaN(value)) {
            return "";
        }
    }
    value = mini.util.MathUtil.toFixed(value, digit);
    value = value + '';
    prefix = prefix || '';
    return prefix + format(value, digit);

    function format(value, digit) {
        //生成若干个0
        function zero(num) {
            var str = "";
            for (var i = 0; i < num; i++) {
                str += "0";
            }
            return str;
        }

        //补0操作

        var index = value.indexOf(".");
        if (index != -1) {
            var suffix = value.substring(index+1, value.length);
            value += zero(digit - suffix.length);
        } else {
            if(digit>0) {
                value += ".";
                value += zero(digit);
            }
        }


        //加分隔符“，”
        var re = /^(-?\d+)(\d{3})(\.?\d*)/;
        while (re.test(value)) {
            value = value.replace(re, "$1,$2$3");
        }
        return value;
    }
}
/**
 *四舍五入保留若干位小数，返回unmber
 * @param value数字s
 * @param digit保留几位小数
 * @returns {number} 如果value非法，返回null 在0.00或1.00的情况下，省略后面的0
 */
mini.util.MathUtil.toFixed = function (value, digit) {
    if (!mini.util.MathUtil.isNumber(value))
        return null;
    if (!mini.util.MathUtil.isNumber(digit))
        return value;
    //if(digit == 0)
    value = value * Math.pow(10, digit);
    value = Math.round(value);
    value = value / Math.pow(10, digit);
    return value;
}
/**
 * 四舍五入保留若干位小数，返回string,后面会补零
 * @param value value数字s
 * @param digit  digit保留几位小树b
 * @returns {string} 如果value非法，返回null 当value=0 digit=2时，return 0.00
 */
mini.util.MathUtil.toFixed2 = function (value, digit) {
    value = mini.util.MathUtil.toFixed(value, digit);
    function zero(num) {
        var str = "";
        for (var i = 0; i < num; i++) {
            str += "0";
        }
        return str;
    }

    //补0操作
    value += '';
    var index = value.indexOf(".");
    if (index != -1) {
        var suffix = value.substring(index+1, value.length);
        value += zero(digit - suffix.length);
    } else {
        if(digit>0) {
            value += ".";
            value += zero(digit);
        }
    }
    return value;
}

mini.util.MathUtil.isNumber = function(value){
    return Object.prototype.toString.call(value) == '[object Number]'
}
/**
 *取当前页面的请求URI字符串
 *例如:getURI("http://localhost:7001/systemAdmin/queryDljg.do?swjgdm=&dljgdm=")返回"/systemAdmin/queryDljg.do?swjgdm=&dljgdm="
 */
mini.util.HtmlUtil.getURI = function () {
    protocol = window.location.protocol;
    host = window.location.host;
    url = window.location.href;
    return url.replace(protocol + "//" + host, "");
}


mini.util.CookieUtil.getCookie = function (name) {
    return $.cookie(name);
}

mini.util.CookieUtil.setCookie = function (name, value, options) {
    $.cookie(name, value, option);
}

mini.util.disableBackspaceToPreviousPage = function(){
    $(document).unbind('keydown').bind('keydown', function (event) {
        var doPrevent = false;
        if (event.keyCode === 8) {
            var d = event.srcElement || event.target;
            if ((d.tagName.toUpperCase() === 'INPUT' &&
                (
                    d.type.toUpperCase() === 'TEXT' ||
                    d.type.toUpperCase() === 'PASSWORD' ||
                    d.type.toUpperCase() === 'FILE' ||
                    d.type.toUpperCase() === 'EMAIL' ||
                    d.type.toUpperCase() === 'SEARCH' ||
                    d.type.toUpperCase() === 'DATE' )
                ) ||
                d.tagName.toUpperCase() === 'TEXTAREA') {
                doPrevent = d.readOnly || d.disabled;
            }
            else {
                doPrevent = true;
            }
        }

        if (doPrevent) {
            event.preventDefault();
        }
    });
}
mini.util.getMap = function(name,obj){
    return mini._getMap(name,obj);
}
mini.util.setMap = function(name, value, obj){
    return mini._setMap(name, value, obj);
}