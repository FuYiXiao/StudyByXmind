
//require('core-js');
//require('es6-promise');
// require('core-js/fn/object/assign');
//require('fetch-ie8');
//require('prop-types');
//require('fetch-jsonp');
//require('babel-polyfill');
// require('babel-polyfill');

//import {sex} from "./sub.js"; //抱错
//console.log(sex); //抱错
//require('core-js'); //抱错

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');
require('core-js/fn/object/assign');

//import _ from 'lodash'; //抱错
//require('lodash'); //抱错
//console.log(require('lodash').VERSION);

//require('./sub.js'); //抱错
require('./static/scss/pub.scss');

//require('./static/css/pub.css');

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

