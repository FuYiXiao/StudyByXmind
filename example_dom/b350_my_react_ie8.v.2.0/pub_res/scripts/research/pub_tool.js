/*
* 计算含中文字符串的实际长度，或者截取字符串
* @param str {stirng} 需要处理计算的字符串
* @param cutStrLength {Number} 需要截取到第几位,
* @param ifAddDot {Boolean} 截断以后是否追加。。。,
* @return 情况一： 如果没有参数二，返回字符串真实长度
* @return 情况二： 如果有参数二，返回一个对象记录截取内容
* @return 情况三： 如果还有参数三，截取内容后追加...
*/
window.GetLengthByCodeOrCut = function(str,cutStrLength,ifAddDot) {
  cutStrLength = cutStrLength?cutStrLength:0;
  var realLength = 0, len = str.length, charCode = -1;
  var ifCut=false;
  var nowStr="";
  if(!isNaN(cutStrLength)&&cutStrLength!=0){
    ifCut=true;
  }
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
       realLength += 1;
    }else{
       realLength += 2;
    }
    nowStr=nowStr+str.charAt(i);
    if(ifCut&&cutStrLength<=realLength){
      return {
        hasCut:true,
        cutLength:cutStrLength,
        realLength:realLength,
        cutStr:ifAddDot?(nowStr+"..."):nowStr,
        fullStr:str
      };
    }
  }
  if(ifCut&&cutStrLength>realLength){
      return {
        hasCut:false,
        fullStr:str,
    cutStr:nowStr
      };
  }else{
    return realLength;
  }
}

module.exports = {
    "GetLengthByCodeOrCut":GetLengthByCodeOrCut
};