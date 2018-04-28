
//require('core-js');

// require('core-js/fn/object/assign');

//require('prop-types');
//require('fetch-jsonp');
//require('babel-polyfill');

//import {sex} from "./sub.js"; //抱错
//console.log(sex); //抱错
//require('core-js'); //抱错
// require('es6-promise');
// require('es5-shim');
// require('es5-shim/es5-sham');
// require('console-polyfill');
// require('fetch-ie8');
// require('core-js/fn/object/assign');

// require('lodash'); //抱错
//require('core-js');
//require('babel-polyfill')
//require('es6-promise');
//require('fetch-ie8');
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
//require('lodash/fp') 这种加载方式只有第四版本会有
// var _ = require('lodash')
//var fp = require('lodash'); 
// import _ from 'lodash'; //抱错

//console.log(require('lodash').VERSION);

//require('./sub.js'); //抱错
require('Static/scss/pub.scss');
//require('./static/css/pub.css');

require('Static/../test.js');

function component() {

    //'use strict'

    const element = document.createElement('div');
    //element.innerHTML = MM.join(['Hello', 'webpack'], ' ');

    ["3","4"].forEach((index)=>{
        console.log(index);
    });

    const x = {class: 2,};
    const T = x.class;
    element.innerHTML = "fuck";

    //element.classList.add('hello');
    return element;

}

document.body.appendChild(component());

