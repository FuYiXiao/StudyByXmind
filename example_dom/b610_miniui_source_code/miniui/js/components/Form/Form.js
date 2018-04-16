mini.Form = function (el) {
	this.el = mini.byId(el);
	if (!this.el) throw new Error("form element not null");

	mini.Form.superclass.constructor.call(this);

}
mini.extend(mini.Form, mini.Component, {
	el: null,

	getFields: function () {
		if (!this.el)
			return [];
		var controls = mini.findControls( function (control) {
			if (!control.el || control.formField != true)
				return false;
			if (mini.isAncestor(this.el, control.el))
				return true;
			return false;
		}, this);
		return controls;
	},
	getFieldsMap: function () {
		var fields = this.getFields();
		var map = {};
		for (var i = 0, l = fields.length; i < l; i++) {
			var field = fields[i];
			if (field.name)
				map[field.name] = field;
		}
		return map;
	},
	getField: function (name) {
		if (!this.el)
			return null;
		return mini.getbyName(name, this.el);
	},
	getData: function (formatted, deep ,all) {
	    if (mini.isNull(deep)) deep = true;
	    var valueFn = formatted ? "getFormValue" : "getValue";
	    var controls = this.getFields();
	    var data = {};
        var names = {};  //新增属性  保存name为下面功能服务
	    for (var i = 0, l = controls.length; i < l; i++) {
	        var control = controls[i];
	        var fn = control[valueFn];
	        if (!fn) continue;
	        if (control.name) {
                names[control.name] = control.name;//将已经遍历到的name放进去
	            if (deep == true) {

	                mini._setMap(control.name, fn.call(control), data);
	            } else {
	                data[control.name] = fn.call(control);
	            }
	        }
	        if (control.textName && control.getText) {
	            if (deep == true) {
	                data[control.textName] = control.getText();
	            } else {
	                mini._setMap(control.textName, control.getText(), data);
	            }
	        }
	    }
        /* 将Html原生标签中的hidden加入进去 潘正锋 21014-06-19 */
        if (all) {
            var inputs = jQuery(this.el).find(":input:hidden");
            for (var a = 0; a < inputs.length; a++) {
                var name = mini.getAttr(inputs[a], "name");
                var value = inputs[a].value;
                //没有name或name前面出现过跳出
                if (!name || names[name]) continue;
                if (deep == true) {
                    if (!names[name])
                        mini._setMap(name, inputs[a].value, data);
                } else {
                    data[name] = value;
                }
            }
        }
	    return data;
	},
	setData: function (options, all,deep,firechangedevent) {
	    if (mini.isNull(deep)) deep = true;
	    if (typeof options != "object") options = {};
	    var map = this.getFieldsMap();
	    for (var name in map) {
	        var control = map[name];
	        if (!control) continue;
	        if (control.setValue) {
	            var v = options[name];
	            if (deep == true) {
	                v = mini._getMap(name, options);
	            }
	            //修改all===false为!all，解决all参数必须传的问题  赵美丹 2012-12-05
	            if (v === undefined && !all) continue;
	            if (v === null) v = "";
                /* add the parameter firechangedevent to declare whether the valuechanged event to be fire  */
	            control.setValue(v,firechangedevent);
	        }
	        if (control.setText && control.textName) {
	            var text = options[control.textName];
	            if (deep == true) {

	                text = mini._getMap(control.textName, options);
	            }
	            if (mini.isNull(text)) text = "";
	            control.setText(text);
	        }
	    }

	},
    getChanges: function(formatted, deep){
        var controls = this.getFields();
        var valueFn = formatted ? "getFormValue" : "getValue";
        var data = {};
        var names = {};  //新增属性  保存name为下面功能服务
        var ovalue,nvalue;

        for (var i = 0, l = controls.length; i < l; i++) {
            var control = controls[i];
            var fn = control[valueFn];
            var nfn = control['getValue'];
            var ofn = control['getDefaultValue'];
            if (!fn||!ofn||!nfn) continue;
            ovalue = ofn.call(control);
            nvalue = nfn.call(control);
            if(control.uiCls == "mini-datepicker"){
                if(!ovalue && !nvalue){
                        continue;
                }
                else if(ovalue && nvalue){
                    ovalue =  mini.parseDate(ovalue);
                    if(nvalue - ovalue == 0)
                       continue;
                }

            }else if(control.uiCls == "mini-timespinner"){
                if(!ovalue && !nvalue){
                    continue;
                }
                if(ovalue && nvalue) {
                    ovalue = mini.parseTime(ovalue,control.format);
                    if (mini.formatDate(nvalue, "H:mm:ss") == mini.formatDate(ovalue, "H:mm:ss")) {
                        continue;
                    }
                }
            }
            else{
                if(conver(ovalue)==conver(nvalue)) continue;
            }

            if (control.name) {
                names[control.name] = control.name;//将已经遍历到的name放进去
                if (deep == true) {

                    mini._setMap(control.name, fn.call(control), data);
                } else {
                    data[control.name] = fn.call(control);
                }
            }
            if (control.textName && control.getText) {
                if (deep == true) {
                    data[control.textName] = control.getText();
                } else {
                    mini._setMap(control.textName, control.getText(), data);
                }
            }
        }
        //conver "" to null   null and undefined is ==  but not ===
        function conver(value){
            if(value=="") return null;
            return value;
        }
        return data;
    },
	reset: function () {
	    var controls = this.getFields();
	    for (var i = 0, l = controls.length; i < l; i++) {
	        var control = controls[i];
	        //解决datagrid行编辑editor变化时reset报错问题（form中组件联动导致editor变化） 赵美丹 2013-05-16
	        if (control.destroyed || !control.setValue) continue;
	        if (control.setText && control._clearText !== false) {
	            control.setText("");
	        }
            /* when call the setValue("") method,the valid event will be trigger,cause the error icon show pzf 2014-04 */
			//还原回来，要触发valuechange事件 pzf 2005-06
	        control.setValue(control.defaultValue,true);
	    }
	    this.setIsValid(true);
	},
	clear: function () {
	    var controls = this.getFields();
	    for (var i = 0, l = controls.length; i < l; i++) {
	        var control = controls[i];
	        if (!control.setValue) continue;
	        if (control.setText && control._clearText !== false) {
	            control.setText("");
	        }
            /* when call the setValue("") method,the valid event will be trigger,cause the error icon show pzf 2014-04 */
			//还原回来，要触发valuechange事件 pzf 2005-06
	        control.setValue("",true);

	    }
	    this.setIsValid(true);
	},

	validate: function (all,hide) {
		var controls = this.getFields();

		for (var i = 0, l = controls.length; i < l; i++) {
			var control = controls[i];
			if (!control.validate)
				continue;
            /* 添加hide参数 pzf 2014-07*/
            if(hide === undefined) hide = false;
			if ((control.isDisplay && control.isDisplay()) || hide) {
				var succ = control.validate();
				if (succ == false && all === false) {
					break;
				}
			}
		}
		return this.isValid(hide);
	},
	setIsValid: function (isValid) {
		var controls = this.getFields();
		for (var i = 0, l = controls.length; i < l; i++) {
			var control = controls[i];
			//解决datagrid行编辑editor变化时reset报错问题（form中组件联动导致editor变化） 赵美丹 2013-05-16
			if (control.destroyed || !control.setIsValid)
				continue;
			control.setIsValid(isValid);
		}
	},
	isValid: function (hide) {
		var controls = this.getFields();
		for (var i = 0, l = controls.length; i < l; i++) {
			var control = controls[i];
			if (!control.isValid)
				continue;
            /* 添加hide参数 pzf 2014-07*/
            if(hide === undefined) hide = false;
			if ((control.isDisplay && control.isDisplay()) || hide)
                if(control.isValid() == false)
				   return false;
		}
		return true;
	},
	getErrorTexts: function () {
		var errorTexts = [];
		var errors = this.getErrors();
		for (var i = 0, l = errors.length; i < l; i++) {
			var control = errors[i];
			errorTexts.push(control.errorText);
		}
		return errorTexts;
	},
	getErrors: function () {
		var errors = [];
		var controls = this.getFields();
		for (var i = 0, l = controls.length; i < l; i++) {
			var control = controls[i];
			if (!control.isValid)
				continue;
			if (control.isValid() == false) {
				errors.push(control);
			}
		}
		return errors;
	},
	mask: function (options) {
		if (typeof options == "string")
			options = {
				html: options
			};
		options = options || {};
		options.el = this.el;
		if (!options.cls)
			options.cls = this._maskCls;
		mini.mask(options);
	},
	unmask: function () {
		mini.unmask(this.el);
	},
	_maskCls: "mini-mask-loading",
	loadingMsg: "数据加载中，请稍后...",
	loading: function (msg) {
		this.mask(msg || this.loadingMsg);
	},
	__OnValueChanged: function (e) {

		this._changed = true;
	},
	_changed: false,
	setChanged: function (value) {
		this._changed = value;

		var controls = this.getFields();
		for (var i = 0, l = controls.length; i < l; i++) {
			var control = controls[i];
			control.on("valuechanged", this.__OnValueChanged, this);
		}
	},
	isChanged: function () {
		return this._changed;
	},
	setEnabled: function (value) {
		var controls = this.getFields();
		for (var i = 0, l = controls.length; i < l; i++) {
			var control = controls[i];
			control.setEnabled(value);
		}
    },
    //新增此方法，支持form中回车后切换到下一个控件 pzf 2014-10
    setEnterKeyNext: function () {
        var controls = this.getFields();

        function bind(control) {
            function a(e) {
                var control = e.sender;
                var step = 1;
                var index = controls.indexOf(control);
                nextFocus(index);
                function nextFocus(index) {


                    var next = controls[index+1];
                    if (next) {
                        if (next.uiCls == "mini-textbox" || next.uiCls == "mini-textarea" || next.uiCls == "mini-password" || next.uiCls == "mini-treeselect" ||
                            (next.uiCls == "mini-combobox" && next.name != "pagesize") || next.uiCls == "mini-datepicker" || next.uiCls == "mini-monthpicker" ||
                            next.uiCls == "mini-yearpicker" || next.uiCls == "mini-timespinner" || next.uiCls == "mini-spinner" || next.uiCls == "mini-checkbox" ||
                            next.uiCls == "mini-radiobuttonlist" || next.uiCls == "mini-checkboxlist" || next.uiCls == "mini-autocomplete") {
                            //如果有popup，退出
                            if (next.isShowPopup && next.isShowPopup())
                                return;
                            next.focus();
                            //自动弹出,autocomplete除外
                            if (next.showPopup && next.uiCls != "mini-autocomplete") {
                                setTimeout(function () {
                                    next.showPopup();
                                }, 1);

                            }

                        } else {
                            index++;
                            nextFocus(index);
                        }

                    }
                }
            }


            control.on("enter", a);
        }

        for (var i = 0, l = controls.length; i < l; i++) {
            var control = controls[i];
            bind(control);
        }
    }
});