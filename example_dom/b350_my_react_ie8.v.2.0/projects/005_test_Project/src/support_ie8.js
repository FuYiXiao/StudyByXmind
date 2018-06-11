
/*IE8的兼容代码--这里因为其他库需要 html 的方式加载，所以需要拿到最前面去了*/

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
//require('core-js/fn/object/assign');
require('Static/scripts/json3.min.js');
//require('fetch-ie8');
//require('fetch-jsonp');
//require('core-js'); 
require('es6-promise').polyfill();
//require('es6-promise');

