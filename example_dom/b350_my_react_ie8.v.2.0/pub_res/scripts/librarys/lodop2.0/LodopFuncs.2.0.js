
(function(){
	var CreatedOKLodop7766=null;

	//====判断是否需要安装CLodop云打印服务器:IE 下不需要安装====
	function needCLodop(){
		try{

			var ua=navigator.userAgent;

			if (ua.match(/Windows\sPhone/i) !=null) return true;
			if (ua.match(/iPhone|iPod/i) != null) return true;
			if (ua.match(/Android/i) != null) return true;
			if (ua.match(/Edge\D?\d+/i) != null) return true;
			if (ua.match(/QQBrowser/i) != null) return false;

			var verTrident=ua.match(/Trident\D?\d+/i);
			var verIE=ua.match(/MSIE\D?\d+/i);
			var verOPR=ua.match(/OPR\D?\d+/i);
			var verFF=ua.match(/Firefox\D?\d+/i);
			var x64=ua.match(/x64/i);

			if ((verTrident==null)&&(verIE==null)&&(x64!==null)){

				return true;

			}else if ( verFF !== null) {

				verFF = verFF[0].match(/\d+/);
				if ( verFF[0] >= 42 ) return true;

			}else if ( verOPR !== null) {

				verOPR = verOPR[0].match(/\d+/);
				if ( verOPR[0] >= 32 ) return true;

			}else if ((verTrident==null)&&(verIE==null)) {

				var verChrome=ua.match(/Chrome\D?\d+/i);

				if ( verChrome !== null ) {
					verChrome = verChrome[0].match(/\d+/);
					if (verChrome[0]>=42) return true;
				};

			};

			return false;

		} catch(err) {
			return true;
		};
	};

	//====页面引用CLodop云打印必须的JS文件：====
	if (needCLodop()) {
		var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
		var oscript = document.createElement("script");
		oscript.src ="http://localhost:8000/CLodopfuncs.js?priority=1";
		head.insertBefore( oscript,head.firstChild );
		//本机云打印的后补端口8001：
		oscript = document.createElement("script");
		oscript.src ="http://localhost:8001/CLodopfuncs.js?priority=2";
		head.insertBefore( oscript,head.firstChild );
	};

	//用于记录是否已经在页面上输出了提示信息
	var GloabParamHasPushHtml=false;

	//====获取LODOP对象的主过程：====
	function getLodop(oOBJECT,oEMBED){

		var bootPath ="";

		if(window._bootPATH){
			bootPath =window._bootPATH;
		}else{
			if(__CreateJSPath){
				bootPath = __CreateJSPath();
			}else{
				return false;
			}
		}

		bootPath = bootPath+"../librarys/lodop2.0/";

		//打开帮助文档的HTML
		var HelpPage="<font color='blue' onclick='GloabFunShowPrintHelp()' style='cursor:pointer;' title='IE下安装插件失败时的帮助文档'>帮助文档</font>"

		//32位 打印控件未安装的提示文本
		var strHtmInstall="<br><font color='#FF00FF' style='text-align: center;display: block;'>打印控件未安装!点击这里<a href='"
			+bootPath+"install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。"
			+HelpPage+"</font>";

		//32位 打印控件需要升级的提示文本
		var strHtmUpdate="<br><font color='#FF00FF' style='text-align: center;display: block;'>打印控件需要升级!点击这里<a href='"
			+bootPath+"install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。"+
			HelpPage+"</font>";

		//64位 打印控件未安装的提示文本
		var strHtm64_Install="<br><font color='#FF00FF' style='text-align: center;display: block;'>打印控件未安装!点击这里<a href='"
			+bootPath+"install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。"
			+HelpPage+"</font>";

		//64位 打印控件需要升级的提示文本
		var strHtm64_Update="<br><font color='#FF00FF' style='text-align: center;display: block;'>打印控件需要升级!点击这里<a href='"
			+bootPath+"install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。"
			+HelpPage+"</font>";

		//火狐的旧版提示
		var strHtmFireFox="<br><br><font color='#FF00FF' style='text-align: center;display: block;'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）"+HelpPage+"</font>";

		//谷歌下的提示
		var strHtmChrome="<br><br><font color='#FF00FF' style='text-align: center;display: block;'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）"+HelpPage+"</font>";

		//云端的提示
		var strCLodopInstall="<br><font color='#FF00FF' style='text-align: center;display: block;' >CLodop云打印服务(localhost本地)未安装启动!点击这里<a href='"
			+bootPath+"CLodop_Setup_for_Win32NT.exe' target='_self'>执行安装</a>,安装后请刷新页面。"
			+HelpPage+"</font>";

		//云端的升级提示
		var strCLodopUpdate="<br><font color='#FF00FF'style='text-align: center;display: block;' >CLodop云打印服务需升级!点击这里<a href='"
			+bootPath+"CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。"
			+HelpPage+"</font>";

		var LODOP;


		try{

			var isIE = (navigator.userAgent.indexOf('MSIE')>=0) || (navigator.userAgent.indexOf('Trident')>=0);

			if (needCLodop()) {

				try{ LODOP=getCLodop();} catch(err) {};
				if (!LODOP && document.readyState!=="complete") {alert("C-Lodop没准备好，请稍后再试！"); return;};
				if (!LODOP) {
					if (isIE){
						_BodyInnsertCnt(strCLodopInstall);

					}else{
						_BodyInnsertCnt(strCLodopInstall);
					}
					return;
				} else {

					if (CLODOP.CVERSION<"2.0.6.8") {
						if (isIE){
							_BodyInnsertCnt(strCLodopUpdate);
						}else{
							_BodyInnsertCnt(strCLodopUpdate);
						}
					};
					if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
					if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);
				};

			} else {

				var is64IE  = isIE && (navigator.userAgent.indexOf('x64')>=0);
				//=====如果页面有Lodop就直接使用，没有则新建:==========
				if (oOBJECT!=undefined || oEMBED!=undefined) {
					if (isIE) LODOP=oOBJECT; else  LODOP=oEMBED;
				} else if (CreatedOKLodop7766==null){
					LODOP=document.createElement("object");
					LODOP.setAttribute("width",0);
					LODOP.setAttribute("height",0);
					LODOP.setAttribute("style","position:absolute;left:0px;top:-100px;width:0px;height:0px;");
					if (isIE) LODOP.setAttribute("classid","clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
					else LODOP.setAttribute("type","application/x-print-lodop");
					document.documentElement.appendChild(LODOP);
					CreatedOKLodop7766=LODOP;
				} else {
					LODOP=CreatedOKLodop7766;
				}
				//=====Lodop插件未安装时提示下载地址:==========
				if ((LODOP==null)||(typeof(LODOP.VERSION)=="undefined")) {

					if (navigator.userAgent.indexOf('Chrome')>=0){
						_BodyInnsertCnt(strHtmChrome);
					}
					if (navigator.userAgent.indexOf('Firefox')>=0){
						_BodyInnsertCnt(strHtmFireFox);
					}

					if (is64IE){
						_BodyInnsertCnt(strHtm64_Install);
					}else{
						if (isIE) {
							_BodyInnsertCnt(strHtmInstall);
						}else{
							_BodyInnsertCnt(strHtmInstall);
						}
					}
					return LODOP;
				};
			};

			if (LODOP.VERSION<"6.1.0.8") {
				if (needCLodop()){
					_BodyInnsertCnt(strCLodopUpdate);
				}else{
					if (is64IE){
						_BodyInnsertCnt(strHtm64_Update);
					}else{
						if (isIE){
							_BodyInnsertCnt(strHtmUpdate);
						}else{
							_BodyInnsertCnt(strHtmUpdate);
						}
					}
				}
				return LODOP;
			};
			//===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
			LODOP.SET_LICENSES("税友软件集团股份有限公司","F4EDB261FAE17DEF5C9B4F547E83CA27","","");
			//===========================================================
			return LODOP;
		} catch(err) {
			alert("getLodop出错:"+err);
		};

		function _BodyInnsertCnt(InsertValue){
			if(GloabParamHasPushHtml==true){
				return false;
			}
			var DomDiv=document.createElement("div");
			DomDiv.innerHTML=InsertValue;
			//重新绘制页面
			if(mini&&mini.showMessageBox){

				mini.showMessageBox({
					width: 400,
					title: "提示信息",
					buttons: ["ok"],
					html: InsertValue,
					showModal: true
				});
			}else{
				document.getElementsByTagName("body")[0].insertBefore(DomDiv,document.getElementsByTagName("body")[0].firstChild);
				GloabParamHasPushHtml=true;
			}
			//重新绘制页面
			if(mini&&mini.layout){
				mini.layout();
			}
		}
	}

	//全局方法，用于弹出弹窗，显示帮助信息
	window.GloabFunShowPrintHelp=function(){

		var bootPath ="";

		if(window._bootPATH){
			bootPath =window._bootPATH;
		}else{
			bootPath = __CreateJSPath();
		}

		bootPath = bootPath+"../librarys/lodop2.0/";

		if(window.mini){
			var win = mini.open({
				title: 'IE下插件安装失败的相关设置',
				url: bootPath +'print-help.html',
				showModal: true,
				width: 640,
				height: 450
			});
		}else{
			var opener=window.open(bootPath+'print-help.html','newwindow','height=450,width=640,scrollbars=yes,resizeble=yes')
			opener.focus();
			return false;
		}
	};

	/**
	 * Created by pzf on 2014/11/10.
	 */
	if (typeof define === 'function' && define.amd) {
		define('lodop2', [], function() {
			return {getLodop:getLodop};
		});
	}else{
		window.getLodop=getLodop
	}

})();

