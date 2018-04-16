/**
 * 文件中定义了 TreeSelect 组件。
 * @fileOverview TreeSelect.js
 * @author 殷文旭
 */

/**
 * @class TreeSelect 是mini UI中的下拉属组件
 * @constructor
 * @extends mini.PopupEdit
 * @requires mini.PopupEdit
 * @requires mini.Tree
 * @requires mini.ToolBar
 * @requires mini.Button
 * @requires mini.TextBox
 * @version 1.0
 */
mini.TreeSelect = function () {
	this.data = [];
	mini.TreeSelect.superclass.constructor.call(this);
}
mini.extend(mini.TreeSelect, mini.PopupEdit,{
    _ajaxOption: {
        async: true,
        type: "get"
    },
    valueFromSelect: false,
	/**
	 * 下拉框内显示的文本
	 * @type String
	 * @default ''
	 */
	text: '',

	/**
	 * 选中的值
	 * @type String
	 * @default ''
	 */
	value: '',
	/**
	 * 是否自动选择父节点。比如选中子节点，将父节点也自动选中。
	 * @type Boolean
	 * @default false
	 */
	autoCheckParent: false,
	//parentNode and childNode  opposite pzf 2015-02
	checkOpposite:false,
	/**
	 * 加载后是否展开。比如：true展开所有节点；0展开第一级节点。以此类推。false表示不展开
	 * @type Boolean
	 * @default false
	 */
	expandOnLoad: false,
	/**
	 * 值对应json格式数据中的属性名
	 * @type String
	 * @default id
	 */
	valueField: "id",
	/**
	 * 显示文本对应 json格式数据中的属性名
	 * @type String
	 * @default text
	 */
	textField: "text",
	/**
	 * 组织父子关系中指向子的属性在 json格式数据中的属性名
	 * @type String
	 * @default children
	 */
	nodesField: "children",
	/**
	 * 选中值之间的分隔符
	 * @type String
	 * @default ','
	 */
	delimiter: ',',

	showClose:true,

	/**
	 * 是否支持多选开关
	 * @type Boolean
	 * @default true
	 */
	multiSelect: false,

	/**
	 * 列表组件的数据集
	 * @type Array
	 * @default []
	 */
	data: [],
	/**
	 * 数据的远程加载地址
	 * @type String
	 * @default ""
	 */
	url: "",

	/**
	 * 是否可录入标志
	 * @type Boolean
	 * @default false
	 */
	allowInput: false,

	/**
	 * 是否显示树节点前的图标
	 * @type Boolean
	 * @default false
	 */
	showTreeIcon: false,

	/**
	 * 是否显示树节点之间的引线
	 * @type Boolean
	 * @default true
	 */
	showTreeLines: true,

	/**
	 * url加载的数据是否列表是
	 * @type Boolean
	 * @default false
	 */
	resultAsTree: false,

	/**
	 * 组织父子关系中指向父的属性在 json格式数据中的属性名
	 * @type String
	 * @default 'pid'
	 */
	parentField: "pid",
	/**
	 * 是否联动选择父子节点。比如选中父节点，自动全选子节点。
	 * @type Boolean
	 * @default false
	 */
	checkRecursive: false,

	/**
	 * 当showCheckBox为true时，是否显示父节点CheckBox
	 * @type Boolean
	 * @default false
	 */
	showFolderCheckBox: true,

	/**
	 * 默认弹出层的高度
	 * @type Number
	 * @default 200
	 */
	popupHeight: 200,
	/**
	 * 默认弹出层的宽度
	 * @type Number
	 * @default 200
	 */
	popupWidth: 200,
	/**
	 * 默认弹出层的最大高度
	 * @type Number
	 * @default 250
	 */
	popupMaxHeight: 250,

	/**
	 * 默认弹出层的最大宽度
	 * @type Number
	 * @default 100
	 */
	popupMinWidth: 100,
	//add by xdj 2015-07
	queryValue:null,

	/**
	 * 批量设置属性方法，可以用于设置事件，设置属性。不建议开发人员使用。
	 * @param kv {Object} 参数对象
	 * @return {Object} 组件实例本身
	 */
	set: function (kv) {
		if (typeof kv == 'string') {
			return this;
		}

		var value = kv.value;
		delete kv.value;
		var text = kv.text;
		delete kv.text;
		var url = kv.url;
		delete kv.url;
		var data = kv.data;
		delete kv.data;
        //为了兼容数据分析部，通过on绑定的事件不触发onchange事件 pzf 2014-12
        if(!kv.onvaluechanged)
            this.defaultValueTriggerChange = false;
		mini.TreeSelect.superclass.set.call(this, kv);

		if (!mini.isNull(data)) {
			this.setData(data);
		}
		if (!mini.isNull(url)) {
			this.setUrl(url);
		}
		if (!mini.isNull(value)) {
			this.setValue(value,this.defaultValueTriggerChange);
		}
		if (!mini.isNull(text)) {
			this.setText(text);
		}

		return this;
	},
	/**
	 * 组将样式类
	 * @type String
	 * @default "mini-treeselect"
	 */
	uiCls: "mini-treeselect",
    destroy: function (removeEl) {
    	//内存泄露问题优化 赵美丹 2013-04-17
        if(this.tree){
            mini.clearEvent(this.tree);
            this.tree.destroy(removeEl);
            this.tree = null;
        }
        this._destroyQueryToolBar();
        delete this.data;
        mini.TreeSelect.superclass.destroy.call(this, removeEl);
    },
	/**
	 * 创建弹出层,方法由父类构造函数调用。
	 */
    uiCls: "mini-treeselect",
    _createPopup: function () {
        mini.TreeSelect.superclass._createPopup.call(this);
        //增加QueryToolBar 文旭
        this._createQueryToolBar();

        this.tree = new mini.Tree();
        //增加tree的delimiter配置，使得treeselect使用自己的delimiter来定义分隔符 赵美丹 2012-12-25
        this.tree.set({
            delimiter: this.delimiter
        });
        this.tree.setShowTreeIcon(true);
        this.tree.setStyle("border:0;width:100%;height:100%;");
        //解决showQueryToolBar为true时滚动条显示位置为popup的问题 赵美丹 2012-12-13
        if (this.showQueryToolBar) {
           this.popup.setStyle("overflow:hidden;");
        }
		//下面的这些属性设置了没用，因为这些属性在这个时候根本还没读到，所以在各属性的set方法中还是要设置一次的
        this.tree.setResultAsTree(this.resultAsTree);
        this.tree.render(this.popup._contentEl);
        this.tree.setCheckRecursive(this.checkRecursive);
        this.tree.setShowFolderCheckBox(this.showFolderCheckBox);
		//add by pzf 2015-02
		this.tree.setCheckOpposite(this.checkOpposite);
        this.tree.on("nodeclick", this.__OnNodeClick, this);
        this.tree.on("nodecheck", this.__OnCheckedChanged, this);
        this.tree.on("expand", this.__OnTreeExpand, this);
        this.tree.on("collapse", this.__OnTreeCollapse, this);
        this.tree.on("beforenodecheck", this.__OnTreeBeforeNodeCheck, this);
        this.tree.on("beforenodeselect", this.__OnTreeBeforeNodeSelect, this);
        this.tree.allowAnim = false;

        var me = this;
        this.tree.on("beforeload", function (e) {
            me.fire("beforeload", e);
        }, this);
        // ajax修改为异步后的特殊处理 pzf 2014-08
        this.tree.on("load",this.__OnTreeLoad,this);
        this.tree.on("loaderror", function (e) {
            me.fire("loaderror", e);
        }, this);
        this.tree.on("drawnode", function(e){
            me.fire("drawnode", e);
        },this);
    },
    __OnTreeLoad: function (e) {
        if (this.isAsync() && this._value)
            this.setValue(this._value, this.defaultValueTriggerChange);
        delete this._value;
        this.fire("load", e);
    },
	__OnTreeBeforeNodeCheck: function (e) {
		e.tree = e.sender;
		this.fire("beforenodecheck", e);
	},
	__OnTreeBeforeNodeSelect: function (e) {
		e.tree = e.sender;
		this.fire("beforenodeselect", e);
	},
	__OnTreeExpand: function (e) {

	},
	__OnTreeCollapse: function (e) {

	},
    //此方法是为了实现form的enter键切换输入而增加的 pzf 2014-10
    __OnPopupKeyDown: function (e) {
		if (e.keyCode == 27 || e.keyCode == 13) {
			//当光标在查询框中时，enter键后会错误地关闭 pzf 2015-01
			if(!jQuery(e.target).hasClass("mini-textbox-input") ) {
				this.hidePopup();
				this.focus();
			}
		}
	},
	/**
	 * 获取被选中的树节点，适合单选情况
	 * @return {Object}
	 */
	getSelectedNode: function () {
	    return this.tree.getSelectedNode();
	},
	getCheckedNodes: function (hasParent) {
	    return this.tree.getCheckedNodes(hasParent)
	},

	/**
	 * 获取选中的所有节点，适合多选情况
	 * @return {Array}
	 */
	getSelectedNodes: function () {
		return this.tree.getSelectedNodes()
	},
	getParentNode: function (node) {
	    return this.tree.getParentNode(node);
	},
	getChildNodes: function (node) {
	    return this.tree.getChildNodes(node);
	},

	/**
	 * 显示弹出层
	 */
	showPopup: function () {
        /**删除下面几行父类中也有的代码 潘正锋 2013-07-05*/
        /**增加返回值判断 解决父类return后子类任然 潘正锋 2013-07-08*/
		if(mini.TreeSelect.superclass.showPopup.call(this)===false)
            return ;
        //调整代码位置，解决popup显示高度自适应后tree的滚动条不正常的问题 赵美丹 2013-04-23
        if(this.showQueryToolBar) {
            this.tree.setHeight(this.popup.getHeight() - 35);
        }
		//设置被选中节点
		this.tree.setValue(this.value);
		//弹出，如果有query组件的，需要清空查询条件才行 pzf 2015-01
		if(this.queryInput){
			this.queryInput.setValue("");
		}
	},
	//弹出层隐藏时默认事件响应函数
	__OnPopupHide: function (e) {

	    this.__doFocusCls();
        /* in destroy() method the last line will throw error pzf 2014-06 */
        if(this.tree)
		   this.tree.clearFilter();
		this.fire("hidepopup");
	},
	/**
	 * 获取指定下标的树节点数据
	 * @param item {Number|Object}
	 */
	getItem: function (item) {
		return typeof item == "object" ? item : this.data[item];
	},
	/**
	 * 获取指定树节点数据的下标
	 * @param item {Object}
	 */
	indexOf: function (item) {
		return this.data.indexOf(item);
	},
	/**
	 * 获取指定下标的树节点数据，与getItem类似。
	 * @param item {Number}
	 */
	getAt: function (index) {
		return this.data[index];
	},
	loadList: function (list, idField, parentField) {
	    this.tree.loadList(list, idField, parentField);
	    this.data = this.tree.getData();
	},
	getList: function () {
	    return this.tree.getList();
	},

	/**
	 * 为下拉树更新数据
	 * @param data {Array|String} 数据，或者是Url地址
	 */
	load: function (data) {
        //当直接调用load方法后，没有触发__OnTreeLoad中的setValue方法
        if (this.isAsync() && this._value == undefined)
            this._value = this.value;
		this.tree.load(data);
	},
	/**
	 * 为下树更新数据
	 * @param data {Array} 数据
	 */
	setData: function (data) {
        if (typeof data == "string") {
            data = this._eval(data);
        }
        if (!mini.isArray(data)) data = [];
		//解决多个数据相同选择框同时存在时，下拉树的选中状态互相影响的问题 赵美丹 2013-3-2
        data = mini.clone(data);
		this.tree.setData(data);
		this.data = this.tree.getData();
	},
    _eval: function (_) {
        return eval('(' + _ + ')');
    },
	/**
	 * 获取下拉树的数据
	 * @return {Array}
	 */
	getData: function () {
		return this.data;
	},
	/**
	 * 设置加载数据的url地址
	 * @param url {String}
	 */
	setUrl: function (url) {
		//首先如果没有创建弹出层，则先创建之。
		this.getPopup();
		this.tree.setUrl(this.parseUrl(url));
		this.url = this.tree.url;
        //当直接调用setURL方法后，没有触发__OnTreeLoad中的setValue方法
        if (this.isAsync() && this._value == undefined)
            this._value = this.value;

	},
	/**
	 * 获取加载数据的url地址
	 * @return {String}
	 */
	getUrl: function () {
		return this.url;
	},
	/**
	 * 设置 textField 属性的值
	 * @param value {String}
	 */
	setTextField: function (value) {
		if (this.tree)
			this.tree.setTextField(value);
		this.textField = value;
	},
	/**
	 * 获取  textField 属性的值
	 * @return {String}
	 */
	getTextField: function () {
		return this.textField;
	},
	/**
	 * 设置 nodesField 属性的值
	 * @param value {String}
	 */
	setNodesField: function (value) {
		if (this.tree)
			this.tree.setNodesField(value);
		this.nodesField = value;
	},
	/**
	 * 获取  nodesField 属性的值
	 * @return {String}
	 */
	getNodesField: function () {
		return this.nodesField;
	},
	/**
	 * 设置 value 属性值
	 * @param value {String}
	 */
    isAsync:function(){
        return this._ajaxOption.async == true;
    },
	setValue: function (value,valid) {
        // 修改为异步后的补充操作 pzf 2014-08
        if(this.isAsync())
           this._value = value;
        var v = this.getValue();
        var vts = this.tree.getValueAndText(value);
        if (vts[1] == "" && !this.valueFromSelect) {
            vts[0] = value;
            vts[1] = value;
        }

		//value值设置由value修改为vts[0]，解决当value在树节点中不存在时，value应该被清除，不应该保留 赵美丹 2013-01-08	
		this.value = vts[0];

		this._valueEl.value = vts[0];

		this.text = this._textEl.value = vts[1];

		this._doEmpty();
		this.tree.setValue(this.value);

        //valuechanged事件改到setValue中触发，解决setValue不触发valuechanged事件的问题 赵美丹 2012-12-05
        if (!mini.isEquals(this.value, v)) {
            /* when call the setValue("") method,the valid event will be trigger,cause the error icon show pzf 2014-04 */
            if(valid === undefined)
                valid = true;
            if(valid)
            this._OnValueChanged();
        }
	},
	/**
	 * 设置 multiSelect 属性的值
	 * @param value {Boolean}
	 */
	setMultiSelect: function (value) {
		if (this.multiSelect != value) {
			this.multiSelect = value;
			this.tree.setShowCheckBox(value);
			this.tree.setAllowSelect(!value);
			this.tree.setEnableHotTrack(!value);
		}
	},
	/**
	 * 获取 multiSelect 属性的值
	 * @return {Boolean}
	 */
	getMultiSelect: function () {
		return this.multiSelect;
	},
    __OnInputTextChanged: function () {

        var v = this._textEl.value;
        var value = this.getValue();
        /* the setValue method is already invoke in __OnNodeClick,这里只需要设置非选择的数据(allowinput = true)pzf 2014-07*/
        var node = this.tree.getSelectedNode();
        if(!node)
           this.setValue(v);

    },
	//默认的树节点点击响应函数，负责赋值。
    __OnNodeClick: function (e) {
        if (this.multiSelect)
            return;
        var node = this.tree.getSelectedNode();
        var v = this.tree.getItemValue(node);

        var value = this.getValue();
		//在单选的情况下，如果在beforenodeselect事件中，cancel=true后，不应该调用hidePopup方法,判断的依据是“selected的值知否改变” pzf 2015-04
		if (!node || v == this.getValue()) {
			return;
		}
        this.setValue(v);
        //valuechanged事件改到setValue中触发，解决setValue不触发valuechanged事件的问题 赵美丹 2012-12-05
		/*if (value != this.getValue()) {
		 this._OnValueChanged();
		 }*/

        this.hidePopup();
        //解决选择后焦点不释放的问题 潘正锋 2013-05-05
        this.focus();

        this.fire("nodeclick", { node: e.node });

    },
	__OnCheckedChanged: function (e) {

		if (!this.multiSelect)
			return;
		var v = this.tree.getValue();

		var value = this.getValue();
		this.setValue(v);
        //valuechanged事件改到setValue中触发，解决setValue不触发valuechanged事件的问题 赵美丹 2012-12-05
		/*if (value != this.getValue()) {
			this._OnValueChanged();
		}*/
        this.fire("nodecheck", e);
	    //解决选择后焦点不释放的问题 潘正锋 2013-05-05
		//this.focus();


	},
	__OnInputKeyDown: function (e) {

		this.fire("keydown", {
			htmlEvent: e
		});
		if (e.keyCode == 8 && (this.isReadOnly() || this.allowInput == false)) {
			return false;
		}

		if (e.keyCode == 9) {
			this.hidePopup();
			return;
		}
		if (this.isReadOnly()) return;

		switch (e.keyCode) {
			case 27:
				if (this.isShowPopup()) {
					e.stopPropagation();
				}

				this.hidePopup();
				break;
			case 13:
			    var me = this;
                //此方法是为了实现form的enter键切换输入而增加的 pzf 2014-10
                this.hidePopup();
			    setTimeout(function () {
			        me.fire("enter", e);
			    }, 10);
				break;
			case 37:
				break;
			case 38:
				e.preventDefault();
				break;
			case 39:
				break;
			case 40:
				e.preventDefault();
				this.showPopup();
				break;
			default:
                //解决不允许输入时键盘输入触发查询的问题 赵美丹 2012-12-27
                if(this.isReadOnly() || this.allowInput == false){
                    break;
                }
                /*解决内容变了，但是value还是前一次的选中项的value pzf 2014-07*/
                if( this.allowInput){
                    this.tree._selectedNode = null;
                    this.value = ""; //必须在执行它，不然_doQuery--selectNode又会使_selectedNode有值的
                }
				var me = this;
				setTimeout( function () {
					me._doQuery();
				}, 10);
				break;
		}
	},
	/**
	 * 过滤功能实现
	 */
	_doQuery: function () {
		var field = this.textField;
		var value = this._textEl.value.toLowerCase();
		this.tree.filter( function (node) {
			var text = String(node[field] ? node[field] : "").toLowerCase();
			if (text.indexOf(value) != -1) {
				return true;
			} else
				return false;
		});
		this.tree.expandAll();
		this.showPopup();//注意，这里面有setValue方法
	},
	/**
	 *  设置 checkRecursive 属性的值
	 * @param value {Boolean}
	 */
	setCheckRecursive: function (value) {
		this.checkRecursive = value;
		if (this.tree)
			this.tree.setCheckRecursive(value);
	},
	/**
	 * 获取 checkRecursive 属性的值
	 * @return {Boolean}
	 */
	getCheckRecursive: function () {
		return this.checkRecursive;
	},
	/**
	 * 设置 resultAsTree 属性的值
	 * @param value {Boolean}
	 */
	setResultAsTree: function (value) {
		this.resultAsTree = value;
		if (this.tree)
			this.tree.setResultAsTree(value);
	},
	/**
	 * 获取 resultAsTree 属性的值
	 * @return {Boolean}
	 */
	getResultAsTree: function () {
		return this.resultAsTree;
	},
	/**
	 * 设置 parentField 属性的值
	 * @param value {String}
	 */
	setParentField: function (value) {
		this.parentField = value;
		if (this.tree)
			this.tree.setParentField(value);
	},
	/**
	 * 获取 parentField 属性的值
	 * @return {String}
	 */
	getParentField: function () {
		return this.parentField;
	},
	/**
	 * 设置 valueField 属性的值
	 * @param valueField {String}
	 */
	setValueField: function (valueField) {
		if (this.tree)
			this.tree.setIdField(valueField);
		this.valueField = valueField;
	},
	/**
	 * 获取 valueField 属性的值
	 * @return {String}
	 */
	getValueField: function () {
		return this.valueField;
	},
	/**
	 * 设置 showTreeIcon 属性的值
	 * @param value {Boolean}
	 */
	setShowTreeIcon: function (value) {
		this.showTreeIcon = value;
		if (this.tree)
			this.tree.setShowTreeIcon(value);
	},
	/**
	 * 获取 showTreeIcon 属性的值
	 * @return {Boolean}
	 */
	getShowTreeIcon: function () {
		return this.showTreeIcon;
	},
	/**
	 * 设置 showTreeLines 属性的值
	 * @param value {Boolean}
	 */
	setShowTreeLines: function (value) {
		this.showTreeLines = value;
		if (this.tree)
			this.tree.setShowTreeLines(value);
	},
	/**
	 * 获取 showTreeLines 属性的值
	 * @return {Boolean}
	 */
	getShowTreeLines: function () {
		return this.showTreeLines;
	},
	/**
	 * 设置 showFolderCheckBox 属性的值
	 * @param value {Boolean}
	 */
	setShowFolderCheckBox: function (value) {

		this.showFolderCheckBox = value;
		if (this.tree)
			this.tree.setShowFolderCheckBox(value);
	},
	/**
	 * 获取 showFolderCheckBox 属性的值
	 * @return {Boolean}
	 */
	getShowFolderCheckBox: function () {
		return this.showFolderCheckBox;
	},
	/**
	 * 设置 autoCheckParent 属性的值
	 * @param value {Boolean}
	 */
	setAutoCheckParent: function (value) {

		this.autoCheckParent = value;
		if (this.tree)
			this.tree.setAutoCheckParent(value);
	},
	/**
	 * 获取 autoCheckParent 属性的值
	 * @return {Boolean}
	 */
	getAutoCheckParent: function () {
		return this.autoCheckParent;
	},
	// add method pzf 2015-02
	setCheckOpposite:function(value){
		this.checkOpposite = value;
		if (this.tree)
			this.tree.setCheckOpposite(value);
	},
	/**
	 * 设置 expandOnLoad 属性的值
	 * @param value {Boolean|Number}
	 */
	setExpandOnLoad: function (value) {

		this.expandOnLoad = value;
		if (this.tree)
			this.tree.setExpandOnLoad(value);
	},
	/**
	 * 获取 expandOnLoad 属性的值
	 * @return {Number|Boolean}
	 */
	getExpandOnLoad: function () {
		return this.expandOnLoad;
	},
	setValueFromSelect: function (value) {
	    this.valueFromSelect = value;
	},
	getValueFromSelect: function () {
	    return this.valueFromSelect;
	},
	setDataField: function (value) {
	    if (this.tree) this.tree.setDataField(value);
	    this.dataField = value;
	},
    //增加queryfield在查询时使用，用来指定匹配的项 pzf 2014-12-10
    setQueryField: function (value) {
        this.tree.queryfield = value;
    },

	/**
	 * 用于从HTML标签中提取配置参数的方法。在此方法中有对 url， data， textField， valueField，
	 * nodesField， parentField， onbeforenodecheck， onbeforenodeselect， expandOnLoad，
	 *  resultAsTree， multiSelect， checkRecursive，showTreeIcon，showTreeLines，
	 * showFolderCheckBox，autoCheckParent，showQueryToolBar等属性做提取。
	 * @param el {Object} DOM元素
	 * @returns {Object} JSON对象
	 */
	getAttrs: function (el) {
		//修改组件名称错误（mini.ComboBox改为mini.TreeSelect）  赵美丹 2012-12-25
        //增加queryfield在查询时使用，用来指定匹配的项 pzf 2014-12-10
		var attrs = mini.TreeSelect.superclass.getAttrs.call(this, el);


		mini._ParseString(el, attrs,
		["url", "data", "textField", "valueField", "nodesField", "parentField", "onnodecheck","onbeforenodecheck", "onbeforenodeselect",
		"expandOnLoad", "onnodeclick", "onbeforeload", "onload", "onloaderror","ondrawnode","queryField"
		]
		);
		mini._ParseBool(el, attrs,
		["multiSelect", "resultAsTree", "checkRecursive", "showTreeIcon", "showTreeLines", "showFolderCheckBox",
		"autoCheckParent", "showQueryToolBar", "ignoreValueFilter", "valueFromSelect","checkOpposite"
		]
		);

		if (attrs.expandOnLoad) {
			var level = parseInt(attrs.expandOnLoad);
			if (mini.isNumber(level)) {
				attrs.expandOnLoad = level;
			} else {
				attrs.expandOnLoad = attrs.expandOnLoad == "true" ? true : false;
			}
		}

		return attrs;
	}
});
mini.regClass(mini.TreeSelect, 'TreeSelect');