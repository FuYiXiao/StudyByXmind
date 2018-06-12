
/*
* 计算含中文字符串的实际长度，或者截取字符串
* @param str {stirng} 需要处理计算的字符串
* @param cutStrLength {Number} 需要截取到第几位,包含这一位
* @param ifAddDot {Boolean} 截断以后是否追加。。。,
* @return 情况一： 如果没有参数二，返回字符串真实长度
* @return 情况二： 如果有参数二，返回一个对象记录截取内容，包括自身
* @return 情况三： 如果有参数三，并且为false，则不追加...，否则默认追加
*/
window.GetLengthByCodeOrCut = function(str,cutStrLength,ifAddDot) {

  cutStrLength = cutStrLength?cutStrLength:0;
  ifAddDot = ifAddDot ? ifAddDot : true;

  var realLength = 0, len = str.length, charCode = -1;
  //是否需要进行截取
  var ifNeedCut = false;
  var hasCutStr = false;
  var nowCutStr = ""; 
  if( !isNaN(cutStrLength) && cutStrLength!=0 ){
    ifNeedCut=true;
  }
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
       realLength += 1;
    }else{
       realLength += 2;
    }
    if(ifNeedCut&&cutStrLength>=realLength){
      nowCutStr=nowCutStr+str.charAt(i);
    }
  };
  if(ifNeedCut&&cutStrLength<realLength){
    hasCutStr=true;
  }
  return {
    hasCut:hasCutStr,
    realLength:realLength,
    cutLength:cutStrLength,
    cutStr:hasCutStr?(ifAddDot?(nowCutStr+"..."):nowCutStr):str,
    fullStr:str
  }
};


module.exports = {
    "GetLengthByCodeOrCut":GetLengthByCodeOrCut
};

