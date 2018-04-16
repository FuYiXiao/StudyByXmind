
mini.FileUpload = function (config) {
    this.postParam = {};
    mini.FileUpload.superclass.constructor.call(this, config);
    this.on("validation", this.__OnValidation, this);
}

mini.extend(mini.FileUpload, mini.ButtonEdit, {
    width: 180,
    buttonText: "浏览...",
    _buttonWidth: 56,

    limitTypeErrorText: "上传文件格式为：",
    readOnly: true,
    _cellSpacing: 0,

    limitSize: '',
    limitType: '',
    typesDescription: '上传文件格式',
    uploadLimit: 0,
    queueLimit: '',
    flashUrl: '',
    uploadUrl: '',
    showUploadProgress: true,
    usequerystring:false,
    postParam : null,
    uploadOnSelect: false,
    updateFileName:"flashPlayerSetup.zip",  //更新flashplay文件的文件名

    uiCls: "mini-fileupload",
    _create: function () {
        mini.FileUpload.superclass._create.call(this);

        mini.addClass(this.el, "mini-htmlfile");
        this._progressbarEl = mini.append(this._borderEl, '<div id="' + this._id + '$progressbar"  class="mini-fileupload-progressbar"><div id="' + this._id + '$complete" class="mini-fileupload-complete"></div></div>')

        this._completeEl = this._progressbarEl.firstChild;


        this._uploadId = this.uid + "$button_placeholder";
        this._fileEl = mini.append(this.el, '<span id="' + this._uploadId + '"></span>');
        this.uploadEl = this._fileEl;

        mini.on(this._borderEl, "mousemove", this.__OnMouseMove, this);
        mini.on(this._borderEl, "click", this.__OnClick, this);
    },
    _getButtonHtml: function () {
        var hover = 'onmouseover="mini.addClass(this, \'' + this._buttonHoverCls + '\');" '
                        + 'onmouseout="mini.removeClass(this, \'' + this._buttonHoverCls + '\');"';
        return '<span class="mini-buttonedit-button" ' + hover + '>' + this.buttonText + '</span>';
    },
    destroy: function (removeEl) {
        if (this._innerEl) {
            mini.clearEvent(this._innerEl);
            
            this._innerEl = null;
        }
        mini.FileUpload.superclass.destroy.call(this, removeEl);
    },
    doLayout: function(){
        mini.FileUpload.superclass.doLayout.call(this);
        
        //解决校验不合法时title无法正常显示的问题 赵美丹 2014-05-02
        if(this.swfUpload){
            var el = this.swfUpload.movieElement;
            el.style.width = this._borderEl.style.width;
        }
    },
    //校验是否安装flash player 赵美丹 2013-05-06
    flashChecker : function() {
	    var hasFlash = 0; // 是否安装了flash
	    var flashVersion = 0; // flash版本
	
	    if (document.all) {
	        try{
	            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	            if (swf) {
	                hasFlash = 1;
	                VSwf = swf.GetVariable("$version");
	                flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
	            }
	        }catch(ex){
	            
	        }
	    } else {
	        if (navigator.plugins && navigator.plugins.length > 0) {
	            var swf = navigator.plugins["Shockwave Flash"];
	            if (swf) {
	                hasFlash = 1;
	                var words = swf.description.split(" ");
	                for (var i = 0; i < words.length; ++i) {
	                    if (isNaN(parseInt(words[i])))
	                        continue;
	                    flashVersion = parseInt(words[i]);
	                }
	            }
	        }
	    }
	    return {
	        hasFlash  : hasFlash,
	        version   : flashVersion
	    };
	},
    __OnClick:function(e){
        //this method will trig  when swf is not installed only
        //iframe是为了防止页面刷新
        if(!this.flashChecker().hasFlash){

            var path = mini_CreateJSPath("swfupload.js");

            mini.showMessageBox({
                width: 250,
                title: "Flash Player安装",
                buttons: [],
                message: "Flash Player安装",
                html: "<a href='"+path+this.updateFileName+"' target='freshme'>Flash Player未安装，请点击此处安装，安装完后请重启浏览器。</a><iframe style='width:0px;height:0px;border:none;' name='freshme'></iframe>"

            });
            return;
        }

        if (this.flashChecker().version < 10) {

            var path = mini_CreateJSPath("swfupload.js");

             mini.showMessageBox({
             width: 250,
             title: "Flash Player升级",
             buttons: [],
             message: "Flash Player升级",
             html: "<a href='"+path+this.updateFileName+"' target='freshme'>您的Flash Player版本太低，请点击此处升级，升级完后请重启浏览器。</a><iframe style='width:0px;height:0px;border:none;' name='freshme'></iframe>"

             });

            return;
        }
    },
    __OnMouseMove: function (evt) {
        if (this.enabled == false) return;

        var sf = this;
       
        if (!this.swfUpload) {

            //校验是否安装flash player 赵美丹 2013-05-06
            //将提示信息移至onclick事件当中 pzf 2014-04
            if(!this.flashChecker().hasFlash){
              // alert("请安装Flash Player。");
               return;
            }

            if (this.flashChecker().version < 10) {
              /*
                var path = mini_CreateJSPath("swfupload.js");
                mini.showMessageBox({
                    width: 250,
                    title: "Flash Player升级",
                    buttons: [],
                    message: "Flash Player升级",
                    html: "<a href='"+path+"install_flash_player10.rar'>您的Flash Player版本太低，请点击此处升级，升级完后请重启浏览器。</a>"

                });
                */
                return;
            }

            var upload = new SWFUpload({
                file_post_name: this.name,
                upload_url: sf.uploadUrl,
                flash_url: sf.flashUrl,

                file_size_limit: sf.limitSize,  
                file_types: sf.limitType,   
                file_types_description: sf.typesDescription,
                file_upload_limit: parseInt(sf.uploadLimit),
                file_queue_limit: sf.queueLimit,
                use_query_string : sf.usequerystring,
                
                file_queued_handler: mini.createDelegate(this.__on_file_queued, this),
                file_queue_error_handler: mini.createDelegate(this.__on_file_queued_error, this),
                upload_error_handler: mini.createDelegate(this.__on_upload_error, this),
                upload_success_handler: mini.createDelegate(this.__on_upload_success, this),
                upload_complete_handler: mini.createDelegate(this.__on_upload_complete, this),
                upload_progress_handler: mini.createDelegate(this.__on_upload_progress, this),

                
                button_placeholder_id: this._uploadId,
                button_width: 1000,
                button_height: 50,
                button_window_mode: "transparent",
                button_action : SWFUpload.BUTTON_ACTION.SELECT_FILE,

                
                debug: false

            });
            upload.flashReady();
            this.swfUpload = upload;

            var el = this.swfUpload.movieElement;
            el.style.zIndex = 1000;
            el.style.position = "absolute";
            el.style.left = "0px";
            el.style.top = "0px";
            el.style.width = "100%";
            el.style.height = "50px";


        }
    },
    setLimitSize: function (value) {
        this.limitSize = value;
    },
    addPostParam: function (value) {
        mini.copyTo(this.postParam, value);
    },
   
    getPostParam: function () {
        return this.postParam;
    },

    setLimitType: function (value) {
        this.limitType = value;
        //修复setLimitType后，typesDescription不正确的问题 pzf 2015-01
        this.typesDescription = "上传文件格式 " + value;
        if (this.swfUpload) this.swfUpload.setFileTypes(this.limitType, this.typesDescription);

    },
    getLimitType: function () {
        return this.limitType;
    },

    setTypesDescription: function (str) {
        this.typesDescription = str;
        if (this.swfUpload) this.swfUpload.setFileTypes(this.limitType, this.typesDescription);

    },
    getTypesDescription: function () {
        return this.typesDescription;
    },

    setButtonText: function (value) {
        this.buttonText = value;
        this._buttonEl.innerHTML = value;
    },
    getButtonText: function () {
        return this.buttonText;
    },

    setUploadLimit: function (value) {
        this.uploadLimit = value;
    },
    
    setQueueLimit: function (value) {
        this.queueLimit = value;
    },

    setUseQueryString:function(value){
        this.usequerystring = value;
    },
    setFlashUrl: function (value) {
        this.flashUrl = value;
    },

    setUploadUrl: function (value) {
        if (this.swfUpload) {
            this.swfUpload.setUploadURL(value);
        }
        this.uploadUrl = value
    },
    getUploadUrl: function () {
        return this.uploadUrl;
    },

    //扩展postParam，用于参数传递 赵美丹 2013-04-22
    setPostParam: function (value) {
        if (this.swfUpload) {
            this.swfUpload.setPostParams(value);
        }
        this.postParam = value
    },
    setName: function (value) {
        this.name = value;
    },

    setUpdateFileName: function (value) {
        this.updateFileName = value;
    },

    startUpload: function (params) {
        if(this.getValue()==""){
            mini.alert("请选择上传文件。");
            return;
        }
        var e = { cancel: false };
        this.fire("beforeupload", e);
        if (e.cancel == true) return;
        if (this.swfUpload) {
            this.swfUpload.setPostParams(this.postParam);
            var state =  this.swfUpload.getStats();
            /* 上次队列中的最后一个文件 pzf */
            var _file = this.swfUpload.getFile(state.files_queued + state.successful_uploads + state.upload_errors +state.queue_errors - 1);

            this.swfUpload.startUpload(_file.id);
            //this.swfUpload.startUpload()
        }
    },
    setShowUploadProgress: function (value) {

        this.showUploadProgress = value;
        this._progressbarEl.style.display = value ? "block" : "none";
    },
    getShowUploadProgress: function () {
        return this.showUploadProgress;
    },

    __on_upload_progress: function (file, complete, total) {

        if (this.showUploadProgress) {
            var totalWidth = mini.getWidth(this._progressbarEl);
            var width = totalWidth * complete / total;
            mini.setWidth(this._completeEl, width);

        }
        this._progressbarEl.style.display = this.showUploadProgress ? "block" : "none";

        var e = { file: file, complete: complete, total: total };
        this.fire("uploadprogress", e);
    },

    __on_file_queued: function (file) {
        var e = { file: file };

       /* 第二次选择文件无法 潘正锋 2014-03 */
       /*
        var state = this.swfUpload.getStats();
        if (state.files_queued > 0) {
            for (var i = 0; i < state.files_queued; i++) {
                var _file = this.swfUpload.getFile(i);
                if (_file.id != file.id) {
                    this.swfUpload.cancelUpload(_file.id, false);
                }
            }
        }
        */
        if (this.uploadOnSelect) {
            this.startUpload()
        }
        this.setText(file.name);
        //解决组件校验无效的问题  赵美丹 2013-05-03
        this.setValue(file.name);

        this.fire("fileselect", e);
    },
    __on_file_queued_error:function(file, errorCode, message){
        switch (errorCode) {
            case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                //将b转化为mb,提示信息更加友好 pzf 2015-06
                var fileSize = file.size;
                if (fileSize > 0) {
                    fileSize = parseInt(fileSize / 1024 / 1024 * 10);
                    fileSize = fileSize / 10;
                }
                mini.alert("上传文件太大, 文件名: " + file.name + ", 大小: " + fileSize+"MB");
                //清空 pzf 2015-03
                this.setValue("");
                break;
            case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:

                mini.alert("文件大小为0, 文件名: " + file.name);
                //清空 pzf 2015-03
                this.setValue("");
                break;
            case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:

                mini.alert("文件类型不符, 文件名: " + file.name);
                //清空 pzf 2015-03
                this.setValue("");
                break;
            default:

                break;
        }
    },
    __on_upload_success: function (file, serverData) {
        
        var e = { file: file, serverData: serverData };
        this.fire("uploadsuccess", e);
        this._progressbarEl.style.display = "none";


    },
    __on_upload_error: function (file, code, message) {
        if (message == "File Cancelled") return;

        this._progressbarEl.style.display = "none";

        var e = { file: file, code: code, message: message };


        this.fire("uploaderror", e);
        
    },
    __on_upload_complete: function (e) {
        this._progressbarEl.style.display = "none";
        this.fire("uploadcomplete", e);
    },
    __fileError: function () {
        
    },
    //解决setValue后，text任然在的问题 pzf 2014-12
    setValue: function (value,firechangedevent) {
        mini.FileUpload.superclass.setValue.call(this,value,firechangedevent);
        mini.FileUpload.superclass.setText.call(this,value);
    },

    getAttrs: function (el) {
        var attrs = mini.FileUpload.superclass.getAttrs.call(this, el);

        mini._ParseString(el, attrs,
            ["limitType", "limitSize", "flashUrl", "uploadUrl", "uploadLimit", "buttonText", "showUploadProgress",
                "onuploadsuccess", "onuploaderror", "onuploadcomplete", "onfileselect","onuploadprogress","usequerystring","updateFileName"
            ]
        );

        mini._ParseBool(el, attrs,
            ["uploadOnSelect"
            ]
        );

        return attrs;
    }

});
mini.regClass(mini.FileUpload, "fileupload");