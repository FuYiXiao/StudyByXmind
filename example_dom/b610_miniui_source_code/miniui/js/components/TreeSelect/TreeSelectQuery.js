mini.plugin(mini.TreeSelect,  {
	
	/**
	 * 是否在弹出层显示搜索框
	 * @type Boolean
	 * @default
	 */
	showQueryToolBar : false,

	_createQueryToolBar : function() {
		if(this.showQueryToolBar && !this.queryToolbar) {
			this.queryToolbar = new mini.ToolBar();
			this.queryToolbar.render(this.popup._contentEl,"prepend");	//添加子元素

			this.queryInput = new mini.TextBox();
			this.queryInput.setEmptyText("请录入查询条件");
            this.queryInput.setWidth(50);
			this.queryInput.render(this.queryToolbar.el);
			this.queryInput.on("enter",this._queryEvent, this);

			this.queryButton = new mini.Button();
			this.queryButton.setText("查询");
			this.queryButton.setPlain(true);
            this.queryButton.setStyle("margin-left:2px;");
			this.queryButton.render(this.queryToolbar.el);
			this.queryButton.onClick(this._queryEvent,this);
            
            //解决输入框的自适应问题 赵美丹 2012-12-13
            this.on("showpopup", function(){
                var w = this.queryToolbar.getWidth();
	            this.queryInput.setWidth(w-58);
            });
		}
	},
    _destroyQueryToolBar : function(removeEl) {
    	//内存泄露问题优化 赵美丹 2013-04-17
        if (this.queryInput) {
            mini.clearEvent(this.queryInput);
            this.queryInput.destroy(removeEl);
            this.queryInput = null;
        }
        
        if (this.queryButton) {
            mini.clearEvent(this.queryButton);
            this.queryButton.destroy(removeEl);
            this.queryButton = null;
        }
        
        if (this.queryToolbar) {
            mini.clearEvent(this.queryToolbar);
            this.queryToolbar.destroy(removeEl);
            this.queryToolbar = null;
        }
    },
	_queryEvent : function(e) {
		var value = this.queryInput.getValue();
        this.queryValue = value;
        var scope = this;
        if (value) {
            //过滤掉空格 pzf 2015-03-08
            value = value.trim() ;
            var firstLeafNode = null;
            var ignoreValueFilter = this.ignoreValueFilter;
            this.tree.filter(function (node) {
                    //判断字段可以自定义 pzf 2014-12-10
                    var queryfield = mini._getMap(this.queryfield, node);
                    if(queryfield == null || queryfield == undefined)
                        queryfield = "";
                    queryfield = String(queryfield).toLowerCase();
                    // 忽略大小写，idField也可以查询 潘正锋 2014-03
                    if (node[this.textField].toLowerCase().indexOf(value.toLowerCase()) != -1 || (!ignoreValueFilter && node[this.idField].toLowerCase().indexOf(value.toLowerCase()) != -1) || queryfield.indexOf(value.toLowerCase()) != -1) {
                        if (!firstLeafNode || node[this.parentField] == firstLeafNode[this.idField]) {
                            firstLeafNode = node;
                        }
                        return true;
                    }
                }
            );
            //默认展开至第一个叶子节点 赵美丹 2013-03-12
            if (firstLeafNode) {
                this.tree.expandPath(firstLeafNode);
            }
        } else {
			this.tree.clearFilter();
		}
	},
	
	/**
	 * 设置 showQueryToolBar 属性值
	 * @param value {Boolean}
	 */
	setShowQueryToolBar: function(value) {
        this.showQueryToolBar = value;
        if(!this.queryToolbar) return;
        if(value){
            this.queryToolbar.el.style.display = "";
        }else{
            this.queryToolbar.el.style.display = "none";
        }
	},
	
	/**
	 * 获取 showQueryToolBar 属性值
	 * @return {Boolean}
	 */
	getShowQueryToolBar: function() {
		return this.showQueryToolBar;
	},
	doUpdate: function() {
		mini.TreeSelect.superclass.doUpdate.call(this);
		this._createQueryToolBar();
	}
});