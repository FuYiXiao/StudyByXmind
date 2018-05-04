/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
//require('lodash/fp') 这种加载方式只有第四版本会有
// var _ = require('lodash')
//var fp = require('lodash'); 
// import _ from 'lodash'; //抱错

//console.log(require('lodash').VERSION);

//require('./sub.js'); //抱错
__webpack_require__(4);
//require('./static/css/pub.css');

__webpack_require__(5);

function component() {

    //'use strict'

    var element = document.createElement('div');
    //element.innerHTML = MM.join(['Hello', 'webpack'], ' ');

    ["3", "4"].forEach(function (index) {
        console.log(index);
    });

    var x = { "class": 2 };
    var T = x["class"];
    element.innerHTML = "fuck";

    //element.classList.add('hello');
    return element;
}

document.body.appendChild(component());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {
    /**
     * Brings an environment as close to ECMAScript 5 compliance
     * as is possible with the facilities of erstwhile engines.
     *
     * Annotated ES5: http://es5.github.com/ (specific links below)
     * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
     * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
     */

    // Shortcut to an often accessed properties, in order to avoid multiple
    // dereference that costs universally. This also holds a reference to known-good
    // functions.
    var $Array = Array;
    var ArrayPrototype = $Array.prototype;
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    var $Function = Function;
    var FunctionPrototype = $Function.prototype;
    var $String = String;
    var StringPrototype = $String.prototype;
    var $Number = Number;
    var NumberPrototype = $Number.prototype;
    var array_slice = ArrayPrototype.slice;
    var array_splice = ArrayPrototype.splice;
    var array_push = ArrayPrototype.push;
    var array_unshift = ArrayPrototype.unshift;
    var array_concat = ArrayPrototype.concat;
    var array_join = ArrayPrototype.join;
    var call = FunctionPrototype.call;
    var apply = FunctionPrototype.apply;
    var max = Math.max;
    var min = Math.min;

    // Having a toString local variable name breaks in Opera so use to_string.
    var to_string = ObjectPrototype.toString;

    /* global Symbol */
    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
    var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) { try { var fnStr = fnToStr.call(value); var singleStripped = fnStr.replace(/\/\/.*\n/g, ''); var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, ''); var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' '); return constructorRegex.test(spaceStripped); } catch (e) { return false; /* not a function */ } }, tryFunctionObject = function tryFunctionObject(value) { try { if (isES6ClassFn(value)) { return false; } fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) { if (!value) { return false; } if (typeof value !== 'function' && typeof value !== 'object') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } if (isES6ClassFn(value)) { return false; } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };

    var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
    var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };
    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

    /* inlined from http://npmjs.com/define-properties */
    var supportsDescriptors = $Object.defineProperty && (function () {
        try {
            var obj = {};
            $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
            for (var _ in obj) { // jscs:ignore disallowUnusedVariables
                return false;
            }
            return obj.x === obj;
        } catch (e) { /* this is ES3 */
            return false;
        }
    }());
    var defineProperties = (function (has) {
        // Define configurable, writable, and non-enumerable props
        // if they don't exist.
        var defineProperty;
        if (supportsDescriptors) {
            defineProperty = function (object, name, method, forceAssign) {
                if (!forceAssign && (name in object)) {
                    return;
                }
                $Object.defineProperty(object, name, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: method
                });
            };
        } else {
            defineProperty = function (object, name, method, forceAssign) {
                if (!forceAssign && (name in object)) {
                    return;
                }
                object[name] = method;
            };
        }
        return function defineProperties(object, map, forceAssign) {
            for (var name in map) {
                if (has.call(map, name)) {
                    defineProperty(object, name, map[name], forceAssign);
                }
            }
        };
    }(ObjectPrototype.hasOwnProperty));

    //
    // Util
    // ======
    //

    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
    var isPrimitive = function isPrimitive(input) {
        var type = typeof input;
        return input === null || (type !== 'object' && type !== 'function');
    };

    var isActualNaN = $Number.isNaN || function isActualNaN(x) {
        return x !== x;
    };

    var ES = {
        // ES5 9.4
        // http://es5.github.com/#x9.4
        // http://jsperf.com/to-integer
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
        ToInteger: function ToInteger(num) {
            var n = +num;
            if (isActualNaN(n)) {
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            return n;
        },

        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
        ToPrimitive: function ToPrimitive(input) {
            var val, valueOf, toStr;
            if (isPrimitive(input)) {
                return input;
            }
            valueOf = input.valueOf;
            if (isCallable(valueOf)) {
                val = valueOf.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            toStr = input.toString;
            if (isCallable(toStr)) {
                val = toStr.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            throw new TypeError();
        },

        // ES5 9.9
        // http://es5.github.com/#x9.9
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
        ToObject: function (o) {
            if (o == null) { // this matches both null and undefined
                throw new TypeError("can't convert " + o + ' to object');
            }
            return $Object(o);
        },

        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
        ToUint32: function ToUint32(x) {
            return x >>> 0;
        }
    };

    //
    // Function
    // ========
    //

    // ES-5 15.3.4.5
    // http://es5.github.com/#x15.3.4.5

    var Empty = function Empty() {};

    defineProperties(FunctionPrototype, {
        bind: function bind(that) { // .length is 1
            // 1. Let Target be the this value.
            var target = this;
            // 2. If IsCallable(Target) is false, throw a TypeError exception.
            if (!isCallable(target)) {
                throw new TypeError('Function.prototype.bind called on incompatible ' + target);
            }
            // 3. Let A be a new (possibly empty) internal list of all of the
            //   argument values provided after thisArg (arg1, arg2 etc), in order.
            // XXX slicedArgs will stand in for "A" if used
            var args = array_slice.call(arguments, 1); // for normal call
            // 4. Let F be a new native ECMAScript object.
            // 11. Set the [[Prototype]] internal property of F to the standard
            //   built-in Function prototype object as specified in 15.3.3.1.
            // 12. Set the [[Call]] internal property of F as described in
            //   15.3.4.5.1.
            // 13. Set the [[Construct]] internal property of F as described in
            //   15.3.4.5.2.
            // 14. Set the [[HasInstance]] internal property of F as described in
            //   15.3.4.5.3.
            var bound;
            var binder = function () {

                if (this instanceof bound) {
                    // 15.3.4.5.2 [[Construct]]
                    // When the [[Construct]] internal method of a function object,
                    // F that was created using the bind function is called with a
                    // list of arguments ExtraArgs, the following steps are taken:
                    // 1. Let target be the value of F's [[TargetFunction]]
                    //   internal property.
                    // 2. If target has no [[Construct]] internal method, a
                    //   TypeError exception is thrown.
                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Construct]] internal
                    //   method of target providing args as the arguments.

                    var result = apply.call(
                        target,
                        this,
                        array_concat.call(args, array_slice.call(arguments))
                    );
                    if ($Object(result) === result) {
                        return result;
                    }
                    return this;

                } else {
                    // 15.3.4.5.1 [[Call]]
                    // When the [[Call]] internal method of a function object, F,
                    // which was created using the bind function is called with a
                    // this value and a list of arguments ExtraArgs, the following
                    // steps are taken:
                    // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 2. Let boundThis be the value of F's [[BoundThis]] internal
                    //   property.
                    // 3. Let target be the value of F's [[TargetFunction]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Call]] internal method
                    //   of target providing boundThis as the this value and
                    //   providing args as the arguments.

                    // equiv: target.call(this, ...boundArgs, ...args)
                    return apply.call(
                        target,
                        that,
                        array_concat.call(args, array_slice.call(arguments))
                    );

                }

            };

            // 15. If the [[Class]] internal property of Target is "Function", then
            //     a. Let L be the length property of Target minus the length of A.
            //     b. Set the length own property of F to either 0 or L, whichever is
            //       larger.
            // 16. Else set the length own property of F to 0.

            var boundLength = max(0, target.length - args.length);

            // 17. Set the attributes of the length own property of F to the values
            //   specified in 15.3.5.1.
            var boundArgs = [];
            for (var i = 0; i < boundLength; i++) {
                array_push.call(boundArgs, '$' + i);
            }

            // XXX Build a dynamic function with desired amount of arguments is the only
            // way to set the length property of a function.
            // In environments where Content Security Policies enabled (Chrome extensions,
            // for ex.) all use of eval or Function costructor throws an exception.
            // However in all of these environments Function.prototype.bind exists
            // and so this code will never be executed.
            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

            if (target.prototype) {
                Empty.prototype = target.prototype;
                bound.prototype = new Empty();
                // Clean up dangling references.
                Empty.prototype = null;
            }

            // TODO
            // 18. Set the [[Extensible]] internal property of F to true.

            // TODO
            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
            // 20. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
            //   false.
            // 21. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
            //   and false.

            // TODO
            // NOTE Function objects created using Function.prototype.bind do not
            // have a prototype property or the [[Code]], [[FormalParameters]], and
            // [[Scope]] internal properties.
            // XXX can't delete prototype in pure-js.

            // 22. Return F.
            return bound;
        }
    });

    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
    // use it in defining shortcuts.
    var owns = call.bind(ObjectPrototype.hasOwnProperty);
    var toStr = call.bind(ObjectPrototype.toString);
    var arraySlice = call.bind(array_slice);
    var arraySliceApply = apply.bind(array_slice);
    /* globals document */
    if (typeof document === 'object' && document && document.documentElement) {
        try {
            arraySlice(document.documentElement.childNodes);
        } catch (e) {
            var origArraySlice = arraySlice;
            var origArraySliceApply = arraySliceApply;
            arraySlice = function arraySliceIE(arr) {
                var r = [];
                var i = arr.length;
                while (i-- > 0) {
                    r[i] = arr[i];
                }
                return origArraySliceApply(r, origArraySlice(arguments, 1));
            };
            arraySliceApply = function arraySliceApplyIE(arr, args) {
                return origArraySliceApply(arraySlice(arr), args);
            };
        }
    }
    var strSlice = call.bind(StringPrototype.slice);
    var strSplit = call.bind(StringPrototype.split);
    var strIndexOf = call.bind(StringPrototype.indexOf);
    var pushCall = call.bind(array_push);
    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
    var arraySort = call.bind(ArrayPrototype.sort);

    //
    // Array
    // =====
    //

    var isArray = $Array.isArray || function isArray(obj) {
        return toStr(obj) === '[object Array]';
    };

    // ES5 15.4.4.12
    // http://es5.github.com/#x15.4.4.13
    // Return len+argCount.
    // [bugfix, ielt8]
    // IE < 8 bug: [].unshift(0) === undefined but should be "1"
    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
    defineProperties(ArrayPrototype, {
        unshift: function () {
            array_unshift.apply(this, arguments);
            return this.length;
        }
    }, hasUnshiftReturnValueBug);

    // ES5 15.4.3.2
    // http://es5.github.com/#x15.4.3.2
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
    defineProperties($Array, { isArray: isArray });

    // The IsCallable() check in the Array functions
    // has been replaced with a strict check on the
    // internal class of the object to trap cases where
    // the provided function was actually a regular
    // expression literal, which in V8 and
    // JavaScriptCore is a typeof "function".  Only in
    // V8 are regular expression literals permitted as
    // reduce parameters, so it is desirable in the
    // general case for the shim to match the more
    // strict and common behavior of rejecting regular
    // expressions.

    // ES5 15.4.4.18
    // http://es5.github.com/#x15.4.4.18
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

    // Check failure of by-index access of string characters (IE < 9)
    // and failure of `0 in boxedString` (Rhino)
    var boxedString = $Object('a');
    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

    var properlyBoxesContext = function properlyBoxed(method) {
        // Check node 0.6.21 bug where third parameter is not boxed
        var properlyBoxesNonStrict = true;
        var properlyBoxesStrict = true;
        var threwException = false;
        if (method) {
            try {
                method.call('foo', function (_, __, context) {
                    if (typeof context !== 'object') {
                        properlyBoxesNonStrict = false;
                    }
                });

                method.call([1], function () {
                    'use strict';

                    properlyBoxesStrict = typeof this === 'string';
                }, 'x');
            } catch (e) {
                threwException = true;
            }
        }
        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
    };

    defineProperties(ArrayPrototype, {
        forEach: function forEach(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var i = -1;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.forEach callback must be a function');
            }

            while (++i < length) {
                if (i in self) {
                    // Invoke the callback function with call, passing arguments:
                    // context, property value, property key, thisArg object
                    if (typeof T === 'undefined') {
                        callbackfn(self[i], i, object);
                    } else {
                        callbackfn.call(T, self[i], i, object);
                    }
                }
            }
        }
    }, !properlyBoxesContext(ArrayPrototype.forEach));

    // ES5 15.4.4.19
    // http://es5.github.com/#x15.4.4.19
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
    defineProperties(ArrayPrototype, {
        map: function map(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = $Array(length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.map callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self) {
                    if (typeof T === 'undefined') {
                        result[i] = callbackfn(self[i], i, object);
                    } else {
                        result[i] = callbackfn.call(T, self[i], i, object);
                    }
                }
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.map));

    // ES5 15.4.4.20
    // http://es5.github.com/#x15.4.4.20
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
    defineProperties(ArrayPrototype, {
        filter: function filter(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = [];
            var value;
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.filter callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self) {
                    value = self[i];
                    if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                        pushCall(result, value);
                    }
                }
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.filter));

    // ES5 15.4.4.16
    // http://es5.github.com/#x15.4.4.16
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
    defineProperties(ArrayPrototype, {
        every: function every(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.every callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                    return false;
                }
            }
            return true;
        }
    }, !properlyBoxesContext(ArrayPrototype.every));

    // ES5 15.4.4.17
    // http://es5.github.com/#x15.4.4.17
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
    defineProperties(ArrayPrototype, {
        some: function some(callbackfn/*, thisArg */) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.some callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                    return true;
                }
            }
            return false;
        }
    }, !properlyBoxesContext(ArrayPrototype.some));

    // ES5 15.4.4.21
    // http://es5.github.com/#x15.4.4.21
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
    var reduceCoercesToObject = false;
    if (ArrayPrototype.reduce) {
        reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
            return list;
        }) === 'object';
    }
    defineProperties(ArrayPrototype, {
        reduce: function reduce(callbackfn/*, initialValue*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.reduce callback must be a function');
            }

            // no value to return if no initial value and an empty array
            if (length === 0 && arguments.length === 1) {
                throw new TypeError('reduce of empty array with no initial value');
            }

            var i = 0;
            var result;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                do {
                    if (i in self) {
                        result = self[i++];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (++i >= length) {
                        throw new TypeError('reduce of empty array with no initial value');
                    }
                } while (true);
            }

            for (; i < length; i++) {
                if (i in self) {
                    result = callbackfn(result, self[i], i, object);
                }
            }

            return result;
        }
    }, !reduceCoercesToObject);

    // ES5 15.4.4.22
    // http://es5.github.com/#x15.4.4.22
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
    var reduceRightCoercesToObject = false;
    if (ArrayPrototype.reduceRight) {
        reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
            return list;
        }) === 'object';
    }
    defineProperties(ArrayPrototype, {
        reduceRight: function reduceRight(callbackfn/*, initial*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.reduceRight callback must be a function');
            }

            // no value to return if no initial value, empty array
            if (length === 0 && arguments.length === 1) {
                throw new TypeError('reduceRight of empty array with no initial value');
            }

            var result;
            var i = length - 1;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                do {
                    if (i in self) {
                        result = self[i--];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (--i < 0) {
                        throw new TypeError('reduceRight of empty array with no initial value');
                    }
                } while (true);
            }

            if (i < 0) {
                return result;
            }

            do {
                if (i in self) {
                    result = callbackfn(result, self[i], i, object);
                }
            } while (i--);

            return result;
        }
    }, !reduceRightCoercesToObject);

    // ES5 15.4.4.14
    // http://es5.github.com/#x15.4.4.14
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
    defineProperties(ArrayPrototype, {
        indexOf: function indexOf(searchElement/*, fromIndex */) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);

            if (length === 0) {
                return -1;
            }

            var i = 0;
            if (arguments.length > 1) {
                i = ES.ToInteger(arguments[1]);
            }

            // handle negative indices
            i = i >= 0 ? i : max(0, length + i);
            for (; i < length; i++) {
                if (i in self && self[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        }
    }, hasFirefox2IndexOfBug);

    // ES5 15.4.4.15
    // http://es5.github.com/#x15.4.4.15
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
    defineProperties(ArrayPrototype, {
        lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);

            if (length === 0) {
                return -1;
            }
            var i = length - 1;
            if (arguments.length > 1) {
                i = min(i, ES.ToInteger(arguments[1]));
            }
            // handle negative indices
            i = i >= 0 ? i : length - Math.abs(i);
            for (; i >= 0; i--) {
                if (i in self && searchElement === self[i]) {
                    return i;
                }
            }
            return -1;
        }
    }, hasFirefox2LastIndexOfBug);

    // ES5 15.4.4.12
    // http://es5.github.com/#x15.4.4.12
    var spliceNoopReturnsEmptyArray = (function () {
        var a = [1, 2];
        var result = a.splice();
        return a.length === 2 && isArray(result) && result.length === 0;
    }());
    defineProperties(ArrayPrototype, {
        // Safari 5.0 bug where .splice() returns undefined
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) {
                return [];
            } else {
                return array_splice.apply(this, arguments);
            }
        }
    }, !spliceNoopReturnsEmptyArray);

    var spliceWorksWithEmptyObject = (function () {
        var obj = {};
        ArrayPrototype.splice.call(obj, 0, 0, 1);
        return obj.length === 1;
    }());
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) {
                return [];
            }
            var args = arguments;
            this.length = max(ES.ToInteger(this.length), 0);
            if (arguments.length > 0 && typeof deleteCount !== 'number') {
                args = arraySlice(arguments);
                if (args.length < 2) {
                    pushCall(args, this.length - start);
                } else {
                    args[1] = ES.ToInteger(deleteCount);
                }
            }
            return array_splice.apply(this, args);
        }
    }, !spliceWorksWithEmptyObject);
    var spliceWorksWithLargeSparseArrays = (function () {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
        var arr = new $Array(1e5);
        // note: the index MUST be 8 or larger or the test will false pass
        arr[8] = 'x';
        arr.splice(1, 1);
        // note: this test must be defined *after* the indexOf shim
        // per https://github.com/es-shims/es5-shim/issues/313
        return arr.indexOf('x') === 7;
    }());
    var spliceWorksWithSmallSparseArrays = (function () {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Opera 12.15 breaks on this, no idea why.
        var n = 256;
        var arr = [];
        arr[n] = 'a';
        arr.splice(n + 1, 0, 'b');
        return arr[n] === 'a';
    }());
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            var O = ES.ToObject(this);
            var A = [];
            var len = ES.ToUint32(O.length);
            var relativeStart = ES.ToInteger(start);
            var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
            var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

            var k = 0;
            var from;
            while (k < actualDeleteCount) {
                from = $String(actualStart + k);
                if (owns(O, from)) {
                    A[k] = O[from];
                }
                k += 1;
            }

            var items = arraySlice(arguments, 2);
            var itemCount = items.length;
            var to;
            if (itemCount < actualDeleteCount) {
                k = actualStart;
                var maxK = len - actualDeleteCount;
                while (k < maxK) {
                    from = $String(k + actualDeleteCount);
                    to = $String(k + itemCount);
                    if (owns(O, from)) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }
                    k += 1;
                }
                k = len;
                var minK = len - actualDeleteCount + itemCount;
                while (k > minK) {
                    delete O[k - 1];
                    k -= 1;
                }
            } else if (itemCount > actualDeleteCount) {
                k = len - actualDeleteCount;
                while (k > actualStart) {
                    from = $String(k + actualDeleteCount - 1);
                    to = $String(k + itemCount - 1);
                    if (owns(O, from)) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }
                    k -= 1;
                }
            }
            k = actualStart;
            for (var i = 0; i < items.length; ++i) {
                O[k] = items[i];
                k += 1;
            }
            O.length = len - actualDeleteCount + itemCount;

            return A;
        }
    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

    var originalJoin = ArrayPrototype.join;
    var hasStringJoinBug;
    try {
        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
    } catch (e) {
        hasStringJoinBug = true;
    }
    if (hasStringJoinBug) {
        defineProperties(ArrayPrototype, {
            join: function join(separator) {
                var sep = typeof separator === 'undefined' ? ',' : separator;
                return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
            }
        }, hasStringJoinBug);
    }

    var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
    if (hasJoinUndefinedBug) {
        defineProperties(ArrayPrototype, {
            join: function join(separator) {
                var sep = typeof separator === 'undefined' ? ',' : separator;
                return originalJoin.call(this, sep);
            }
        }, hasJoinUndefinedBug);
    }

    var pushShim = function push(item) {
        var O = ES.ToObject(this);
        var n = ES.ToUint32(O.length);
        var i = 0;
        while (i < arguments.length) {
            O[n + i] = arguments[i];
            i += 1;
        }
        O.length = n + i;
        return n + i;
    };

    var pushIsNotGeneric = (function () {
        var obj = {};
        var result = Array.prototype.push.call(obj, undefined);
        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
    }());
    defineProperties(ArrayPrototype, {
        push: function push(item) {
            if (isArray(this)) {
                return array_push.apply(this, arguments);
            }
            return pushShim.apply(this, arguments);
        }
    }, pushIsNotGeneric);

    // This fixes a very weird bug in Opera 10.6 when pushing `undefined
    var pushUndefinedIsWeird = (function () {
        var arr = [];
        var result = arr.push(undefined);
        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
    }());
    defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

    // ES5 15.2.3.14
    // http://es5.github.io/#x15.4.4.10
    // Fix boxed string bug
    defineProperties(ArrayPrototype, {
        slice: function (start, end) {
            var arr = isString(this) ? strSplit(this, '') : this;
            return arraySliceApply(arr, arguments);
        }
    }, splitString);

    var sortIgnoresNonFunctions = (function () {
        try {
            [1, 2].sort(null);
        } catch (e) {
            try {
                [1, 2].sort({});
            } catch (e2) {
                return false;
            }
        }
        return true;
    }());
    var sortThrowsOnRegex = (function () {
        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
        try {
            [1, 2].sort(/a/);
            return false;
        } catch (e) {}
        return true;
    }());
    var sortIgnoresUndefined = (function () {
        // applies in IE 8, for one.
        try {
            [1, 2].sort(undefined);
            return true;
        } catch (e) {}
        return false;
    }());
    defineProperties(ArrayPrototype, {
        sort: function sort(compareFn) {
            if (typeof compareFn === 'undefined') {
                return arraySort(this);
            }
            if (!isCallable(compareFn)) {
                throw new TypeError('Array.prototype.sort callback must be a function');
            }
            return arraySort(this, compareFn);
        }
    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

    //
    // Object
    // ======
    //

    // ES5 15.2.3.14
    // http://es5.github.com/#x15.2.3.14

    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString'); // jscs:ignore disallowQuotedKeysInObjects
    var hasProtoEnumBug = isEnum(function () {}, 'prototype');
    var hasStringEnumBug = !owns('x', '0');
    var equalsConstructorPrototype = function (o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $window: true,
        $console: true,
        $parent: true,
        $self: true,
        $frame: true,
        $frames: true,
        $frameElement: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $external: true,
        $width: true,
        $height: true,
        $top: true,
        $localStorage: true
    };
    var hasAutomationEqualityBug = (function () {
        /* globals window */
        if (typeof window === 'undefined') {
            return false;
        }
        for (var k in window) {
            try {
                if (!excludedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
                    equalsConstructorPrototype(window[k]);
                }
            } catch (e) {
                return true;
            }
        }
        return false;
    }());
    var equalsConstructorPrototypeIfNotBuggy = function (object) {
        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(object);
        }
        try {
            return equalsConstructorPrototype(object);
        } catch (e) {
            return false;
        }
    };
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var dontEnumsLength = dontEnums.length;

    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
    // can be replaced with require('is-arguments') if we ever use a build process instead
    var isStandardArguments = function isArguments(value) {
        return toStr(value) === '[object Arguments]';
    };
    var isLegacyArguments = function isArguments(value) {
        return value !== null
            && typeof value === 'object'
            && typeof value.length === 'number'
            && value.length >= 0
            && !isArray(value)
            && isCallable(value.callee);
    };
    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

    defineProperties($Object, {
        keys: function keys(object) {
            var isFn = isCallable(object);
            var isArgs = isArguments(object);
            var isObject = object !== null && typeof object === 'object';
            var isStr = isObject && isString(object);

            if (!isObject && !isFn && !isArgs) {
                throw new TypeError('Object.keys called on a non-object');
            }

            var theKeys = [];
            var skipProto = hasProtoEnumBug && isFn;
            if ((isStr && hasStringEnumBug) || isArgs) {
                for (var i = 0; i < object.length; ++i) {
                    pushCall(theKeys, $String(i));
                }
            }

            if (!isArgs) {
                for (var name in object) {
                    if (!(skipProto && name === 'prototype') && owns(object, name)) {
                        pushCall(theKeys, $String(name));
                    }
                }
            }

            if (hasDontEnumBug) {
                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                for (var j = 0; j < dontEnumsLength; j++) {
                    var dontEnum = dontEnums[j];
                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                        pushCall(theKeys, dontEnum);
                    }
                }
            }
            return theKeys;
        }
    });

    var keysWorksWithArguments = $Object.keys && (function () {
        // Safari 5.0 bug
        return $Object.keys(arguments).length === 2;
    }(1, 2));
    var keysHasArgumentsLengthBug = $Object.keys && (function () {
        var argKeys = $Object.keys(arguments);
        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
    }(1));
    var originalKeys = $Object.keys;
    defineProperties($Object, {
        keys: function keys(object) {
            if (isArguments(object)) {
                return originalKeys(arraySlice(object));
            } else {
                return originalKeys(object);
            }
        }
    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);

    //
    // Date
    // ====
    //

    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
    var aNegativeTestDate = new Date(-1509842289600292);
    var aPositiveTestDate = new Date(1449662400000);
    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
    var hasToDateStringFormatBug;
    var hasToStringFormatBug;
    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
    if (timeZoneOffset < -720) {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
        hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/).test(String(aPositiveTestDate));
    } else {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
        hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/).test(String(aPositiveTestDate));
    }

    var originalGetFullYear = call.bind(Date.prototype.getFullYear);
    var originalGetMonth = call.bind(Date.prototype.getMonth);
    var originalGetDate = call.bind(Date.prototype.getDate);
    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var daysInMonth = function daysInMonth(month, year) {
        return originalGetDate(new Date(year, month, 0));
    };

    defineProperties(Date.prototype, {
        getFullYear: function getFullYear() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            if (year < 0 && originalGetMonth(this) > 11) {
                return year + 1;
            }
            return year;
        },
        getMonth: function getMonth() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            if (year < 0 && month > 11) {
                return 0;
            }
            return month;
        },
        getDate: function getDate() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            var date = originalGetDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) {
                    return date;
                }
                var days = daysInMonth(0, year + 1);
                return (days - date) + 1;
            }
            return date;
        },
        getUTCFullYear: function getUTCFullYear() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            if (year < 0 && originalGetUTCMonth(this) > 11) {
                return year + 1;
            }
            return year;
        },
        getUTCMonth: function getUTCMonth() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            if (year < 0 && month > 11) {
                return 0;
            }
            return month;
        },
        getUTCDate: function getUTCDate() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            var date = originalGetUTCDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) {
                    return date;
                }
                var days = daysInMonth(0, year + 1);
                return (days - date) + 1;
            }
            return date;
        }
    }, hasNegativeMonthYearBug);

    defineProperties(Date.prototype, {
        toUTCString: function toUTCString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = originalGetUTCDay(this);
            var date = originalGetUTCDate(this);
            var month = originalGetUTCMonth(this);
            var year = originalGetUTCFullYear(this);
            var hour = originalGetUTCHours(this);
            var minute = originalGetUTCMinutes(this);
            var second = originalGetUTCSeconds(this);
            return dayName[day] + ', '
                + (date < 10 ? '0' + date : date) + ' '
                + monthName[month] + ' '
                + year + ' '
                + (hour < 10 ? '0' + hour : hour) + ':'
                + (minute < 10 ? '0' + minute : minute) + ':'
                + (second < 10 ? '0' + second : second) + ' GMT';
        }
    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

    // Opera 12 has `,`
    defineProperties(Date.prototype, {
        toDateString: function toDateString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            return dayName[day] + ' '
                + monthName[month] + ' '
                + (date < 10 ? '0' + date : date) + ' '
                + year;
        }
    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);

    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    if (hasNegativeMonthYearBug || hasToStringFormatBug) {
        Date.prototype.toString = function toString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            var hour = this.getHours();
            var minute = this.getMinutes();
            var second = this.getSeconds();
            var timezoneOffset = this.getTimezoneOffset();
            var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
            var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
            return dayName[day] + ' '
                + monthName[month] + ' '
                + (date < 10 ? '0' + date : date) + ' '
                + year + ' '
                + (hour < 10 ? '0' + hour : hour) + ':'
                + (minute < 10 ? '0' + minute : minute) + ':'
                + (second < 10 ? '0' + second : second) + ' GMT'
                + (timezoneOffset > 0 ? '-' : '+')
                + (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset)
                + (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
        };
        if (supportsDescriptors) {
            $Object.defineProperty(Date.prototype, 'toString', {
                configurable: true,
                enumerable: false,
                writable: true
            });
        }
    }

    // ES5 15.9.5.43
    // http://es5.github.com/#x15.9.5.43
    // This function returns a String value represent the instance in time
    // represented by this Date object. The format of the String is the Date Time
    // string format defined in 15.9.1.15. All fields are present in the String.
    // The time zone is always UTC, denoted by the suffix Z. If the time value of
    // this object is not a finite Number a RangeError exception is thrown.
    var negativeDate = -62198755200000;
    var negativeYearString = '-000001';
    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1; // eslint-disable-line max-len
    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

    var getTime = call.bind(Date.prototype.getTime);

    defineProperties(Date.prototype, {
        toISOString: function toISOString() {
            if (!isFinite(this) || !isFinite(getTime(this))) {
                // Adope Photoshop requires the second check.
                throw new RangeError('Date.prototype.toISOString called on non-finite value.');
            }

            var year = originalGetUTCFullYear(this);

            var month = originalGetUTCMonth(this);
            // see https://github.com/es-shims/es5-shim/issues/111
            year += Math.floor(month / 12);
            month = ((month % 12) + 12) % 12;

            // the date time string format is specified in 15.9.1.15.
            var result = [
                month + 1,
                originalGetUTCDate(this),
                originalGetUTCHours(this),
                originalGetUTCMinutes(this),
                originalGetUTCSeconds(this)
            ];
            year = (
                (year < 0 ? '-' : (year > 9999 ? '+' : ''))
                + strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
            );

            for (var i = 0; i < result.length; ++i) {
                // pad months, days, hours, minutes, and seconds to have two digits.
                result[i] = strSlice('00' + result[i], -2);
            }
            // pad milliseconds to have three digits.
            return (
                year + '-' + arraySlice(result, 0, 2).join('-')
                + 'T' + arraySlice(result, 2).join(':') + '.'
                + strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'
            );
        }
    }, hasNegativeDateBug || hasSafari51DateBug);

    // ES5 15.9.5.44
    // http://es5.github.com/#x15.9.5.44
    // This function provides a String representation of a Date object for use by
    // JSON.stringify (15.12.3).
    var dateToJSONIsSupported = (function () {
        try {
            return Date.prototype.toJSON
                && new Date(NaN).toJSON() === null
                && new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1
                && Date.prototype.toJSON.call({ // generic
                    toISOString: function () { return true; }
                });
        } catch (e) {
            return false;
        }
    }());
    if (!dateToJSONIsSupported) {
        Date.prototype.toJSON = function toJSON(key) {
            // When the toJSON method is called with argument key, the following
            // steps are taken:

            // 1.  Let O be the result of calling ToObject, giving it the this
            // value as its argument.
            // 2. Let tv be ES.ToPrimitive(O, hint Number).
            var O = $Object(this);
            var tv = ES.ToPrimitive(O);
            // 3. If tv is a Number and is not finite, return null.
            if (typeof tv === 'number' && !isFinite(tv)) {
                return null;
            }
            // 4. Let toISO be the result of calling the [[Get]] internal method of
            // O with argument "toISOString".
            var toISO = O.toISOString;
            // 5. If IsCallable(toISO) is false, throw a TypeError exception.
            if (!isCallable(toISO)) {
                throw new TypeError('toISOString property is not callable');
            }
            // 6. Return the result of calling the [[Call]] internal method of
            //  toISO with O as the this value and an empty argument list.
            return toISO.call(O);

            // NOTE 1 The argument is ignored.

            // NOTE 2 The toJSON function is intentionally generic; it does not
            // require that its this value be a Date object. Therefore, it can be
            // transferred to other kinds of objects for use as a method. However,
            // it does require that any such object have a toISOString method. An
            // object is free to use the argument key to filter its
            // stringification.
        };
    }

    // ES5 15.9.4.2
    // http://es5.github.com/#x15.9.4.2
    // based on work shared by Daniel Friesen (dantman)
    // http://gist.github.com/303249
    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
        // XXX global assignment won't work in embeddings that use
        // an alternate object for the context.
        /* global Date: true */
        var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
        // eslint-disable-next-line no-implicit-globals, no-global-assign
        Date = (function (NativeDate) {
            // Date.length === 7
            var DateShim = function Date(Y, M, D, h, m, s, ms) {
                var length = arguments.length;
                var date;
                if (this instanceof NativeDate) {
                    var seconds = s;
                    var millis = ms;
                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
                        // work around a Safari 8/9 bug where it treats the seconds as signed
                        var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                        var sToShift = Math.floor(msToShift / 1e3);
                        seconds += sToShift;
                        millis -= sToShift * 1e3;
                    }
                    date = length === 1 && $String(Y) === Y // isString(Y)
                        // We explicitly pass it through parse:
                        ? new NativeDate(DateShim.parse(Y))
                        // We have to manually make calls depending on argument
                        // length here
                        : length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis)
                            : length >= 6 ? new NativeDate(Y, M, D, h, m, seconds)
                                : length >= 5 ? new NativeDate(Y, M, D, h, m)
                                    : length >= 4 ? new NativeDate(Y, M, D, h)
                                        : length >= 3 ? new NativeDate(Y, M, D)
                                            : length >= 2 ? new NativeDate(Y, M)
                                                : length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y)
                                                    : new NativeDate();
                } else {
                    date = NativeDate.apply(this, arguments);
                }
                if (!isPrimitive(date)) {
                    // Prevent mixups with unfixed Date object
                    defineProperties(date, { constructor: DateShim }, true);
                }
                return date;
            };

            // 15.9.1.15 Date Time String Format.
            var isoDateExpression = new RegExp('^'
                + '(\\d{4}|[+-]\\d{6})' // four-digit year capture or sign + 6-digit extended year
                + '(?:-(\\d{2})' // optional month capture
                + '(?:-(\\d{2})' // optional day capture
                + '(?:' // capture hours:minutes:seconds.milliseconds
                    + 'T(\\d{2})' // hours capture
                    + ':(\\d{2})' // minutes capture
                    + '(?:' // optional :seconds.milliseconds
                        + ':(\\d{2})' // seconds capture
                        + '(?:(\\.\\d{1,}))?' // milliseconds capture
                    + ')?'
                + '(' // capture UTC offset component
                    + 'Z|' // UTC capture
                    + '(?:' // offset specifier +/-hours:minutes
                        + '([-+])' // sign capture
                        + '(\\d{2})' // hours offset capture
                        + ':(\\d{2})' // minutes offset capture
                    + ')'
                + ')?)?)?)?'
            + '$');

            var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

            var dayFromMonth = function dayFromMonth(year, month) {
                var t = month > 1 ? 1 : 0;
                return (
                    months[month]
                    + Math.floor((year - 1969 + t) / 4)
                    - Math.floor((year - 1901 + t) / 100)
                    + Math.floor((year - 1601 + t) / 400)
                    + (365 * (year - 1970))
                );
            };

            var toUTC = function toUTC(t) {
                var s = 0;
                var ms = t;
                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
                    // work around a Safari 8/9 bug where it treats the seconds as signed
                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                    var sToShift = Math.floor(msToShift / 1e3);
                    s += sToShift;
                    ms -= sToShift * 1e3;
                }
                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
            };

            // Copy any custom methods a 3rd party library may have added
            for (var key in NativeDate) {
                if (owns(NativeDate, key)) {
                    DateShim[key] = NativeDate[key];
                }
            }

            // Copy "native" methods explicitly; they may be non-enumerable
            defineProperties(DateShim, {
                now: NativeDate.now,
                UTC: NativeDate.UTC
            }, true);
            DateShim.prototype = NativeDate.prototype;
            defineProperties(DateShim.prototype, { constructor: DateShim }, true);

            // Upgrade Date.parse to handle simplified ISO 8601 strings
            var parseShim = function parse(string) {
                var match = isoDateExpression.exec(string);
                if (match) {
                    // parse months, days, hours, minutes, seconds, and milliseconds
                    // provide default values if necessary
                    // parse the UTC offset component
                    var year = $Number(match[1]),
                        month = $Number(match[2] || 1) - 1,
                        day = $Number(match[3] || 1) - 1,
                        hour = $Number(match[4] || 0),
                        minute = $Number(match[5] || 0),
                        second = $Number(match[6] || 0),
                        millisecond = Math.floor($Number(match[7] || 0) * 1000),
                        // When time zone is missed, local offset should be used
                        // (ES 5.1 bug)
                        // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                        isLocalTime = Boolean(match[4] && !match[8]),
                        signOffset = match[9] === '-' ? 1 : -1,
                        hourOffset = $Number(match[10] || 0),
                        minuteOffset = $Number(match[11] || 0),
                        result;
                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
                    if (
                        hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25)
                        && minute < 60 && second < 60 && millisecond < 1000
                        && month > -1 && month < 12 && hourOffset < 24
                        && minuteOffset < 60 // detect invalid offsets
                        && day > -1
                        && day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
                    ) {
                        result = (
                            ((dayFromMonth(year, month) + day) * 24)
                            + hour
                            + (hourOffset * signOffset)
                        ) * 60;
                        result = ((
                            ((result + minute + (minuteOffset * signOffset)) * 60)
                            + second
                        ) * 1000) + millisecond;
                        if (isLocalTime) {
                            result = toUTC(result);
                        }
                        if (-8.64e15 <= result && result <= 8.64e15) {
                            return result;
                        }
                    }
                    return NaN;
                }
                return NativeDate.parse.apply(this, arguments);
            };
            defineProperties(DateShim, { parse: parseShim });

            return DateShim;
        }(Date));
        /* global Date: false */
    }

    // ES5 15.9.4.4
    // http://es5.github.com/#x15.9.4.4
    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }

    //
    // Number
    // ======
    //

    // ES5.1 15.7.4.5
    // http://es5.github.com/#x15.7.4.5
    var hasToFixedBugs = NumberPrototype.toFixed && (
        (0.00008).toFixed(3) !== '0.000'
        || (0.9).toFixed(0) !== '1'
        || (1.255).toFixed(2) !== '1.25'
        || (1000000000000000128).toFixed(0) !== '1000000000000000128'
    );

    var toFixedHelpers = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function multiply(n, c) {
            var i = -1;
            var c2 = c;
            while (++i < toFixedHelpers.size) {
                c2 += n * toFixedHelpers.data[i];
                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
                c2 = Math.floor(c2 / toFixedHelpers.base);
            }
        },
        divide: function divide(n) {
            var i = toFixedHelpers.size;
            var c = 0;
            while (--i >= 0) {
                c += toFixedHelpers.data[i];
                toFixedHelpers.data[i] = Math.floor(c / n);
                c = (c % n) * toFixedHelpers.base;
            }
        },
        numToString: function numToString() {
            var i = toFixedHelpers.size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
                    var t = $String(toFixedHelpers.data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += strSlice('0000000', 0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        },
        pow: function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        },
        log: function log(x) {
            var n = 0;
            var x2 = x;
            while (x2 >= 4096) {
                n += 12;
                x2 /= 4096;
            }
            while (x2 >= 2) {
                n += 1;
                x2 /= 2;
            }
            return n;
        }
    };

    var toFixedShim = function toFixed(fractionDigits) {
        var f, x, s, m, e, z, j, k;

        // Test for NaN and round fractionDigits down
        f = $Number(fractionDigits);
        f = isActualNaN(f) ? 0 : Math.floor(f);

        if (f < 0 || f > 20) {
            throw new RangeError('Number.toFixed called with invalid number of decimals');
        }

        x = $Number(this);

        if (isActualNaN(x)) {
            return 'NaN';
        }

        // If it is too big or small, return the string value of the number
        if (x <= -1e21 || x >= 1e21) {
            return $String(x);
        }

        s = '';

        if (x < 0) {
            s = '-';
            x = -x;
        }

        m = '0';

        if (x > 1e-21) {
            // 1e-21 < x < 1e21
            // -70 < log2(x) < 70
            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
            z *= 0x10000000000000; // Math.pow(2, 52);
            e = 52 - e;

            // -18 < e < 122
            // x = z / 2 ^ e
            if (e > 0) {
                toFixedHelpers.multiply(0, z);
                j = f;

                while (j >= 7) {
                    toFixedHelpers.multiply(1e7, 0);
                    j -= 7;
                }

                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
                j = e - 1;

                while (j >= 23) {
                    toFixedHelpers.divide(1 << 23);
                    j -= 23;
                }

                toFixedHelpers.divide(1 << j);
                toFixedHelpers.multiply(1, 1);
                toFixedHelpers.divide(2);
                m = toFixedHelpers.numToString();
            } else {
                toFixedHelpers.multiply(0, z);
                toFixedHelpers.multiply(1 << (-e), 0);
                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
            }
        }

        if (f > 0) {
            k = m.length;

            if (k <= f) {
                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
            } else {
                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
            }
        } else {
            m = s + m;
        }

        return m;
    };
    defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

    var hasToPrecisionUndefinedBug = (function () {
        try {
            return 1.0.toPrecision(undefined) === '1';
        } catch (e) {
            return true;
        }
    }());
    var originalToPrecision = NumberPrototype.toPrecision;
    defineProperties(NumberPrototype, {
        toPrecision: function toPrecision(precision) {
            return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
        }
    }, hasToPrecisionUndefinedBug);

    //
    // String
    // ======
    //

    // ES5 15.5.4.14
    // http://es5.github.com/#x15.5.4.14

    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
    // Many browsers do not split properly with regular expressions or they
    // do not perform the split correctly under obscure conditions.
    // See http://blog.stevenlevithan.com/archives/cross-browser-split
    // I've tested in many browsers and this seems to cover the deviant ones:
    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
    //       [undefined, "t", undefined, "e", ...]
    //    ''.split(/.?/) should be [], not [""]
    //    '.'.split(/()()/) should be ["."], not ["", "", "."]

    if (
        'ab'.split(/(?:ab)*/).length !== 2
        || '.'.split(/(.?)(.?)/).length !== 4
        || 'tesst'.split(/(s)*/)[1] === 't'
        || 'test'.split(/(?:)/, -1).length !== 4
        || ''.split(/.?/).length
        || '.'.split(/()()/).length > 1
    ) {
        (function () {
            var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
            var maxSafe32BitInt = Math.pow(2, 32) - 1;

            StringPrototype.split = function (separator, limit) {
                var string = String(this);
                if (typeof separator === 'undefined' && limit === 0) {
                    return [];
                }

                // If `separator` is not a regex, use native split
                if (!isRegex(separator)) {
                    return strSplit(this, separator, limit);
                }

                var output = [];
                var flags = (separator.ignoreCase ? 'i' : '')
                            + (separator.multiline ? 'm' : '')
                            + (separator.unicode ? 'u' : '') // in ES6
                            + (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                    lastLastIndex = 0,
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    separator2, match, lastIndex, lastLength;
                var separatorCopy = new RegExp(separator.source, flags + 'g');
                if (!compliantExecNpcg) {
                    // Doesn't need flags gy, but they don't hurt
                    separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
                }
                /* Values for `limit`, per the spec:
                 * If undefined: 4294967295 // maxSafe32BitInt
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
                 * If other: Type-convert, then use the above rules
                 */
                var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
                match = separatorCopy.exec(string);
                while (match) {
                    // `separatorCopy.lastIndex` is not reliable cross-browser
                    lastIndex = match.index + match[0].length;
                    if (lastIndex > lastLastIndex) {
                        pushCall(output, strSlice(string, lastLastIndex, match.index));
                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
                        // nonparticipating capturing groups
                        if (!compliantExecNpcg && match.length > 1) {
                            /* eslint-disable no-loop-func */
                            match[0].replace(separator2, function () {
                                for (var i = 1; i < arguments.length - 2; i++) {
                                    if (typeof arguments[i] === 'undefined') {
                                        match[i] = void 0;
                                    }
                                }
                            });
                            /* eslint-enable no-loop-func */
                        }
                        if (match.length > 1 && match.index < string.length) {
                            array_push.apply(output, arraySlice(match, 1));
                        }
                        lastLength = match[0].length;
                        lastLastIndex = lastIndex;
                        if (output.length >= splitLimit) {
                            break;
                        }
                    }
                    if (separatorCopy.lastIndex === match.index) {
                        separatorCopy.lastIndex++; // Avoid an infinite loop
                    }
                    match = separatorCopy.exec(string);
                }
                if (lastLastIndex === string.length) {
                    if (lastLength || !separatorCopy.test('')) {
                        pushCall(output, '');
                    }
                } else {
                    pushCall(output, strSlice(string, lastLastIndex));
                }
                return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
            };
        }());

    // [bugfix, chrome]
    // If separator is undefined, then the result array contains just one String,
    // which is the this value (converted to a String). If limit is not undefined,
    // then the output array is truncated so that it contains no more than limit
    // elements.
    // "0".split(undefined, 0) -> []
    } else if ('0'.split(void 0, 0).length) {
        StringPrototype.split = function split(separator, limit) {
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }
            return strSplit(this, separator, limit);
        };
    }

    var str_replace = StringPrototype.replace;
    var replaceReportsGroupsCorrectly = (function () {
        var groups = [];
        'x'.replace(/x(.)?/g, function (match, group) {
            pushCall(groups, group);
        });
        return groups.length === 1 && typeof groups[0] === 'undefined';
    }());

    if (!replaceReportsGroupsCorrectly) {
        StringPrototype.replace = function replace(searchValue, replaceValue) {
            var isFn = isCallable(replaceValue);
            var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
            if (!isFn || !hasCapturingGroups) {
                return str_replace.call(this, searchValue, replaceValue);
            } else {
                var wrappedReplaceValue = function (match) {
                    var length = arguments.length;
                    var originalLastIndex = searchValue.lastIndex;
                    searchValue.lastIndex = 0;
                    var args = searchValue.exec(match) || [];
                    searchValue.lastIndex = originalLastIndex;
                    pushCall(args, arguments[length - 2], arguments[length - 1]);
                    return replaceValue.apply(this, args);
                };
                return str_replace.call(this, searchValue, wrappedReplaceValue);
            }
        };
    }

    // ECMA-262, 3rd B.2.3
    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
    // non-normative section suggesting uniform semantics and it should be
    // normalized across all browsers
    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
    var string_substr = StringPrototype.substr;
    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
    defineProperties(StringPrototype, {
        substr: function substr(start, length) {
            var normalizedStart = start;
            if (start < 0) {
                normalizedStart = max(this.length + start, 0);
            }
            return string_substr.call(this, normalizedStart, length);
        }
    }, hasNegativeSubstrBug);

    // ES5 15.5.4.20
    // whitespace from: http://es5.github.io/#x15.5.4.20
    var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003'
        + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028'
        + '\u2029\uFEFF';
    var zeroWidth = '\u200b';
    var wsRegexChars = '[' + ws + ']';
    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
    var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
    defineProperties(StringPrototype, {
        // http://blog.stevenlevithan.com/archives/faster-trim-javascript
        // http://perfectionkills.com/whitespace-deviations/
        trim: function trim() {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
        }
    }, hasTrimWhitespaceBug);
    var trim = call.bind(String.prototype.trim);

    var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            var S = $String(this);
            var searchStr = $String(searchString);
            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
            var start = min(max(pos, 0), S.length);
            var searchLen = searchStr.length;
            var k = start + searchLen;
            while (k > 0) {
                k = max(0, k - searchLen);
                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
                if (index !== -1) {
                    return k + index;
                }
            }
            return -1;
        }
    }, hasLastIndexBug);

    var originalLastIndexOf = StringPrototype.lastIndexOf;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            return originalLastIndexOf.apply(this, arguments);
        }
    }, StringPrototype.lastIndexOf.length !== 1);

    // ES-5 15.1.2.2
    // eslint-disable-next-line radix
    if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
        /* global parseInt: true */
        parseInt = (function (origParseInt) {
            var hexRegex = /^[-+]?0[xX]/;
            return function parseInt(str, radix) {
                if (typeof str === 'symbol') {
                    // handle Symbols in node 8.3/8.4
                    // eslint-disable-next-line no-implicit-coercion, no-unused-expressions
                    '' + str; // jscs:ignore disallowImplicitTypeConversion
                }

                var string = trim(String(str));
                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
                return origParseInt(string, defaultedRadix);
            };
        }(parseInt));
    }

    // https://es5.github.io/#x15.1.2.3
    if (1 / parseFloat('-0') !== -Infinity) {
        /* global parseFloat: true */
        parseFloat = (function (origParseFloat) {
            return function parseFloat(string) {
                var inputString = trim(String(string));
                var result = origParseFloat(inputString);
                return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
            };
        }(parseFloat));
    }

    if (String(new RangeError('test')) !== 'RangeError: test') {
        var errorToStringShim = function toString() {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            var name = this.name;
            if (typeof name === 'undefined') {
                name = 'Error';
            } else if (typeof name !== 'string') {
                name = $String(name);
            }
            var msg = this.message;
            if (typeof msg === 'undefined') {
                msg = '';
            } else if (typeof msg !== 'string') {
                msg = $String(msg);
            }
            if (!name) {
                return msg;
            }
            if (!msg) {
                return name;
            }
            return name + ': ' + msg;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        Error.prototype.toString = errorToStringShim;
    }

    if (supportsDescriptors) {
        var ensureNonEnumerable = function (obj, prop) {
            if (isEnum(obj, prop)) {
                var desc = Object.getOwnPropertyDescriptor(obj, prop);
                if (desc.configurable) {
                    desc.enumerable = false;
                    Object.defineProperty(obj, prop, desc);
                }
            }
        };
        ensureNonEnumerable(Error.prototype, 'message');
        if (Error.prototype.message !== '') {
            Error.prototype.message = '';
        }
        ensureNonEnumerable(Error.prototype, 'name');
    }

    if (String(/a/mig) !== '/a/gim') {
        var regexToString = function toString() {
            var str = '/' + this.source + '/';
            if (this.global) {
                str += 'g';
            }
            if (this.ignoreCase) {
                str += 'i';
            }
            if (this.multiline) {
                str += 'm';
            }
            return str;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        RegExp.prototype.toString = regexToString;
    }
}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

    var call = Function.call;
    var prototypeOfObject = Object.prototype;
    var owns = call.bind(prototypeOfObject.hasOwnProperty);
    var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
    var toStr = call.bind(prototypeOfObject.toString);

    // If JS engine supports accessors creating shortcuts.
    var defineGetter;
    var defineSetter;
    var lookupGetter;
    var lookupSetter;
    var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
    if (supportsAccessors) {
        /* eslint-disable no-underscore-dangle, no-restricted-properties */
        defineGetter = call.bind(prototypeOfObject.__defineGetter__);
        defineSetter = call.bind(prototypeOfObject.__defineSetter__);
        lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
        lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
        /* eslint-enable no-underscore-dangle, no-restricted-properties */
    }

    var isPrimitive = function isPrimitive(o) {
        return o == null || (typeof o !== 'object' && typeof o !== 'function');
    };

    // ES5 15.2.3.2
    // http://es5.github.com/#x15.2.3.2
    if (!Object.getPrototypeOf) {
        // https://github.com/es-shims/es5-shim/issues#issue/2
        // http://ejohn.org/blog/objectgetprototypeof/
        // recommended by fschaefer on github
        //
        // sure, and webreflection says ^_^
        // ... this will nerever possibly return null
        // ... Opera Mini breaks here with infinite loops
        Object.getPrototypeOf = function getPrototypeOf(object) {
            // eslint-disable-next-line no-proto
            var proto = object.__proto__;
            if (proto || proto === null) {
                return proto;
            } else if (toStr(object.constructor) === '[object Function]') {
                return object.constructor.prototype;
            } else if (object instanceof Object) {
                return prototypeOfObject;
            } else {
                // Correctly return null for Objects created with `Object.create(null)`
                // (shammed or native) or `{ __proto__: null}`.  Also returns null for
                // cross-realm objects on browsers that lack `__proto__` support (like
                // IE <11), but that's the best we can do.
                return null;
            }
        };
    }

    // ES5 15.2.3.3
    // http://es5.github.com/#x15.2.3.3

    var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
        try {
            object.sentinel = 0;
            return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
        } catch (exception) {
            return false;
        }
    };

    // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
    if (Object.defineProperty) {
        var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
        var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined'
            || doesGetOwnPropertyDescriptorWork(document.createElement('div'));
        if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
            var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
        }
    }

    if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
        var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

        /* eslint-disable no-proto */
        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            if (isPrimitive(object)) {
                throw new TypeError(ERR_NON_OBJECT + object);
            }

            // make a valiant attempt to use the real getOwnPropertyDescriptor
            // for I8's DOM elements.
            if (getOwnPropertyDescriptorFallback) {
                try {
                    return getOwnPropertyDescriptorFallback.call(Object, object, property);
                } catch (exception) {
                    // try the shim if the real one doesn't work
                }
            }

            var descriptor;

            // If object does not owns property return undefined immediately.
            if (!owns(object, property)) {
                return descriptor;
            }

            // If object has a property then it's for sure `configurable`, and
            // probably `enumerable`. Detect enumerability though.
            descriptor = {
                enumerable: isEnumerable(object, property),
                configurable: true
            };

            // If JS engine supports accessor properties then property may be a
            // getter or setter.
            if (supportsAccessors) {
                // Unfortunately `__lookupGetter__` will return a getter even
                // if object has own non getter property along with a same named
                // inherited getter. To avoid misbehavior we temporary remove
                // `__proto__` so that `__lookupGetter__` will return getter only
                // if it's owned by an object.
                var prototype = object.__proto__;
                var notPrototypeOfObject = object !== prototypeOfObject;
                // avoid recursion problem, breaking in Opera Mini when
                // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
                // or any other Object.prototype accessor
                if (notPrototypeOfObject) {
                    object.__proto__ = prototypeOfObject;
                }

                var getter = lookupGetter(object, property);
                var setter = lookupSetter(object, property);

                if (notPrototypeOfObject) {
                    // Once we have getter and setter we can put values back.
                    object.__proto__ = prototype;
                }

                if (getter || setter) {
                    if (getter) {
                        descriptor.get = getter;
                    }
                    if (setter) {
                        descriptor.set = setter;
                    }
                    // If it was accessor property we're done and return here
                    // in order to avoid adding `value` to the descriptor.
                    return descriptor;
                }
            }

            // If we got this far we know that object has an own property that is
            // not an accessor so we set it as a value and return descriptor.
            descriptor.value = object[property];
            descriptor.writable = true;
            return descriptor;
        };
        /* eslint-enable no-proto */
    }

    // ES5 15.2.3.4
    // http://es5.github.com/#x15.2.3.4
    if (!Object.getOwnPropertyNames) {
        Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
            return Object.keys(object);
        };
    }

    // ES5 15.2.3.5
    // http://es5.github.com/#x15.2.3.5
    if (!Object.create) {

        // Contributed by Brandon Benvie, October, 2012
        var createEmpty;
        var supportsProto = !({ __proto__: null } instanceof Object);
        // the following produces false positives
        // in Opera Mini => not a reliable check
        // Object.prototype.__proto__ === null

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        /* global ActiveXObject */
        var shouldUseActiveX = function shouldUseActiveX() {
            // return early if document.domain not set
            if (!document.domain) {
                return false;
            }

            try {
                return !!new ActiveXObject('htmlfile');
            } catch (exception) {
                return false;
            }
        };

        // This supports IE8 when document.domain is used
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        var getEmptyViaActiveX = function getEmptyViaActiveX() {
            var empty;
            var xDoc;

            xDoc = new ActiveXObject('htmlfile');

            var script = 'script';
            xDoc.write('<' + script + '></' + script + '>');
            xDoc.close();

            empty = xDoc.parentWindow.Object.prototype;
            xDoc = null;

            return empty;
        };

        // The original implementation using an iframe
        // before the activex approach was added
        // see https://github.com/es-shims/es5-shim/issues/150
        var getEmptyViaIFrame = function getEmptyViaIFrame() {
            var iframe = document.createElement('iframe');
            var parent = document.body || document.documentElement;
            var empty;

            iframe.style.display = 'none';
            parent.appendChild(iframe);
            // eslint-disable-next-line no-script-url
            iframe.src = 'javascript:';

            empty = iframe.contentWindow.Object.prototype;
            parent.removeChild(iframe);
            iframe = null;

            return empty;
        };

        /* global document */
        if (supportsProto || typeof document === 'undefined') {
            createEmpty = function () {
                return { __proto__: null };
            };
        } else {
            // In old IE __proto__ can't be used to manually set `null`, nor does
            // any other method exist to make an object that inherits from nothing,
            // aside from Object.prototype itself. Instead, create a new global
            // object and *steal* its Object.prototype and strip it bare. This is
            // used as the prototype to create nullary objects.
            createEmpty = function () {
                // Determine which approach to use
                // see https://github.com/es-shims/es5-shim/issues/150
                var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

                delete empty.constructor;
                delete empty.hasOwnProperty;
                delete empty.propertyIsEnumerable;
                delete empty.isPrototypeOf;
                delete empty.toLocaleString;
                delete empty.toString;
                delete empty.valueOf;

                var Empty = function Empty() {};
                Empty.prototype = empty;
                // short-circuit future calls
                createEmpty = function () {
                    return new Empty();
                };
                return new Empty();
            };
        }

        Object.create = function create(prototype, properties) {

            var object;
            var Type = function Type() {}; // An empty constructor.

            if (prototype === null) {
                object = createEmpty();
            } else {
                if (prototype !== null && isPrimitive(prototype)) {
                    // In the native implementation `parent` can be `null`
                    // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
                    // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
                    // like they are in modern browsers. Using `Object.create` on DOM elements
                    // is...err...probably inappropriate, but the native version allows for it.
                    throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
                }
                Type.prototype = prototype;
                object = new Type();
                // IE has no built-in implementation of `Object.getPrototypeOf`
                // neither `__proto__`, but this manually setting `__proto__` will
                // guarantee that `Object.getPrototypeOf` will work as expected with
                // objects created using `Object.create`
                // eslint-disable-next-line no-proto
                object.__proto__ = prototype;
            }

            if (properties !== void 0) {
                Object.defineProperties(object, properties);
            }

            return object;
        };
    }

    // ES5 15.2.3.6
    // http://es5.github.com/#x15.2.3.6

    // Patch for WebKit and IE8 standard mode
    // Designed by hax <hax.github.com>
    // related issue: https://github.com/es-shims/es5-shim/issues#issue/5
    // IE8 Reference:
    //     http://msdn.microsoft.com/en-us/library/dd282900.aspx
    //     http://msdn.microsoft.com/en-us/library/dd229916.aspx
    // WebKit Bugs:
    //     https://bugs.webkit.org/show_bug.cgi?id=36423

    var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
        try {
            Object.defineProperty(object, 'sentinel', {});
            return 'sentinel' in object;
        } catch (exception) {
            return false;
        }
    };

    // check whether defineProperty works if it's given. Otherwise,
    // shim partially.
    if (Object.defineProperty) {
        var definePropertyWorksOnObject = doesDefinePropertyWork({});
        var definePropertyWorksOnDom = typeof document === 'undefined'
            || doesDefinePropertyWork(document.createElement('div'));
        if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
            var definePropertyFallback = Object.defineProperty,
                definePropertiesFallback = Object.defineProperties;
        }
    }

    if (!Object.defineProperty || definePropertyFallback) {
        var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
        var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
        var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

        Object.defineProperty = function defineProperty(object, property, descriptor) {
            if (isPrimitive(object)) {
                throw new TypeError(ERR_NON_OBJECT_TARGET + object);
            }
            if (isPrimitive(descriptor)) {
                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
            }
            // make a valiant attempt to use the real defineProperty
            // for I8's DOM elements.
            if (definePropertyFallback) {
                try {
                    return definePropertyFallback.call(Object, object, property, descriptor);
                } catch (exception) {
                    // try the shim if the real one doesn't work
                }
            }

            // If it's a data property.
            if ('value' in descriptor) {
                // fail silently if 'writable', 'enumerable', or 'configurable'
                // are requested but not supported
                /*
                // alternate approach:
                if ( // can't implement these features; allow false but not true
                    ('writable' in descriptor && !descriptor.writable) ||
                    ('enumerable' in descriptor && !descriptor.enumerable) ||
                    ('configurable' in descriptor && !descriptor.configurable)
                ))
                    throw new RangeError(
                        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                    );
                */

                if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
                    // As accessors are supported only on engines implementing
                    // `__proto__` we can safely override `__proto__` while defining
                    // a property to make sure that we don't hit an inherited
                    // accessor.
                    /* eslint-disable no-proto */
                    var prototype = object.__proto__;
                    object.__proto__ = prototypeOfObject;
                    // Deleting a property anyway since getter / setter may be
                    // defined on object itself.
                    delete object[property];
                    object[property] = descriptor.value;
                    // Setting original `__proto__` back now.
                    object.__proto__ = prototype;
                    /* eslint-enable no-proto */
                } else {
                    object[property] = descriptor.value;
                }
            } else {
                var hasGetter = 'get' in descriptor;
                var hasSetter = 'set' in descriptor;
                if (!supportsAccessors && (hasGetter || hasSetter)) {
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                }
                // If we got that far then getters and setters can be defined !!
                if (hasGetter) {
                    defineGetter(object, property, descriptor.get);
                }
                if (hasSetter) {
                    defineSetter(object, property, descriptor.set);
                }
            }
            return object;
        };
    }

    // ES5 15.2.3.7
    // http://es5.github.com/#x15.2.3.7
    if (!Object.defineProperties || definePropertiesFallback) {
        Object.defineProperties = function defineProperties(object, properties) {
            // make a valiant attempt to use the real defineProperties
            if (definePropertiesFallback) {
                try {
                    return definePropertiesFallback.call(Object, object, properties);
                } catch (exception) {
                    // try the shim if the real one doesn't work
                }
            }

            Object.keys(properties).forEach(function (property) {
                if (property !== '__proto__') {
                    Object.defineProperty(object, property, properties[property]);
                }
            });
            return object;
        };
    }

    // ES5 15.2.3.8
    // http://es5.github.com/#x15.2.3.8
    if (!Object.seal) {
        Object.seal = function seal(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.seal can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }

    // ES5 15.2.3.9
    // http://es5.github.com/#x15.2.3.9
    if (!Object.freeze) {
        Object.freeze = function freeze(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.freeze can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }

    // detect a Rhino bug and patch it
    try {
        Object.freeze(function () {});
    } catch (exception) {
        Object.freeze = (function (freezeObject) {
            return function freeze(object) {
                if (typeof object === 'function') {
                    return object;
                } else {
                    return freezeObject(object);
                }
            };
        }(Object.freeze));
    }

    // ES5 15.2.3.10
    // http://es5.github.com/#x15.2.3.10
    if (!Object.preventExtensions) {
        Object.preventExtensions = function preventExtensions(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.preventExtensions can only be called on Objects.');
            }
            // this is misleading and breaks feature-detection, but
            // allows "securable" code to "gracefully" degrade to working
            // but insecure code.
            return object;
        };
    }

    // ES5 15.2.3.11
    // http://es5.github.com/#x15.2.3.11
    if (!Object.isSealed) {
        Object.isSealed = function isSealed(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.isSealed can only be called on Objects.');
            }
            return false;
        };
    }

    // ES5 15.2.3.12
    // http://es5.github.com/#x15.2.3.12
    if (!Object.isFrozen) {
        Object.isFrozen = function isFrozen(object) {
            if (Object(object) !== object) {
                throw new TypeError('Object.isFrozen can only be called on Objects.');
            }
            return false;
        };
    }

    // ES5 15.2.3.13
    // http://es5.github.com/#x15.2.3.13
    if (!Object.isExtensible) {
        Object.isExtensible = function isExtensible(object) {
            // 1. If Type(O) is not Object throw a TypeError exception.
            if (Object(object) !== object) {
                throw new TypeError('Object.isExtensible can only be called on Objects.');
            }
            // 2. Return the Boolean value of the [[Extensible]] internal property of O.
            var name = '';
            while (owns(object, name)) {
                name += '?';
            }
            object[name] = true;
            var returnValue = owns(object, name);
            delete object[name];
            return returnValue;
        };
    }

}));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  if (!global.console) {
    global.console = {};
  }
  var con = global.console;
  var prop, method;
  var dummy = function() {};
  var properties = ['memory'];
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = {};
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
  // Using `this` for web workers & supports Browserify / Webpack.
})(typeof window === 'undefined' ? this : window);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("test");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzBhNzNmMDhmYTExYmVhMjk1YmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VzNS1zaGltL2VzNS1zaGltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczUtc2hpbS9lczUtc2hhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc29sZS1wb2x5ZmlsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Njc3MvcHVibGljLnNjc3M/YzcxZCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLElBQUksaUJBQWlCO0FBQy9CLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QjtBQUNBLDBCQUEwQjs7QUFFMUI7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUM7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJLQUEySyxNQUFNLGlDQUFpQyxxREFBcUQscUVBQXFFLG1FQUFtRSxFQUFFLFNBQVMsNkNBQTZDLEVBQUUsWUFBWSxjQUFjLHVCQUF1QixFQUFFLHlEQUF5RCxNQUFNLDJCQUEyQixjQUFjLEVBQUUscUJBQXFCLGFBQWEsRUFBRSxZQUFZLGNBQWMsRUFBRSxFQUFFLG1IQUFtSCxjQUFjLGNBQWMsRUFBRSxnRUFBZ0UsY0FBYyxFQUFFLHNCQUFzQixpQ0FBaUMsRUFBRSwyQkFBMkIsY0FBYyxFQUFFLHNDQUFzQyxzREFBc0Q7O0FBRTVsQyxnQkFBZ0IsbUlBQW1JLE1BQU0sdUJBQXVCLGFBQWEsRUFBRSxZQUFZLGNBQWMsRUFBRSxFQUFFLGlDQUFpQyxvQ0FBb0MsaUNBQWlDLGNBQWMsRUFBRSxvRkFBb0Y7QUFDdmEsaUJBQWlCLDRJQUE0SSxNQUFNLHNCQUFzQixhQUFhLEVBQUUsWUFBWSxjQUFjLEVBQUUsRUFBRSxrQ0FBa0Msc0NBQXNDLGlDQUFpQyxhQUFhLEVBQUUsaUNBQWlDLGNBQWMsRUFBRSx3RkFBd0Y7QUFDdmU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0NBQWdDO0FBQzlFLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTLFlBQVk7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsc0NBQXNDLEVBQUU7O0FBRTNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxrRkFBa0Y7QUFDbEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFtQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0NBQXNDLGlCQUFpQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCO0FBQzlCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsbUJBQW1CLGNBQWM7QUFDbkUsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1CQUFtQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1JQUFtSTtBQUNuSTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyw4Q0FBOEMsYUFBYTtBQUMzRCxpQkFBaUI7QUFDakIsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx3QkFBd0I7QUFDcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSxTQUFTLEVBQUU7QUFDckMsNEJBQTRCLEVBQUU7QUFDOUIsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQSw2QkFBNkIsRUFBRTtBQUMvQiw2QkFBNkIsRUFBRTtBQUMvQjtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DLHNDQUFzQyxHQUFHO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRTtBQUNsQyxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esa0RBQWtELHdCQUF3Qjs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1CQUFtQjs7QUFFM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qyx1QkFBdUI7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O0FDampFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNENBQTRDLGlCQUFpQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7OztBQy9pQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztBQ2xCRCx5Qzs7Ozs7OztBQ0FBOztBQUVBLG9CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzBhNzNmMDhmYTExYmVhMjk1YmUiLCIndXNlIHN0cmljdCc7XG5cbi8vcmVxdWlyZSgnY29yZS1qcycpO1xuXG4vLyByZXF1aXJlKCdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nKTtcblxuLy9yZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG4vL3JlcXVpcmUoJ2ZldGNoLWpzb25wJyk7XG4vL3JlcXVpcmUoJ2JhYmVsLXBvbHlmaWxsJyk7XG5cbi8vaW1wb3J0IHtzZXh9IGZyb20gXCIuL3N1Yi5qc1wiOyAvL+aKsemUmVxuLy9jb25zb2xlLmxvZyhzZXgpOyAvL+aKsemUmVxuLy9yZXF1aXJlKCdjb3JlLWpzJyk7IC8v5oqx6ZSZXG4vLyByZXF1aXJlKCdlczYtcHJvbWlzZScpO1xuLy8gcmVxdWlyZSgnZXM1LXNoaW0nKTtcbi8vIHJlcXVpcmUoJ2VzNS1zaGltL2VzNS1zaGFtJyk7XG4vLyByZXF1aXJlKCdjb25zb2xlLXBvbHlmaWxsJyk7XG4vLyByZXF1aXJlKCdmZXRjaC1pZTgnKTtcbi8vIHJlcXVpcmUoJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbicpO1xuXG4vLyByZXF1aXJlKCdsb2Rhc2gnKTsgLy/mirHplJlcbi8vcmVxdWlyZSgnY29yZS1qcycpO1xuLy9yZXF1aXJlKCdiYWJlbC1wb2x5ZmlsbCcpXG4vL3JlcXVpcmUoJ2VzNi1wcm9taXNlJyk7XG4vL3JlcXVpcmUoJ2ZldGNoLWllOCcpO1xucmVxdWlyZSgnZXM1LXNoaW0nKTtcbnJlcXVpcmUoJ2VzNS1zaGltL2VzNS1zaGFtJyk7XG5yZXF1aXJlKCdjb25zb2xlLXBvbHlmaWxsJyk7XG4vL3JlcXVpcmUoJ2xvZGFzaC9mcCcpIOi/meenjeWKoOi9veaWueW8j+WPquacieesrOWbm+eJiOacrOS8muaciVxuLy8gdmFyIF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuLy92YXIgZnAgPSByZXF1aXJlKCdsb2Rhc2gnKTsgXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnOyAvL+aKsemUmVxuXG4vL2NvbnNvbGUubG9nKHJlcXVpcmUoJ2xvZGFzaCcpLlZFUlNJT04pO1xuXG4vL3JlcXVpcmUoJy4vc3ViLmpzJyk7IC8v5oqx6ZSZXG5yZXF1aXJlKCdTdGF0aWMvc2Nzcy9wdWJsaWMuc2NzcycpO1xuLy9yZXF1aXJlKCcuL3N0YXRpYy9jc3MvcHViLmNzcycpO1xuXG5yZXF1aXJlKCdTdGF0aWMvLi4vdGVzdC5qcycpO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICAvLyd1c2Ugc3RyaWN0J1xuXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvL2VsZW1lbnQuaW5uZXJIVE1MID0gTU0uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcblxuICAgIFtcIjNcIiwgXCI0XCJdLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB9KTtcblxuICAgIHZhciB4ID0geyBcImNsYXNzXCI6IDIgfTtcbiAgICB2YXIgVCA9IHhbXCJjbGFzc1wiXTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiZnVja1wiO1xuXG4gICAgLy9lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbiAqIEBsaWNlbnNlIGVzNS1zaGltIENvcHlyaWdodCAyMDA5LTIwMTUgYnkgY29udHJpYnV0b3JzLCBNSVQgTGljZW5zZVxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdmltOiB0cz00IHN0cz00IHN3PTQgZXhwYW5kdGFiXG5cbi8vIEFkZCBzZW1pY29sb24gdG8gcHJldmVudCBJSUZFIGZyb20gYmVpbmcgcGFzc2VkIGFzIGFyZ3VtZW50IHRvIGNvbmNhdGVuYXRlZCBjb2RlLlxuO1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbilcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3RlbXBsYXRlcy9yZXR1cm5FeHBvcnRzLmpzXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lLCBleHBvcnRzLCBtb2R1bGUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QucmV0dXJuRXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBCcmluZ3MgYW4gZW52aXJvbm1lbnQgYXMgY2xvc2UgdG8gRUNNQVNjcmlwdCA1IGNvbXBsaWFuY2VcbiAgICAgKiBhcyBpcyBwb3NzaWJsZSB3aXRoIHRoZSBmYWNpbGl0aWVzIG9mIGVyc3R3aGlsZSBlbmdpbmVzLlxuICAgICAqXG4gICAgICogQW5ub3RhdGVkIEVTNTogaHR0cDovL2VzNS5naXRodWIuY29tLyAoc3BlY2lmaWMgbGlua3MgYmVsb3cpXG4gICAgICogRVM1IFNwZWM6IGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9wdWJsaWNhdGlvbnMvZmlsZXMvRUNNQS1TVC9FY21hLTI2Mi5wZGZcbiAgICAgKiBSZXF1aXJlZCByZWFkaW5nOiBodHRwOi8vamF2YXNjcmlwdHdlYmxvZy53b3JkcHJlc3MuY29tLzIwMTEvMTIvMDUvZXh0ZW5kaW5nLWphdmFzY3JpcHQtbmF0aXZlcy9cbiAgICAgKi9cblxuICAgIC8vIFNob3J0Y3V0IHRvIGFuIG9mdGVuIGFjY2Vzc2VkIHByb3BlcnRpZXMsIGluIG9yZGVyIHRvIGF2b2lkIG11bHRpcGxlXG4gICAgLy8gZGVyZWZlcmVuY2UgdGhhdCBjb3N0cyB1bml2ZXJzYWxseS4gVGhpcyBhbHNvIGhvbGRzIGEgcmVmZXJlbmNlIHRvIGtub3duLWdvb2RcbiAgICAvLyBmdW5jdGlvbnMuXG4gICAgdmFyICRBcnJheSA9IEFycmF5O1xuICAgIHZhciBBcnJheVByb3RvdHlwZSA9ICRBcnJheS5wcm90b3R5cGU7XG4gICAgdmFyICRPYmplY3QgPSBPYmplY3Q7XG4gICAgdmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuICAgIHZhciAkRnVuY3Rpb24gPSBGdW5jdGlvbjtcbiAgICB2YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSAkRnVuY3Rpb24ucHJvdG90eXBlO1xuICAgIHZhciAkU3RyaW5nID0gU3RyaW5nO1xuICAgIHZhciBTdHJpbmdQcm90b3R5cGUgPSAkU3RyaW5nLnByb3RvdHlwZTtcbiAgICB2YXIgJE51bWJlciA9IE51bWJlcjtcbiAgICB2YXIgTnVtYmVyUHJvdG90eXBlID0gJE51bWJlci5wcm90b3R5cGU7XG4gICAgdmFyIGFycmF5X3NsaWNlID0gQXJyYXlQcm90b3R5cGUuc2xpY2U7XG4gICAgdmFyIGFycmF5X3NwbGljZSA9IEFycmF5UHJvdG90eXBlLnNwbGljZTtcbiAgICB2YXIgYXJyYXlfcHVzaCA9IEFycmF5UHJvdG90eXBlLnB1c2g7XG4gICAgdmFyIGFycmF5X3Vuc2hpZnQgPSBBcnJheVByb3RvdHlwZS51bnNoaWZ0O1xuICAgIHZhciBhcnJheV9jb25jYXQgPSBBcnJheVByb3RvdHlwZS5jb25jYXQ7XG4gICAgdmFyIGFycmF5X2pvaW4gPSBBcnJheVByb3RvdHlwZS5qb2luO1xuICAgIHZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbiAgICB2YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXg7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluO1xuXG4gICAgLy8gSGF2aW5nIGEgdG9TdHJpbmcgbG9jYWwgdmFyaWFibGUgbmFtZSBicmVha3MgaW4gT3BlcmEgc28gdXNlIHRvX3N0cmluZy5cbiAgICB2YXIgdG9fc3RyaW5nID0gT2JqZWN0UHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gICAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG9uZS12YXItZGVjbGFyYXRpb24tcGVyLWxpbmUsIG5vLXJlZGVjbGFyZSwgbWF4LXN0YXRlbWVudHMtcGVyLWxpbmUgKi9cbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuICAgIHZhciBpc0NhbGxhYmxlOyAvKiBpbmxpbmVkIGZyb20gaHR0cHM6Ly9ucG1qcy5jb20vaXMtY2FsbGFibGUgKi8gdmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcsIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzcyAvLCBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHsgdHJ5IHsgdmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTsgdmFyIHNpbmdsZVN0cmlwcGVkID0gZm5TdHIucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgJycpOyB2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpOyB2YXIgc3BhY2VTdHJpcHBlZCA9IG11bHRpU3RyaXBwZWQucmVwbGFjZSgvXFxuL21nLCAnICcpLnJlcGxhY2UoLyB7Mn0vZywgJyAnKTsgcmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChzcGFjZVN0cmlwcGVkKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IC8qIG5vdCBhIGZ1bmN0aW9uICovIH0gfSwgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSkgeyB0cnkgeyBpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH0gZm5Ub1N0ci5jYWxsKHZhbHVlKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH0sIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nLCBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsIGlzQ2FsbGFibGUgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7IGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9IGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH0gaWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH0gaWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9IHZhciBzdHJDbGFzcyA9IHRvX3N0cmluZy5jYWxsKHZhbHVlKTsgcmV0dXJuIHN0ckNsYXNzID09PSBmbkNsYXNzIHx8IHN0ckNsYXNzID09PSBnZW5DbGFzczsgfTtcblxuICAgIHZhciBpc1JlZ2V4OyAvKiBpbmxpbmVkIGZyb20gaHR0cHM6Ly9ucG1qcy5jb20vaXMtcmVnZXggKi8gdmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYywgdHJ5UmVnZXhFeGVjID0gZnVuY3Rpb24gdHJ5UmVnZXhFeGVjKHZhbHVlKSB7IHRyeSB7IHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH0sIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJzsgaXNSZWdleCA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHsgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9IHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeVJlZ2V4RXhlYyh2YWx1ZSkgOiB0b19zdHJpbmcuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7IH07XG4gICAgdmFyIGlzU3RyaW5nOyAvKiBpbmxpbmVkIGZyb20gaHR0cHM6Ly9ucG1qcy5jb20vaXMtc3RyaW5nICovIHZhciBzdHJWYWx1ZSA9IFN0cmluZy5wcm90b3R5cGUudmFsdWVPZiwgdHJ5U3RyaW5nT2JqZWN0ID0gZnVuY3Rpb24gdHJ5U3RyaW5nT2JqZWN0KHZhbHVlKSB7IHRyeSB7IHN0clZhbHVlLmNhbGwodmFsdWUpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfSwgc3RyaW5nQ2xhc3MgPSAnW29iamVjdCBTdHJpbmddJzsgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkgeyBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgeyByZXR1cm4gdHJ1ZTsgfSBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH0gcmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5U3RyaW5nT2JqZWN0KHZhbHVlKSA6IHRvX3N0cmluZy5jYWxsKHZhbHVlKSA9PT0gc3RyaW5nQ2xhc3M7IH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBvbmUtdmFyLWRlY2xhcmF0aW9uLXBlci1saW5lLCBuby1yZWRlY2xhcmUsIG1heC1zdGF0ZW1lbnRzLXBlci1saW5lICovXG5cbiAgICAvKiBpbmxpbmVkIGZyb20gaHR0cDovL25wbWpzLmNvbS9kZWZpbmUtcHJvcGVydGllcyAqL1xuICAgIHZhciBzdXBwb3J0c0Rlc2NyaXB0b3JzID0gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiAoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICd4JywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IG9iaiB9KTtcbiAgICAgICAgICAgIGZvciAodmFyIF8gaW4gb2JqKSB7IC8vIGpzY3M6aWdub3JlIGRpc2FsbG93VW51c2VkVmFyaWFibGVzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iai54ID09PSBvYmo7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgLyogdGhpcyBpcyBFUzMgKi9cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0oKSk7XG4gICAgdmFyIGRlZmluZVByb3BlcnRpZXMgPSAoZnVuY3Rpb24gKGhhcykge1xuICAgICAgICAvLyBEZWZpbmUgY29uZmlndXJhYmxlLCB3cml0YWJsZSwgYW5kIG5vbi1lbnVtZXJhYmxlIHByb3BzXG4gICAgICAgIC8vIGlmIHRoZXkgZG9uJ3QgZXhpc3QuXG4gICAgICAgIHZhciBkZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgaWYgKHN1cHBvcnRzRGVzY3JpcHRvcnMpIHtcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgbWV0aG9kLCBmb3JjZUFzc2lnbikge1xuICAgICAgICAgICAgICAgIGlmICghZm9yY2VBc3NpZ24gJiYgKG5hbWUgaW4gb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWV0aG9kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBtZXRob2QsIGZvcmNlQXNzaWduKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmb3JjZUFzc2lnbiAmJiAobmFtZSBpbiBvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0W25hbWVdID0gbWV0aG9kO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhvYmplY3QsIG1hcCwgZm9yY2VBc3NpZ24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhcy5jYWxsKG1hcCwgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBtYXBbbmFtZV0sIGZvcmNlQXNzaWduKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfShPYmplY3RQcm90b3R5cGUuaGFzT3duUHJvcGVydHkpKTtcblxuICAgIC8vXG4gICAgLy8gVXRpbFxuICAgIC8vID09PT09PVxuICAgIC8vXG5cbiAgICAvKiByZXBsYWNlYWJsZSB3aXRoIGh0dHBzOi8vbnBtanMuY29tL3BhY2thZ2UvZXMtYWJzdHJhY3QgL2hlbHBlcnMvaXNQcmltaXRpdmUgKi9cbiAgICB2YXIgaXNQcmltaXRpdmUgPSBmdW5jdGlvbiBpc1ByaW1pdGl2ZShpbnB1dCkge1xuICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiBpbnB1dDtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSBudWxsIHx8ICh0eXBlICE9PSAnb2JqZWN0JyAmJiB0eXBlICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuXG4gICAgdmFyIGlzQWN0dWFsTmFOID0gJE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBpc0FjdHVhbE5hTih4KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSB4O1xuICAgIH07XG5cbiAgICB2YXIgRVMgPSB7XG4gICAgICAgIC8vIEVTNSA5LjRcbiAgICAgICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4OS40XG4gICAgICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3RvLWludGVnZXJcbiAgICAgICAgLyogcmVwbGFjZWFibGUgd2l0aCBodHRwczovL25wbWpzLmNvbS9wYWNrYWdlL2VzLWFic3RyYWN0IEVTNS5Ub0ludGVnZXIgKi9cbiAgICAgICAgVG9JbnRlZ2VyOiBmdW5jdGlvbiBUb0ludGVnZXIobnVtKSB7XG4gICAgICAgICAgICB2YXIgbiA9ICtudW07XG4gICAgICAgICAgICBpZiAoaXNBY3R1YWxOYU4obikpIHtcbiAgICAgICAgICAgICAgICBuID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobiAhPT0gMCAmJiBuICE9PSAoMSAvIDApICYmIG4gIT09IC0oMSAvIDApKSB7XG4gICAgICAgICAgICAgICAgbiA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qIHJlcGxhY2VhYmxlIHdpdGggaHR0cHM6Ly9ucG1qcy5jb20vcGFja2FnZS9lcy1hYnN0cmFjdCBFUzUuVG9QcmltaXRpdmUgKi9cbiAgICAgICAgVG9QcmltaXRpdmU6IGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgdmFsLCB2YWx1ZU9mLCB0b1N0cjtcbiAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZShpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZU9mID0gaW5wdXQudmFsdWVPZjtcbiAgICAgICAgICAgIGlmIChpc0NhbGxhYmxlKHZhbHVlT2YpKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdmFsdWVPZi5jYWxsKGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvU3RyID0gaW5wdXQudG9TdHJpbmc7XG4gICAgICAgICAgICBpZiAoaXNDYWxsYWJsZSh0b1N0cikpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0b1N0ci5jYWxsKGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFUzUgOS45XG4gICAgICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDkuOVxuICAgICAgICAvKiByZXBsYWNlYWJsZSB3aXRoIGh0dHBzOi8vbnBtanMuY29tL3BhY2thZ2UvZXMtYWJzdHJhY3QgRVM1LlRvT2JqZWN0ICovXG4gICAgICAgIFRvT2JqZWN0OiBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgaWYgKG8gPT0gbnVsbCkgeyAvLyB0aGlzIG1hdGNoZXMgYm90aCBudWxsIGFuZCB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FuJ3QgY29udmVydCBcIiArIG8gKyAnIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICRPYmplY3Qobyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyogcmVwbGFjZWFibGUgd2l0aCBodHRwczovL25wbWpzLmNvbS9wYWNrYWdlL2VzLWFic3RyYWN0IEVTNS5Ub1VpbnQzMiAqL1xuICAgICAgICBUb1VpbnQzMjogZnVuY3Rpb24gVG9VaW50MzIoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPj4+IDA7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9cbiAgICAvLyBGdW5jdGlvblxuICAgIC8vID09PT09PT09XG4gICAgLy9cblxuICAgIC8vIEVTLTUgMTUuMy40LjVcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4zLjQuNVxuXG4gICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcblxuICAgIGRlZmluZVByb3BlcnRpZXMoRnVuY3Rpb25Qcm90b3R5cGUsIHtcbiAgICAgICAgYmluZDogZnVuY3Rpb24gYmluZCh0aGF0KSB7IC8vIC5sZW5ndGggaXMgMVxuICAgICAgICAgICAgLy8gMS4gTGV0IFRhcmdldCBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgICAgICAgICAgLy8gMi4gSWYgSXNDYWxsYWJsZShUYXJnZXQpIGlzIGZhbHNlLCB0aHJvdyBhIFR5cGVFcnJvciBleGNlcHRpb24uXG4gICAgICAgICAgICBpZiAoIWlzQ2FsbGFibGUodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJyArIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAzLiBMZXQgQSBiZSBhIG5ldyAocG9zc2libHkgZW1wdHkpIGludGVybmFsIGxpc3Qgb2YgYWxsIG9mIHRoZVxuICAgICAgICAgICAgLy8gICBhcmd1bWVudCB2YWx1ZXMgcHJvdmlkZWQgYWZ0ZXIgdGhpc0FyZyAoYXJnMSwgYXJnMiBldGMpLCBpbiBvcmRlci5cbiAgICAgICAgICAgIC8vIFhYWCBzbGljZWRBcmdzIHdpbGwgc3RhbmQgaW4gZm9yIFwiQVwiIGlmIHVzZWRcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJyYXlfc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOyAvLyBmb3Igbm9ybWFsIGNhbGxcbiAgICAgICAgICAgIC8vIDQuIExldCBGIGJlIGEgbmV3IG5hdGl2ZSBFQ01BU2NyaXB0IG9iamVjdC5cbiAgICAgICAgICAgIC8vIDExLiBTZXQgdGhlIFtbUHJvdG90eXBlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgRiB0byB0aGUgc3RhbmRhcmRcbiAgICAgICAgICAgIC8vICAgYnVpbHQtaW4gRnVuY3Rpb24gcHJvdG90eXBlIG9iamVjdCBhcyBzcGVjaWZpZWQgaW4gMTUuMy4zLjEuXG4gICAgICAgICAgICAvLyAxMi4gU2V0IHRoZSBbW0NhbGxdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICAgICAgLy8gICAxNS4zLjQuNS4xLlxuICAgICAgICAgICAgLy8gMTMuIFNldCB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBwcm9wZXJ0eSBvZiBGIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICAgICAgLy8gICAxNS4zLjQuNS4yLlxuICAgICAgICAgICAgLy8gMTQuIFNldCB0aGUgW1tIYXNJbnN0YW5jZV1dIGludGVybmFsIHByb3BlcnR5IG9mIEYgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgICAgICAvLyAgIDE1LjMuNC41LjMuXG4gICAgICAgICAgICB2YXIgYm91bmQ7XG4gICAgICAgICAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAxNS4zLjQuNS4yIFtbQ29uc3RydWN0XV1cbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2Qgb2YgYSBmdW5jdGlvbiBvYmplY3QsXG4gICAgICAgICAgICAgICAgICAgIC8vIEYgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyB0aGUgYmluZCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3Qgb2YgYXJndW1lbnRzIEV4dHJhQXJncywgdGhlIGZvbGxvd2luZyBzdGVwcyBhcmUgdGFrZW46XG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIExldCB0YXJnZXQgYmUgdGhlIHZhbHVlIG9mIEYncyBbW1RhcmdldEZ1bmN0aW9uXV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICBpbnRlcm5hbCBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gSWYgdGFyZ2V0IGhhcyBubyBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZCwgYVxuICAgICAgICAgICAgICAgICAgICAvLyAgIFR5cGVFcnJvciBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgICAgICAgICAgICAgICAgICAvLyAzLiBMZXQgYm91bmRBcmdzIGJlIHRoZSB2YWx1ZSBvZiBGJ3MgW1tCb3VuZEFyZ3NdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICAvLyA0LiBMZXQgYXJncyBiZSBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhlIHNhbWUgdmFsdWVzIGFzIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGxpc3QgYm91bmRBcmdzIGluIHRoZSBzYW1lIG9yZGVyIGZvbGxvd2VkIGJ5IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmFsdWVzIGFzIHRoZSBsaXN0IEV4dHJhQXJncyBpbiB0aGUgc2FtZSBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgLy8gNS4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAvLyAgIG1ldGhvZCBvZiB0YXJnZXQgcHJvdmlkaW5nIGFyZ3MgYXMgdGhlIGFyZ3VtZW50cy5cblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXBwbHkuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheV9jb25jYXQuY2FsbChhcmdzLCBhcnJheV9zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDE1LjMuNC41LjEgW1tDYWxsXV1cbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mIGEgZnVuY3Rpb24gb2JqZWN0LCBGLFxuICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCB3YXMgY3JlYXRlZCB1c2luZyB0aGUgYmluZCBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBhXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgdmFsdWUgYW5kIGEgbGlzdCBvZiBhcmd1bWVudHMgRXh0cmFBcmdzLCB0aGUgZm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ZXBzIGFyZSB0YWtlbjpcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gTGV0IGJvdW5kQXJncyBiZSB0aGUgdmFsdWUgb2YgRidzIFtbQm91bmRBcmdzXV0gaW50ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gTGV0IGJvdW5kVGhpcyBiZSB0aGUgdmFsdWUgb2YgRidzIFtbQm91bmRUaGlzXV0gaW50ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgLy8gMy4gTGV0IHRhcmdldCBiZSB0aGUgdmFsdWUgb2YgRidzIFtbVGFyZ2V0RnVuY3Rpb25dXSBpbnRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAvLyAgIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgICAgICAvLyA0LiBMZXQgYXJncyBiZSBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhlIHNhbWUgdmFsdWVzIGFzIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGxpc3QgYm91bmRBcmdzIGluIHRoZSBzYW1lIG9yZGVyIGZvbGxvd2VkIGJ5IHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgICAgIC8vICAgdmFsdWVzIGFzIHRoZSBsaXN0IEV4dHJhQXJncyBpbiB0aGUgc2FtZSBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgLy8gNS4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIC8vICAgb2YgdGFyZ2V0IHByb3ZpZGluZyBib3VuZFRoaXMgYXMgdGhlIHRoaXMgdmFsdWUgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vICAgcHJvdmlkaW5nIGFyZ3MgYXMgdGhlIGFyZ3VtZW50cy5cblxuICAgICAgICAgICAgICAgICAgICAvLyBlcXVpdjogdGFyZ2V0LmNhbGwodGhpcywgLi4uYm91bmRBcmdzLCAuLi5hcmdzKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwbHkuY2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJheV9jb25jYXQuY2FsbChhcmdzLCBhcnJheV9zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIDE1LiBJZiB0aGUgW1tDbGFzc11dIGludGVybmFsIHByb3BlcnR5IG9mIFRhcmdldCBpcyBcIkZ1bmN0aW9uXCIsIHRoZW5cbiAgICAgICAgICAgIC8vICAgICBhLiBMZXQgTCBiZSB0aGUgbGVuZ3RoIHByb3BlcnR5IG9mIFRhcmdldCBtaW51cyB0aGUgbGVuZ3RoIG9mIEEuXG4gICAgICAgICAgICAvLyAgICAgYi4gU2V0IHRoZSBsZW5ndGggb3duIHByb3BlcnR5IG9mIEYgdG8gZWl0aGVyIDAgb3IgTCwgd2hpY2hldmVyIGlzXG4gICAgICAgICAgICAvLyAgICAgICBsYXJnZXIuXG4gICAgICAgICAgICAvLyAxNi4gRWxzZSBzZXQgdGhlIGxlbmd0aCBvd24gcHJvcGVydHkgb2YgRiB0byAwLlxuXG4gICAgICAgICAgICB2YXIgYm91bmRMZW5ndGggPSBtYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gMTcuIFNldCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgbGVuZ3RoIG93biBwcm9wZXJ0eSBvZiBGIHRvIHRoZSB2YWx1ZXNcbiAgICAgICAgICAgIC8vICAgc3BlY2lmaWVkIGluIDE1LjMuNS4xLlxuICAgICAgICAgICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlfcHVzaC5jYWxsKGJvdW5kQXJncywgJyQnICsgaSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFhYWCBCdWlsZCBhIGR5bmFtaWMgZnVuY3Rpb24gd2l0aCBkZXNpcmVkIGFtb3VudCBvZiBhcmd1bWVudHMgaXMgdGhlIG9ubHlcbiAgICAgICAgICAgIC8vIHdheSB0byBzZXQgdGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiBhIGZ1bmN0aW9uLlxuICAgICAgICAgICAgLy8gSW4gZW52aXJvbm1lbnRzIHdoZXJlIENvbnRlbnQgU2VjdXJpdHkgUG9saWNpZXMgZW5hYmxlZCAoQ2hyb21lIGV4dGVuc2lvbnMsXG4gICAgICAgICAgICAvLyBmb3IgZXguKSBhbGwgdXNlIG9mIGV2YWwgb3IgRnVuY3Rpb24gY29zdHJ1Y3RvciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgICAgLy8gSG93ZXZlciBpbiBhbGwgb2YgdGhlc2UgZW52aXJvbm1lbnRzIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGV4aXN0c1xuICAgICAgICAgICAgLy8gYW5kIHNvIHRoaXMgY29kZSB3aWxsIG5ldmVyIGJlIGV4ZWN1dGVkLlxuICAgICAgICAgICAgYm91bmQgPSAkRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBhcnJheV9qb2luLmNhbGwoYm91bmRBcmdzLCAnLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCBkYW5nbGluZyByZWZlcmVuY2VzLlxuICAgICAgICAgICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgIC8vIDE4LiBTZXQgdGhlIFtbRXh0ZW5zaWJsZV1dIGludGVybmFsIHByb3BlcnR5IG9mIEYgdG8gdHJ1ZS5cblxuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgLy8gMTkuIExldCB0aHJvd2VyIGJlIHRoZSBbW1Rocm93VHlwZUVycm9yXV0gZnVuY3Rpb24gT2JqZWN0ICgxMy4yLjMpLlxuICAgICAgICAgICAgLy8gMjAuIENhbGwgdGhlIFtbRGVmaW5lT3duUHJvcGVydHldXSBpbnRlcm5hbCBtZXRob2Qgb2YgRiB3aXRoXG4gICAgICAgICAgICAvLyAgIGFyZ3VtZW50cyBcImNhbGxlclwiLCBQcm9wZXJ0eURlc2NyaXB0b3Ige1tbR2V0XV06IHRocm93ZXIsIFtbU2V0XV06XG4gICAgICAgICAgICAvLyAgIHRocm93ZXIsIFtbRW51bWVyYWJsZV1dOiBmYWxzZSwgW1tDb25maWd1cmFibGVdXTogZmFsc2V9LCBhbmRcbiAgICAgICAgICAgIC8vICAgZmFsc2UuXG4gICAgICAgICAgICAvLyAyMS4gQ2FsbCB0aGUgW1tEZWZpbmVPd25Qcm9wZXJ0eV1dIGludGVybmFsIG1ldGhvZCBvZiBGIHdpdGhcbiAgICAgICAgICAgIC8vICAgYXJndW1lbnRzIFwiYXJndW1lbnRzXCIsIFByb3BlcnR5RGVzY3JpcHRvciB7W1tHZXRdXTogdGhyb3dlcixcbiAgICAgICAgICAgIC8vICAgW1tTZXRdXTogdGhyb3dlciwgW1tFbnVtZXJhYmxlXV06IGZhbHNlLCBbW0NvbmZpZ3VyYWJsZV1dOiBmYWxzZX0sXG4gICAgICAgICAgICAvLyAgIGFuZCBmYWxzZS5cblxuICAgICAgICAgICAgLy8gVE9ET1xuICAgICAgICAgICAgLy8gTk9URSBGdW5jdGlvbiBvYmplY3RzIGNyZWF0ZWQgdXNpbmcgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgZG8gbm90XG4gICAgICAgICAgICAvLyBoYXZlIGEgcHJvdG90eXBlIHByb3BlcnR5IG9yIHRoZSBbW0NvZGVdXSwgW1tGb3JtYWxQYXJhbWV0ZXJzXV0sIGFuZFxuICAgICAgICAgICAgLy8gW1tTY29wZV1dIGludGVybmFsIHByb3BlcnRpZXMuXG4gICAgICAgICAgICAvLyBYWFggY2FuJ3QgZGVsZXRlIHByb3RvdHlwZSBpbiBwdXJlLWpzLlxuXG4gICAgICAgICAgICAvLyAyMi4gUmV0dXJuIEYuXG4gICAgICAgICAgICByZXR1cm4gYm91bmQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIF9QbGVhc2Ugbm90ZTogU2hvcnRjdXRzIGFyZSBkZWZpbmVkIGFmdGVyIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgYXMgd2VcbiAgICAvLyB1c2UgaXQgaW4gZGVmaW5pbmcgc2hvcnRjdXRzLlxuICAgIHZhciBvd25zID0gY2FsbC5iaW5kKE9iamVjdFByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gICAgdmFyIHRvU3RyID0gY2FsbC5iaW5kKE9iamVjdFByb3RvdHlwZS50b1N0cmluZyk7XG4gICAgdmFyIGFycmF5U2xpY2UgPSBjYWxsLmJpbmQoYXJyYXlfc2xpY2UpO1xuICAgIHZhciBhcnJheVNsaWNlQXBwbHkgPSBhcHBseS5iaW5kKGFycmF5X3NsaWNlKTtcbiAgICAvKiBnbG9iYWxzIGRvY3VtZW50ICovXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhcnJheVNsaWNlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmFyIG9yaWdBcnJheVNsaWNlID0gYXJyYXlTbGljZTtcbiAgICAgICAgICAgIHZhciBvcmlnQXJyYXlTbGljZUFwcGx5ID0gYXJyYXlTbGljZUFwcGx5O1xuICAgICAgICAgICAgYXJyYXlTbGljZSA9IGZ1bmN0aW9uIGFycmF5U2xpY2VJRShhcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByW2ldID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ0FycmF5U2xpY2VBcHBseShyLCBvcmlnQXJyYXlTbGljZShhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhcnJheVNsaWNlQXBwbHkgPSBmdW5jdGlvbiBhcnJheVNsaWNlQXBwbHlJRShhcnIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ0FycmF5U2xpY2VBcHBseShhcnJheVNsaWNlKGFyciksIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3RyU2xpY2UgPSBjYWxsLmJpbmQoU3RyaW5nUHJvdG90eXBlLnNsaWNlKTtcbiAgICB2YXIgc3RyU3BsaXQgPSBjYWxsLmJpbmQoU3RyaW5nUHJvdG90eXBlLnNwbGl0KTtcbiAgICB2YXIgc3RySW5kZXhPZiA9IGNhbGwuYmluZChTdHJpbmdQcm90b3R5cGUuaW5kZXhPZik7XG4gICAgdmFyIHB1c2hDYWxsID0gY2FsbC5iaW5kKGFycmF5X3B1c2gpO1xuICAgIHZhciBpc0VudW0gPSBjYWxsLmJpbmQoT2JqZWN0UHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbiAgICB2YXIgYXJyYXlTb3J0ID0gY2FsbC5iaW5kKEFycmF5UHJvdG90eXBlLnNvcnQpO1xuXG4gICAgLy9cbiAgICAvLyBBcnJheVxuICAgIC8vID09PT09XG4gICAgLy9cblxuICAgIHZhciBpc0FycmF5ID0gJEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcblxuICAgIC8vIEVTNSAxNS40LjQuMTJcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjQuMTNcbiAgICAvLyBSZXR1cm4gbGVuK2FyZ0NvdW50LlxuICAgIC8vIFtidWdmaXgsIGllbHQ4XVxuICAgIC8vIElFIDwgOCBidWc6IFtdLnVuc2hpZnQoMCkgPT09IHVuZGVmaW5lZCBidXQgc2hvdWxkIGJlIFwiMVwiXG4gICAgdmFyIGhhc1Vuc2hpZnRSZXR1cm5WYWx1ZUJ1ZyA9IFtdLnVuc2hpZnQoMCkgIT09IDE7XG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcnJheV91bnNoaWZ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9LCBoYXNVbnNoaWZ0UmV0dXJuVmFsdWVCdWcpO1xuXG4gICAgLy8gRVM1IDE1LjQuMy4yXG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC4zLjJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pc0FycmF5XG4gICAgZGVmaW5lUHJvcGVydGllcygkQXJyYXksIHsgaXNBcnJheTogaXNBcnJheSB9KTtcblxuICAgIC8vIFRoZSBJc0NhbGxhYmxlKCkgY2hlY2sgaW4gdGhlIEFycmF5IGZ1bmN0aW9uc1xuICAgIC8vIGhhcyBiZWVuIHJlcGxhY2VkIHdpdGggYSBzdHJpY3QgY2hlY2sgb24gdGhlXG4gICAgLy8gaW50ZXJuYWwgY2xhc3Mgb2YgdGhlIG9iamVjdCB0byB0cmFwIGNhc2VzIHdoZXJlXG4gICAgLy8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIHdhcyBhY3R1YWxseSBhIHJlZ3VsYXJcbiAgICAvLyBleHByZXNzaW9uIGxpdGVyYWwsIHdoaWNoIGluIFY4IGFuZFxuICAgIC8vIEphdmFTY3JpcHRDb3JlIGlzIGEgdHlwZW9mIFwiZnVuY3Rpb25cIi4gIE9ubHkgaW5cbiAgICAvLyBWOCBhcmUgcmVndWxhciBleHByZXNzaW9uIGxpdGVyYWxzIHBlcm1pdHRlZCBhc1xuICAgIC8vIHJlZHVjZSBwYXJhbWV0ZXJzLCBzbyBpdCBpcyBkZXNpcmFibGUgaW4gdGhlXG4gICAgLy8gZ2VuZXJhbCBjYXNlIGZvciB0aGUgc2hpbSB0byBtYXRjaCB0aGUgbW9yZVxuICAgIC8vIHN0cmljdCBhbmQgY29tbW9uIGJlaGF2aW9yIG9mIHJlamVjdGluZyByZWd1bGFyXG4gICAgLy8gZXhwcmVzc2lvbnMuXG5cbiAgICAvLyBFUzUgMTUuNC40LjE4XG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE4XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvYXJyYXkvZm9yRWFjaFxuXG4gICAgLy8gQ2hlY2sgZmFpbHVyZSBvZiBieS1pbmRleCBhY2Nlc3Mgb2Ygc3RyaW5nIGNoYXJhY3RlcnMgKElFIDwgOSlcbiAgICAvLyBhbmQgZmFpbHVyZSBvZiBgMCBpbiBib3hlZFN0cmluZ2AgKFJoaW5vKVxuICAgIHZhciBib3hlZFN0cmluZyA9ICRPYmplY3QoJ2EnKTtcbiAgICB2YXIgc3BsaXRTdHJpbmcgPSBib3hlZFN0cmluZ1swXSAhPT0gJ2EnIHx8ICEoMCBpbiBib3hlZFN0cmluZyk7XG5cbiAgICB2YXIgcHJvcGVybHlCb3hlc0NvbnRleHQgPSBmdW5jdGlvbiBwcm9wZXJseUJveGVkKG1ldGhvZCkge1xuICAgICAgICAvLyBDaGVjayBub2RlIDAuNi4yMSBidWcgd2hlcmUgdGhpcmQgcGFyYW1ldGVyIGlzIG5vdCBib3hlZFxuICAgICAgICB2YXIgcHJvcGVybHlCb3hlc05vblN0cmljdCA9IHRydWU7XG4gICAgICAgIHZhciBwcm9wZXJseUJveGVzU3RyaWN0ID0gdHJ1ZTtcbiAgICAgICAgdmFyIHRocmV3RXhjZXB0aW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwoJ2ZvbycsIGZ1bmN0aW9uIChfLCBfXywgY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJseUJveGVzTm9uU3RyaWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKFsxXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvcGVybHlCb3hlc1N0cmljdCA9IHR5cGVvZiB0aGlzID09PSAnc3RyaW5nJztcbiAgICAgICAgICAgICAgICB9LCAneCcpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRocmV3RXhjZXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gISFtZXRob2QgJiYgIXRocmV3RXhjZXB0aW9uICYmIHByb3Blcmx5Qm94ZXNOb25TdHJpY3QgJiYgcHJvcGVybHlCb3hlc1N0cmljdDtcbiAgICB9O1xuXG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4vKiwgdGhpc0FyZyovKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gc3RyU3BsaXQodGhpcywgJycpIDogb2JqZWN0O1xuICAgICAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBFUy5Ub1VpbnQzMihzZWxmLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIFQgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG5vIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIGlmIGNhbGxiYWNrIGlzIG5vdCBhIGNhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAoIWlzQ2FsbGFibGUoY2FsbGJhY2tmbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuZm9yRWFjaCBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW52b2tlIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGNhbGwsIHBhc3NpbmcgYXJndW1lbnRzOlxuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZXh0LCBwcm9wZXJ0eSB2YWx1ZSwgcHJvcGVydHkga2V5LCB0aGlzQXJnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja2ZuKHNlbGZbaV0sIGksIG9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja2ZuLmNhbGwoVCwgc2VsZltpXSwgaSwgb2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sICFwcm9wZXJseUJveGVzQ29udGV4dChBcnJheVByb3RvdHlwZS5mb3JFYWNoKSk7XG5cbiAgICAvLyBFUzUgMTUuNC40LjE5XG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE5XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vQ29yZV9KYXZhU2NyaXB0XzEuNV9SZWZlcmVuY2UvT2JqZWN0cy9BcnJheS9tYXBcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4vKiwgdGhpc0FyZyovKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gc3RyU3BsaXQodGhpcywgJycpIDogb2JqZWN0O1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IEVTLlRvVWludDMyKHNlbGYubGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAkQXJyYXkobGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciBUO1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgVCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgbm8gY2FsbGJhY2sgZnVuY3Rpb24gb3IgaWYgY2FsbGJhY2sgaXMgbm90IGEgY2FsbGFibGUgZnVuY3Rpb25cbiAgICAgICAgICAgIGlmICghaXNDYWxsYWJsZShjYWxsYmFja2ZuKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5tYXAgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGNhbGxiYWNrZm4oc2VsZltpXSwgaSwgb2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGNhbGxiYWNrZm4uY2FsbChULCBzZWxmW2ldLCBpLCBvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0sICFwcm9wZXJseUJveGVzQ29udGV4dChBcnJheVByb3RvdHlwZS5tYXApKTtcblxuICAgIC8vIEVTNSAxNS40LjQuMjBcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjQuMjBcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZS9PYmplY3RzL0FycmF5L2ZpbHRlclxuICAgIGRlZmluZVByb3BlcnRpZXMoQXJyYXlQcm90b3R5cGUsIHtcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbi8qLCB0aGlzQXJnKi8pIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBFUy5Ub09iamVjdCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gc3BsaXRTdHJpbmcgJiYgaXNTdHJpbmcodGhpcykgPyBzdHJTcGxpdCh0aGlzLCAnJykgOiBvYmplY3Q7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gRVMuVG9VaW50MzIoc2VsZi5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgdmFyIFQ7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBUID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICAgICAgaWYgKCFpc0NhbGxhYmxlKGNhbGxiYWNrZm4pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLmZpbHRlciBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzZWxmW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFQgPT09ICd1bmRlZmluZWQnID8gY2FsbGJhY2tmbih2YWx1ZSwgaSwgb2JqZWN0KSA6IGNhbGxiYWNrZm4uY2FsbChULCB2YWx1ZSwgaSwgb2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaENhbGwocmVzdWx0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfSwgIXByb3Blcmx5Qm94ZXNDb250ZXh0KEFycmF5UHJvdG90eXBlLmZpbHRlcikpO1xuXG4gICAgLy8gRVM1IDE1LjQuNC4xNlxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjQuNC4xNlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2V2ZXJ5XG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbi8qLCB0aGlzQXJnKi8pIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBFUy5Ub09iamVjdCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gc3BsaXRTdHJpbmcgJiYgaXNTdHJpbmcodGhpcykgPyBzdHJTcGxpdCh0aGlzLCAnJykgOiBvYmplY3Q7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gRVMuVG9VaW50MzIoc2VsZi5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIFQ7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBUID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBubyBjYWxsYmFjayBmdW5jdGlvbiBvciBpZiBjYWxsYmFjayBpcyBub3QgYSBjYWxsYWJsZSBmdW5jdGlvblxuICAgICAgICAgICAgaWYgKCFpc0NhbGxhYmxlKGNhbGxiYWNrZm4pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkucHJvdG90eXBlLmV2ZXJ5IGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgaW4gc2VsZiAmJiAhKHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IGNhbGxiYWNrZm4oc2VsZltpXSwgaSwgb2JqZWN0KSA6IGNhbGxiYWNrZm4uY2FsbChULCBzZWxmW2ldLCBpLCBvYmplY3QpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9LCAhcHJvcGVybHlCb3hlc0NvbnRleHQoQXJyYXlQcm90b3R5cGUuZXZlcnkpKTtcblxuICAgIC8vIEVTNSAxNS40LjQuMTdcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjQuMTdcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lXG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICBzb21lOiBmdW5jdGlvbiBzb21lKGNhbGxiYWNrZm4vKiwgdGhpc0FyZyAqLykge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBzcGxpdFN0cmluZyAmJiBpc1N0cmluZyh0aGlzKSA/IHN0clNwbGl0KHRoaXMsICcnKSA6IG9iamVjdDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBFUy5Ub1VpbnQzMihzZWxmLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgVDtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIFQgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG5vIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIGlmIGNhbGxiYWNrIGlzIG5vdCBhIGNhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAoIWlzQ2FsbGFibGUoY2FsbGJhY2tmbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuc29tZSBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYgJiYgKHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IGNhbGxiYWNrZm4oc2VsZltpXSwgaSwgb2JqZWN0KSA6IGNhbGxiYWNrZm4uY2FsbChULCBzZWxmW2ldLCBpLCBvYmplY3QpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCAhcHJvcGVybHlCb3hlc0NvbnRleHQoQXJyYXlQcm90b3R5cGUuc29tZSkpO1xuXG4gICAgLy8gRVM1IDE1LjQuNC4yMVxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjQuNC4yMVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0NvcmVfSmF2YVNjcmlwdF8xLjVfUmVmZXJlbmNlL09iamVjdHMvQXJyYXkvcmVkdWNlXG4gICAgdmFyIHJlZHVjZUNvZXJjZXNUb09iamVjdCA9IGZhbHNlO1xuICAgIGlmIChBcnJheVByb3RvdHlwZS5yZWR1Y2UpIHtcbiAgICAgICAgcmVkdWNlQ29lcmNlc1RvT2JqZWN0ID0gdHlwZW9mIEFycmF5UHJvdG90eXBlLnJlZHVjZS5jYWxsKCdlczUnLCBmdW5jdGlvbiAoXywgX18sIF9fXywgbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH0pID09PSAnb2JqZWN0JztcbiAgICB9XG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuLyosIGluaXRpYWxWYWx1ZSovKSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHNwbGl0U3RyaW5nICYmIGlzU3RyaW5nKHRoaXMpID8gc3RyU3BsaXQodGhpcywgJycpIDogb2JqZWN0O1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IEVTLlRvVWludDMyKHNlbGYubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8gSWYgbm8gY2FsbGJhY2sgZnVuY3Rpb24gb3IgaWYgY2FsbGJhY2sgaXMgbm90IGEgY2FsbGFibGUgZnVuY3Rpb25cbiAgICAgICAgICAgIGlmICghaXNDYWxsYWJsZShjYWxsYmFja2ZuKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vIHZhbHVlIHRvIHJldHVybiBpZiBubyBpbml0aWFsIHZhbHVlIGFuZCBhbiBlbXB0eSBhcnJheVxuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzZWxmW2krK107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGFycmF5IGNvbnRhaW5zIG5vIHZhbHVlcywgbm8gaW5pdGlhbCB2YWx1ZSB0byByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCsraSA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgaW4gc2VsZikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFja2ZuKHJlc3VsdCwgc2VsZltpXSwgaSwgb2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9LCAhcmVkdWNlQ29lcmNlc1RvT2JqZWN0KTtcblxuICAgIC8vIEVTNSAxNS40LjQuMjJcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS40LjQuMjJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZS9PYmplY3RzL0FycmF5L3JlZHVjZVJpZ2h0XG4gICAgdmFyIHJlZHVjZVJpZ2h0Q29lcmNlc1RvT2JqZWN0ID0gZmFsc2U7XG4gICAgaWYgKEFycmF5UHJvdG90eXBlLnJlZHVjZVJpZ2h0KSB7XG4gICAgICAgIHJlZHVjZVJpZ2h0Q29lcmNlc1RvT2JqZWN0ID0gdHlwZW9mIEFycmF5UHJvdG90eXBlLnJlZHVjZVJpZ2h0LmNhbGwoJ2VzNScsIGZ1bmN0aW9uIChfLCBfXywgX19fLCBsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgfSkgPT09ICdvYmplY3QnO1xuICAgIH1cbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChjYWxsYmFja2ZuLyosIGluaXRpYWwqLykge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBzcGxpdFN0cmluZyAmJiBpc1N0cmluZyh0aGlzKSA/IHN0clNwbGl0KHRoaXMsICcnKSA6IG9iamVjdDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBFUy5Ub1VpbnQzMihzZWxmLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIC8vIElmIG5vIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIGlmIGNhbGxiYWNrIGlzIG5vdCBhIGNhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAoIWlzQ2FsbGFibGUoY2FsbGJhY2tmbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vIHZhbHVlIHRvIHJldHVybiBpZiBubyBpbml0aWFsIHZhbHVlLCBlbXB0eSBhcnJheVxuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlUmlnaHQgb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgaSA9IGxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNlbGZbaS0tXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYXJyYXkgY29udGFpbnMgbm8gdmFsdWVzLCBubyBpbml0aWFsIHZhbHVlIHRvIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBpZiAoLS1pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlUmlnaHQgb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2tmbihyZXN1bHQsIHNlbGZbaV0sIGksIG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoaS0tKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH0sICFyZWR1Y2VSaWdodENvZXJjZXNUb09iamVjdCk7XG5cbiAgICAvLyBFUzUgMTUuNC40LjE0XG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjE0XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZlxuICAgIHZhciBoYXNGaXJlZm94MkluZGV4T2ZCdWcgPSBBcnJheVByb3RvdHlwZS5pbmRleE9mICYmIFswLCAxXS5pbmRleE9mKDEsIDIpICE9PSAtMTtcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudC8qLCBmcm9tSW5kZXggKi8pIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gc3BsaXRTdHJpbmcgJiYgaXNTdHJpbmcodGhpcykgPyBzdHJTcGxpdCh0aGlzLCAnJykgOiBFUy5Ub09iamVjdCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBFUy5Ub1VpbnQzMihzZWxmLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGkgPSBFUy5Ub0ludGVnZXIoYXJndW1lbnRzWzFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaGFuZGxlIG5lZ2F0aXZlIGluZGljZXNcbiAgICAgICAgICAgIGkgPSBpID49IDAgPyBpIDogbWF4KDAsIGxlbmd0aCArIGkpO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHNlbGYgJiYgc2VsZltpXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9LCBoYXNGaXJlZm94MkluZGV4T2ZCdWcpO1xuXG4gICAgLy8gRVM1IDE1LjQuNC4xNVxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjQuNC4xNVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2xhc3RJbmRleE9mXG4gICAgdmFyIGhhc0ZpcmVmb3gyTGFzdEluZGV4T2ZCdWcgPSBBcnJheVByb3RvdHlwZS5sYXN0SW5kZXhPZiAmJiBbMCwgMV0ubGFzdEluZGV4T2YoMCwgLTMpICE9PSAtMTtcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50LyosIGZyb21JbmRleCAqLykge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBzcGxpdFN0cmluZyAmJiBpc1N0cmluZyh0aGlzKSA/IHN0clNwbGl0KHRoaXMsICcnKSA6IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IEVTLlRvVWludDMyKHNlbGYubGVuZ3RoKTtcblxuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGkgPSBtaW4oaSwgRVMuVG9JbnRlZ2VyKGFyZ3VtZW50c1sxXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIG5lZ2F0aXZlIGluZGljZXNcbiAgICAgICAgICAgIGkgPSBpID49IDAgPyBpIDogbGVuZ3RoIC0gTWF0aC5hYnMoaSk7XG4gICAgICAgICAgICBmb3IgKDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaSBpbiBzZWxmICYmIHNlYXJjaEVsZW1lbnQgPT09IHNlbGZbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfSwgaGFzRmlyZWZveDJMYXN0SW5kZXhPZkJ1Zyk7XG5cbiAgICAvLyBFUzUgMTUuNC40LjEyXG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuNC40LjEyXG4gICAgdmFyIHNwbGljZU5vb3BSZXR1cm5zRW1wdHlBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhID0gWzEsIDJdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gYS5zcGxpY2UoKTtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSAyICYmIGlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHQubGVuZ3RoID09PSAwO1xuICAgIH0oKSk7XG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICAvLyBTYWZhcmkgNS4wIGJ1ZyB3aGVyZSAuc3BsaWNlKCkgcmV0dXJucyB1bmRlZmluZWRcbiAgICAgICAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5X3NwbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgIXNwbGljZU5vb3BSZXR1cm5zRW1wdHlBcnJheSk7XG5cbiAgICB2YXIgc3BsaWNlV29ya3NXaXRoRW1wdHlPYmplY3QgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIEFycmF5UHJvdG90eXBlLnNwbGljZS5jYWxsKG9iaiwgMCwgMCwgMSk7XG4gICAgICAgIHJldHVybiBvYmoubGVuZ3RoID09PSAxO1xuICAgIH0oKSk7XG4gICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IG1heChFUy5Ub0ludGVnZXIodGhpcy5sZW5ndGgpLCAwKTtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB0eXBlb2YgZGVsZXRlQ291bnQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hDYWxsKGFyZ3MsIHRoaXMubGVuZ3RoIC0gc3RhcnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbMV0gPSBFUy5Ub0ludGVnZXIoZGVsZXRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheV9zcGxpY2UuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9LCAhc3BsaWNlV29ya3NXaXRoRW1wdHlPYmplY3QpO1xuICAgIHZhciBzcGxpY2VXb3Jrc1dpdGhMYXJnZVNwYXJzZUFycmF5cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBlciBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzI5NVxuICAgICAgICAvLyBTYWZhcmkgNy84IGJyZWFrcyB3aXRoIHNwYXJzZSBhcnJheXMgb2Ygc2l6ZSAxZTUgb3IgZ3JlYXRlclxuICAgICAgICB2YXIgYXJyID0gbmV3ICRBcnJheSgxZTUpO1xuICAgICAgICAvLyBub3RlOiB0aGUgaW5kZXggTVVTVCBiZSA4IG9yIGxhcmdlciBvciB0aGUgdGVzdCB3aWxsIGZhbHNlIHBhc3NcbiAgICAgICAgYXJyWzhdID0gJ3gnO1xuICAgICAgICBhcnIuc3BsaWNlKDEsIDEpO1xuICAgICAgICAvLyBub3RlOiB0aGlzIHRlc3QgbXVzdCBiZSBkZWZpbmVkICphZnRlciogdGhlIGluZGV4T2Ygc2hpbVxuICAgICAgICAvLyBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8zMTNcbiAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKCd4JykgPT09IDc7XG4gICAgfSgpKTtcbiAgICB2YXIgc3BsaWNlV29ya3NXaXRoU21hbGxTcGFyc2VBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBQZXIgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8yOTVcbiAgICAgICAgLy8gT3BlcmEgMTIuMTUgYnJlYWtzIG9uIHRoaXMsIG5vIGlkZWEgd2h5LlxuICAgICAgICB2YXIgbiA9IDI1NjtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBhcnJbbl0gPSAnYSc7XG4gICAgICAgIGFyci5zcGxpY2UobiArIDEsIDAsICdiJyk7XG4gICAgICAgIHJldHVybiBhcnJbbl0gPT09ICdhJztcbiAgICB9KCkpO1xuICAgIGRlZmluZVByb3BlcnRpZXMoQXJyYXlQcm90b3R5cGUsIHtcbiAgICAgICAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gICAgICAgICAgICB2YXIgTyA9IEVTLlRvT2JqZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIEEgPSBbXTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBFUy5Ub1VpbnQzMihPLmxlbmd0aCk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVTdGFydCA9IEVTLlRvSW50ZWdlcihzdGFydCk7XG4gICAgICAgICAgICB2YXIgYWN0dWFsU3RhcnQgPSByZWxhdGl2ZVN0YXJ0IDwgMCA/IG1heCgobGVuICsgcmVsYXRpdmVTdGFydCksIDApIDogbWluKHJlbGF0aXZlU3RhcnQsIGxlbik7XG4gICAgICAgICAgICB2YXIgYWN0dWFsRGVsZXRlQ291bnQgPSBtaW4obWF4KEVTLlRvSW50ZWdlcihkZWxldGVDb3VudCksIDApLCBsZW4gLSBhY3R1YWxTdGFydCk7XG5cbiAgICAgICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgICAgIHZhciBmcm9tO1xuICAgICAgICAgICAgd2hpbGUgKGsgPCBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgICAgICAgICAgIGZyb20gPSAkU3RyaW5nKGFjdHVhbFN0YXJ0ICsgayk7XG4gICAgICAgICAgICAgICAgaWYgKG93bnMoTywgZnJvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgQVtrXSA9IE9bZnJvbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsgKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpO1xuICAgICAgICAgICAgdmFyIGl0ZW1Db3VudCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB0bztcbiAgICAgICAgICAgIGlmIChpdGVtQ291bnQgPCBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgICAgICAgICAgIGsgPSBhY3R1YWxTdGFydDtcbiAgICAgICAgICAgICAgICB2YXIgbWF4SyA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50O1xuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbWF4Sykge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gJFN0cmluZyhrICsgYWN0dWFsRGVsZXRlQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICB0byA9ICRTdHJpbmcoayArIGl0ZW1Db3VudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvd25zKE8sIGZyb20pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgT1t0b107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgayArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBrID0gbGVuO1xuICAgICAgICAgICAgICAgIHZhciBtaW5LID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpdGVtQ291bnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGsgPiBtaW5LKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBPW2sgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgayAtPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbUNvdW50ID4gYWN0dWFsRGVsZXRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBrID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGsgPiBhY3R1YWxTdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gJFN0cmluZyhrICsgYWN0dWFsRGVsZXRlQ291bnQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgdG8gPSAkU3RyaW5nKGsgKyBpdGVtQ291bnQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG93bnMoTywgZnJvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBPW3RvXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBrIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgayA9IGFjdHVhbFN0YXJ0O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIE9ba10gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBrICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPLmxlbmd0aCA9IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50ICsgaXRlbUNvdW50O1xuXG4gICAgICAgICAgICByZXR1cm4gQTtcbiAgICAgICAgfVxuICAgIH0sICFzcGxpY2VXb3Jrc1dpdGhMYXJnZVNwYXJzZUFycmF5cyB8fCAhc3BsaWNlV29ya3NXaXRoU21hbGxTcGFyc2VBcnJheXMpO1xuXG4gICAgdmFyIG9yaWdpbmFsSm9pbiA9IEFycmF5UHJvdG90eXBlLmpvaW47XG4gICAgdmFyIGhhc1N0cmluZ0pvaW5CdWc7XG4gICAgdHJ5IHtcbiAgICAgICAgaGFzU3RyaW5nSm9pbkJ1ZyA9IEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoJzEyMycsICcsJykgIT09ICcxLDIsMyc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYXNTdHJpbmdKb2luQnVnID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGhhc1N0cmluZ0pvaW5CdWcpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydGllcyhBcnJheVByb3RvdHlwZSwge1xuICAgICAgICAgICAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VwID0gdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3VuZGVmaW5lZCcgPyAnLCcgOiBzZXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsSm9pbi5jYWxsKGlzU3RyaW5nKHRoaXMpID8gc3RyU3BsaXQodGhpcywgJycpIDogdGhpcywgc2VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaGFzU3RyaW5nSm9pbkJ1Zyk7XG4gICAgfVxuXG4gICAgdmFyIGhhc0pvaW5VbmRlZmluZWRCdWcgPSBbMSwgMl0uam9pbih1bmRlZmluZWQpICE9PSAnMSwyJztcbiAgICBpZiAoaGFzSm9pblVuZGVmaW5lZEJ1Zykge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgICAgICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgIHZhciBzZXAgPSB0eXBlb2Ygc2VwYXJhdG9yID09PSAndW5kZWZpbmVkJyA/ICcsJyA6IHNlcGFyYXRvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxKb2luLmNhbGwodGhpcywgc2VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaGFzSm9pblVuZGVmaW5lZEJ1Zyk7XG4gICAgfVxuXG4gICAgdmFyIHB1c2hTaGltID0gZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgICAgIHZhciBPID0gRVMuVG9PYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBuID0gRVMuVG9VaW50MzIoTy5sZW5ndGgpO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgT1tuICsgaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgTy5sZW5ndGggPSBuICsgaTtcbiAgICAgICAgcmV0dXJuIG4gKyBpO1xuICAgIH07XG5cbiAgICB2YXIgcHVzaElzTm90R2VuZXJpYyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwob2JqLCB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ICE9PSAxIHx8IG9iai5sZW5ndGggIT09IDEgfHwgdHlwZW9mIG9ialswXSAhPT0gJ3VuZGVmaW5lZCcgfHwgIW93bnMob2JqLCAwKTtcbiAgICB9KCkpO1xuICAgIGRlZmluZVByb3BlcnRpZXMoQXJyYXlQcm90b3R5cGUsIHtcbiAgICAgICAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheV9wdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHVzaFNoaW0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0sIHB1c2hJc05vdEdlbmVyaWMpO1xuXG4gICAgLy8gVGhpcyBmaXhlcyBhIHZlcnkgd2VpcmQgYnVnIGluIE9wZXJhIDEwLjYgd2hlbiBwdXNoaW5nIGB1bmRlZmluZWRcbiAgICB2YXIgcHVzaFVuZGVmaW5lZElzV2VpcmQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciByZXN1bHQgPSBhcnIucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ICE9PSAxIHx8IGFyci5sZW5ndGggIT09IDEgfHwgdHlwZW9mIGFyclswXSAhPT0gJ3VuZGVmaW5lZCcgfHwgIW93bnMoYXJyLCAwKTtcbiAgICB9KCkpO1xuICAgIGRlZmluZVByb3BlcnRpZXMoQXJyYXlQcm90b3R5cGUsIHsgcHVzaDogcHVzaFNoaW0gfSwgcHVzaFVuZGVmaW5lZElzV2VpcmQpO1xuXG4gICAgLy8gRVM1IDE1LjIuMy4xNFxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuNC40LjEwXG4gICAgLy8gRml4IGJveGVkIHN0cmluZyBidWdcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgIHNsaWNlOiBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICAgICAgdmFyIGFyciA9IGlzU3RyaW5nKHRoaXMpID8gc3RyU3BsaXQodGhpcywgJycpIDogdGhpcztcbiAgICAgICAgICAgIHJldHVybiBhcnJheVNsaWNlQXBwbHkoYXJyLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSwgc3BsaXRTdHJpbmcpO1xuXG4gICAgdmFyIHNvcnRJZ25vcmVzTm9uRnVuY3Rpb25zID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFsxLCAyXS5zb3J0KG51bGwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFsxLCAyXS5zb3J0KHt9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0oKSk7XG4gICAgdmFyIHNvcnRUaHJvd3NPblJlZ2V4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHByb2JsZW0gaW4gRmlyZWZveCA0LCBpbiB3aGljaCBgdHlwZW9mIC9hLyA9PT0gJ2Z1bmN0aW9uJ2BcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFsxLCAyXS5zb3J0KC9hLyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0oKSk7XG4gICAgdmFyIHNvcnRJZ25vcmVzVW5kZWZpbmVkID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXBwbGllcyBpbiBJRSA4LCBmb3Igb25lLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgWzEsIDJdLnNvcnQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSgpKTtcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKEFycmF5UHJvdG90eXBlLCB7XG4gICAgICAgIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZUZuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBhcmVGbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlTb3J0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0NhbGxhYmxlKGNvbXBhcmVGbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuc29ydCBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheVNvcnQodGhpcywgY29tcGFyZUZuKTtcbiAgICAgICAgfVxuICAgIH0sIHNvcnRJZ25vcmVzTm9uRnVuY3Rpb25zIHx8ICFzb3J0SWdub3Jlc1VuZGVmaW5lZCB8fCAhc29ydFRocm93c09uUmVnZXgpO1xuXG4gICAgLy9cbiAgICAvLyBPYmplY3RcbiAgICAvLyA9PT09PT1cbiAgICAvL1xuXG4gICAgLy8gRVM1IDE1LjIuMy4xNFxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy4xNFxuXG4gICAgLy8gaHR0cDovL3doYXR0aGVoZWFkc2FpZC5jb20vMjAxMC8xMC9hLXNhZmVyLW9iamVjdC1rZXlzLWNvbXBhdGliaWxpdHktaW1wbGVtZW50YXRpb25cbiAgICB2YXIgaGFzRG9udEVudW1CdWcgPSAhaXNFbnVtKHsgJ3RvU3RyaW5nJzogbnVsbCB9LCAndG9TdHJpbmcnKTsgLy8ganNjczppZ25vcmUgZGlzYWxsb3dRdW90ZWRLZXlzSW5PYmplY3RzXG4gICAgdmFyIGhhc1Byb3RvRW51bUJ1ZyA9IGlzRW51bShmdW5jdGlvbiAoKSB7fSwgJ3Byb3RvdHlwZScpO1xuICAgIHZhciBoYXNTdHJpbmdFbnVtQnVnID0gIW93bnMoJ3gnLCAnMCcpO1xuICAgIHZhciBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciBjdG9yID0gby5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIGN0b3IgJiYgY3Rvci5wcm90b3R5cGUgPT09IG87XG4gICAgfTtcbiAgICB2YXIgZXhjbHVkZWRLZXlzID0ge1xuICAgICAgICAkd2luZG93OiB0cnVlLFxuICAgICAgICAkY29uc29sZTogdHJ1ZSxcbiAgICAgICAgJHBhcmVudDogdHJ1ZSxcbiAgICAgICAgJHNlbGY6IHRydWUsXG4gICAgICAgICRmcmFtZTogdHJ1ZSxcbiAgICAgICAgJGZyYW1lczogdHJ1ZSxcbiAgICAgICAgJGZyYW1lRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgJHdlYmtpdEluZGV4ZWREQjogdHJ1ZSxcbiAgICAgICAgJHdlYmtpdFN0b3JhZ2VJbmZvOiB0cnVlLFxuICAgICAgICAkZXh0ZXJuYWw6IHRydWUsXG4gICAgICAgICR3aWR0aDogdHJ1ZSxcbiAgICAgICAgJGhlaWdodDogdHJ1ZSxcbiAgICAgICAgJHRvcDogdHJ1ZSxcbiAgICAgICAgJGxvY2FsU3RvcmFnZTogdHJ1ZVxuICAgIH07XG4gICAgdmFyIGhhc0F1dG9tYXRpb25FcXVhbGl0eUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qIGdsb2JhbHMgd2luZG93ICovXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGsgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZWRLZXlzWyckJyArIGtdICYmIG93bnMod2luZG93LCBrKSAmJiB3aW5kb3dba10gIT09IG51bGwgJiYgdHlwZW9mIHdpbmRvd1trXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUod2luZG93W2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0oKSk7XG4gICAgdmFyIGVxdWFsc0NvbnN0cnVjdG9yUHJvdG90eXBlSWZOb3RCdWdneSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNBdXRvbWF0aW9uRXF1YWxpdHlCdWcpIHtcbiAgICAgICAgICAgIHJldHVybiBlcXVhbHNDb25zdHJ1Y3RvclByb3RvdHlwZShvYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGUob2JqZWN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZG9udEVudW1zID0gW1xuICAgICAgICAndG9TdHJpbmcnLFxuICAgICAgICAndG9Mb2NhbGVTdHJpbmcnLFxuICAgICAgICAndmFsdWVPZicsXG4gICAgICAgICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgICAgICdpc1Byb3RvdHlwZU9mJyxcbiAgICAgICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgICAgICAgJ2NvbnN0cnVjdG9yJ1xuICAgIF07XG4gICAgdmFyIGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XG5cbiAgICAvLyB0YWtlbiBkaXJlY3RseSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvaXMtYXJndW1lbnRzL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gICAgLy8gY2FuIGJlIHJlcGxhY2VkIHdpdGggcmVxdWlyZSgnaXMtYXJndW1lbnRzJykgaWYgd2UgZXZlciB1c2UgYSBidWlsZCBwcm9jZXNzIGluc3RlYWRcbiAgICB2YXIgaXNTdGFuZGFyZEFyZ3VtZW50cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0b1N0cih2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuICAgIH07XG4gICAgdmFyIGlzTGVnYWN5QXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsXG4gICAgICAgICAgICAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAmJiB0eXBlb2YgdmFsdWUubGVuZ3RoID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgJiYgdmFsdWUubGVuZ3RoID49IDBcbiAgICAgICAgICAgICYmICFpc0FycmF5KHZhbHVlKVxuICAgICAgICAgICAgJiYgaXNDYWxsYWJsZSh2YWx1ZS5jYWxsZWUpO1xuICAgIH07XG4gICAgdmFyIGlzQXJndW1lbnRzID0gaXNTdGFuZGFyZEFyZ3VtZW50cyhhcmd1bWVudHMpID8gaXNTdGFuZGFyZEFyZ3VtZW50cyA6IGlzTGVnYWN5QXJndW1lbnRzO1xuXG4gICAgZGVmaW5lUHJvcGVydGllcygkT2JqZWN0LCB7XG4gICAgICAgIGtleXM6IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgaXNGbiA9IGlzQ2FsbGFibGUob2JqZWN0KTtcbiAgICAgICAgICAgIHZhciBpc0FyZ3MgPSBpc0FyZ3VtZW50cyhvYmplY3QpO1xuICAgICAgICAgICAgdmFyIGlzT2JqZWN0ID0gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xuICAgICAgICAgICAgdmFyIGlzU3RyID0gaXNPYmplY3QgJiYgaXNTdHJpbmcob2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKCFpc09iamVjdCAmJiAhaXNGbiAmJiAhaXNBcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGhlS2V5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIHNraXBQcm90byA9IGhhc1Byb3RvRW51bUJ1ZyAmJiBpc0ZuO1xuICAgICAgICAgICAgaWYgKChpc1N0ciAmJiBoYXNTdHJpbmdFbnVtQnVnKSB8fCBpc0FyZ3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBwdXNoQ2FsbCh0aGVLZXlzLCAkU3RyaW5nKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNBcmdzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBvd25zKG9iamVjdCwgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hDYWxsKHRoZUtleXMsICRTdHJpbmcobmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGFzRG9udEVudW1CdWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2tpcENvbnN0cnVjdG9yID0gZXF1YWxzQ29uc3RydWN0b3JQcm90b3R5cGVJZk5vdEJ1Z2d5KG9iamVjdCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb250RW51bXNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9udEVudW0gPSBkb250RW51bXNbal07XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgb3ducyhvYmplY3QsIGRvbnRFbnVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaENhbGwodGhlS2V5cywgZG9udEVudW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoZUtleXM7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBrZXlzV29ya3NXaXRoQXJndW1lbnRzID0gJE9iamVjdC5rZXlzICYmIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFNhZmFyaSA1LjAgYnVnXG4gICAgICAgIHJldHVybiAkT2JqZWN0LmtleXMoYXJndW1lbnRzKS5sZW5ndGggPT09IDI7XG4gICAgfSgxLCAyKSk7XG4gICAgdmFyIGtleXNIYXNBcmd1bWVudHNMZW5ndGhCdWcgPSAkT2JqZWN0LmtleXMgJiYgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ0tleXMgPSAkT2JqZWN0LmtleXMoYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggIT09IDEgfHwgYXJnS2V5cy5sZW5ndGggIT09IDEgfHwgYXJnS2V5c1swXSAhPT0gMTtcbiAgICB9KDEpKTtcbiAgICB2YXIgb3JpZ2luYWxLZXlzID0gJE9iamVjdC5rZXlzO1xuICAgIGRlZmluZVByb3BlcnRpZXMoJE9iamVjdCwge1xuICAgICAgICBrZXlzOiBmdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGlzQXJndW1lbnRzKG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxLZXlzKGFycmF5U2xpY2Uob2JqZWN0KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEtleXMob2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sICFrZXlzV29ya3NXaXRoQXJndW1lbnRzIHx8IGtleXNIYXNBcmd1bWVudHNMZW5ndGhCdWcpO1xuXG4gICAgLy9cbiAgICAvLyBEYXRlXG4gICAgLy8gPT09PVxuICAgIC8vXG5cbiAgICB2YXIgaGFzTmVnYXRpdmVNb250aFllYXJCdWcgPSBuZXcgRGF0ZSgtMzUwOTgyNzMyOTYwMDI5MikuZ2V0VVRDTW9udGgoKSAhPT0gMDtcbiAgICB2YXIgYU5lZ2F0aXZlVGVzdERhdGUgPSBuZXcgRGF0ZSgtMTUwOTg0MjI4OTYwMDI5Mik7XG4gICAgdmFyIGFQb3NpdGl2ZVRlc3REYXRlID0gbmV3IERhdGUoMTQ0OTY2MjQwMDAwMCk7XG4gICAgdmFyIGhhc1RvVVRDU3RyaW5nRm9ybWF0QnVnID0gYU5lZ2F0aXZlVGVzdERhdGUudG9VVENTdHJpbmcoKSAhPT0gJ01vbiwgMDEgSmFuIC00NTg3NSAxMTo1OTo1OSBHTVQnO1xuICAgIHZhciBoYXNUb0RhdGVTdHJpbmdGb3JtYXRCdWc7XG4gICAgdmFyIGhhc1RvU3RyaW5nRm9ybWF0QnVnO1xuICAgIHZhciB0aW1lWm9uZU9mZnNldCA9IGFOZWdhdGl2ZVRlc3REYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWVab25lT2Zmc2V0IDwgLTcyMCkge1xuICAgICAgICBoYXNUb0RhdGVTdHJpbmdGb3JtYXRCdWcgPSBhTmVnYXRpdmVUZXN0RGF0ZS50b0RhdGVTdHJpbmcoKSAhPT0gJ1R1ZSBKYW4gMDIgLTQ1ODc1JztcbiAgICAgICAgaGFzVG9TdHJpbmdGb3JtYXRCdWcgPSAhKC9eVGh1IERlYyAxMCAyMDE1IFxcZFxcZDpcXGRcXGQ6XFxkXFxkIEdNVFstK11cXGRcXGRcXGRcXGQoPzogfCQpLykudGVzdChTdHJpbmcoYVBvc2l0aXZlVGVzdERhdGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYXNUb0RhdGVTdHJpbmdGb3JtYXRCdWcgPSBhTmVnYXRpdmVUZXN0RGF0ZS50b0RhdGVTdHJpbmcoKSAhPT0gJ01vbiBKYW4gMDEgLTQ1ODc1JztcbiAgICAgICAgaGFzVG9TdHJpbmdGb3JtYXRCdWcgPSAhKC9eV2VkIERlYyAwOSAyMDE1IFxcZFxcZDpcXGRcXGQ6XFxkXFxkIEdNVFstK11cXGRcXGRcXGRcXGQoPzogfCQpLykudGVzdChTdHJpbmcoYVBvc2l0aXZlVGVzdERhdGUpKTtcbiAgICB9XG5cbiAgICB2YXIgb3JpZ2luYWxHZXRGdWxsWWVhciA9IGNhbGwuYmluZChEYXRlLnByb3RvdHlwZS5nZXRGdWxsWWVhcik7XG4gICAgdmFyIG9yaWdpbmFsR2V0TW9udGggPSBjYWxsLmJpbmQoRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGgpO1xuICAgIHZhciBvcmlnaW5hbEdldERhdGUgPSBjYWxsLmJpbmQoRGF0ZS5wcm90b3R5cGUuZ2V0RGF0ZSk7XG4gICAgdmFyIG9yaWdpbmFsR2V0VVRDRnVsbFllYXIgPSBjYWxsLmJpbmQoRGF0ZS5wcm90b3R5cGUuZ2V0VVRDRnVsbFllYXIpO1xuICAgIHZhciBvcmlnaW5hbEdldFVUQ01vbnRoID0gY2FsbC5iaW5kKERhdGUucHJvdG90eXBlLmdldFVUQ01vbnRoKTtcbiAgICB2YXIgb3JpZ2luYWxHZXRVVENEYXRlID0gY2FsbC5iaW5kKERhdGUucHJvdG90eXBlLmdldFVUQ0RhdGUpO1xuICAgIHZhciBvcmlnaW5hbEdldFVUQ0RheSA9IGNhbGwuYmluZChEYXRlLnByb3RvdHlwZS5nZXRVVENEYXkpO1xuICAgIHZhciBvcmlnaW5hbEdldFVUQ0hvdXJzID0gY2FsbC5iaW5kKERhdGUucHJvdG90eXBlLmdldFVUQ0hvdXJzKTtcbiAgICB2YXIgb3JpZ2luYWxHZXRVVENNaW51dGVzID0gY2FsbC5iaW5kKERhdGUucHJvdG90eXBlLmdldFVUQ01pbnV0ZXMpO1xuICAgIHZhciBvcmlnaW5hbEdldFVUQ1NlY29uZHMgPSBjYWxsLmJpbmQoRGF0ZS5wcm90b3R5cGUuZ2V0VVRDU2Vjb25kcyk7XG4gICAgdmFyIG9yaWdpbmFsR2V0VVRDTWlsbGlzZWNvbmRzID0gY2FsbC5iaW5kKERhdGUucHJvdG90eXBlLmdldFVUQ01pbGxpc2Vjb25kcyk7XG4gICAgdmFyIGRheU5hbWUgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddO1xuICAgIHZhciBtb250aE5hbWUgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG4gICAgdmFyIGRheXNJbk1vbnRoID0gZnVuY3Rpb24gZGF5c0luTW9udGgobW9udGgsIHllYXIpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsR2V0RGF0ZShuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkpO1xuICAgIH07XG5cbiAgICBkZWZpbmVQcm9wZXJ0aWVzKERhdGUucHJvdG90eXBlLCB7XG4gICAgICAgIGdldEZ1bGxZZWFyOiBmdW5jdGlvbiBnZXRGdWxsWWVhcigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcyB8fCAhKHRoaXMgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbm90IGEgRGF0ZSBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeWVhciA9IG9yaWdpbmFsR2V0RnVsbFllYXIodGhpcyk7XG4gICAgICAgICAgICBpZiAoeWVhciA8IDAgJiYgb3JpZ2luYWxHZXRNb250aCh0aGlzKSA+IDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHllYXIgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHllYXI7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE1vbnRoOiBmdW5jdGlvbiBnZXRNb250aCgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcyB8fCAhKHRoaXMgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbm90IGEgRGF0ZSBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeWVhciA9IG9yaWdpbmFsR2V0RnVsbFllYXIodGhpcyk7XG4gICAgICAgICAgICB2YXIgbW9udGggPSBvcmlnaW5hbEdldE1vbnRoKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHllYXIgPCAwICYmIG1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtb250aDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF0ZTogZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcyB8fCAhKHRoaXMgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbm90IGEgRGF0ZSBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeWVhciA9IG9yaWdpbmFsR2V0RnVsbFllYXIodGhpcyk7XG4gICAgICAgICAgICB2YXIgbW9udGggPSBvcmlnaW5hbEdldE1vbnRoKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBvcmlnaW5hbEdldERhdGUodGhpcyk7XG4gICAgICAgICAgICBpZiAoeWVhciA8IDAgJiYgbW9udGggPiAxMSkge1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXlzID0gZGF5c0luTW9udGgoMCwgeWVhciArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoZGF5cyAtIGRhdGUpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9LFxuICAgICAgICBnZXRVVENGdWxsWWVhcjogZnVuY3Rpb24gZ2V0VVRDRnVsbFllYXIoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMgfHwgISh0aGlzIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIGlzIG5vdCBhIERhdGUgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHllYXIgPSBvcmlnaW5hbEdldFVUQ0Z1bGxZZWFyKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHllYXIgPCAwICYmIG9yaWdpbmFsR2V0VVRDTW9udGgodGhpcykgPiAxMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB5ZWFyICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB5ZWFyO1xuICAgICAgICB9LFxuICAgICAgICBnZXRVVENNb250aDogZnVuY3Rpb24gZ2V0VVRDTW9udGgoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMgfHwgISh0aGlzIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIGlzIG5vdCBhIERhdGUgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHllYXIgPSBvcmlnaW5hbEdldFVUQ0Z1bGxZZWFyKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gb3JpZ2luYWxHZXRVVENNb250aCh0aGlzKTtcbiAgICAgICAgICAgIGlmICh5ZWFyIDwgMCAmJiBtb250aCA+IDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbW9udGg7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFVUQ0RhdGU6IGZ1bmN0aW9uIGdldFVUQ0RhdGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMgfHwgISh0aGlzIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIGlzIG5vdCBhIERhdGUgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHllYXIgPSBvcmlnaW5hbEdldFVUQ0Z1bGxZZWFyKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gb3JpZ2luYWxHZXRVVENNb250aCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gb3JpZ2luYWxHZXRVVENEYXRlKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHllYXIgPCAwICYmIG1vbnRoID4gMTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IGRheXNJbk1vbnRoKDAsIHllYXIgKyAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRheXMgLSBkYXRlKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgIH0sIGhhc05lZ2F0aXZlTW9udGhZZWFyQnVnKTtcblxuICAgIGRlZmluZVByb3BlcnRpZXMoRGF0ZS5wcm90b3R5cGUsIHtcbiAgICAgICAgdG9VVENTdHJpbmc6IGZ1bmN0aW9uIHRvVVRDU3RyaW5nKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzIHx8ICEodGhpcyBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGhpcyBpcyBub3QgYSBEYXRlIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXkgPSBvcmlnaW5hbEdldFVUQ0RheSh0aGlzKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gb3JpZ2luYWxHZXRVVENEYXRlKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gb3JpZ2luYWxHZXRVVENNb250aCh0aGlzKTtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gb3JpZ2luYWxHZXRVVENGdWxsWWVhcih0aGlzKTtcbiAgICAgICAgICAgIHZhciBob3VyID0gb3JpZ2luYWxHZXRVVENIb3Vycyh0aGlzKTtcbiAgICAgICAgICAgIHZhciBtaW51dGUgPSBvcmlnaW5hbEdldFVUQ01pbnV0ZXModGhpcyk7XG4gICAgICAgICAgICB2YXIgc2Vjb25kID0gb3JpZ2luYWxHZXRVVENTZWNvbmRzKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGRheU5hbWVbZGF5XSArICcsICdcbiAgICAgICAgICAgICAgICArIChkYXRlIDwgMTAgPyAnMCcgKyBkYXRlIDogZGF0ZSkgKyAnICdcbiAgICAgICAgICAgICAgICArIG1vbnRoTmFtZVttb250aF0gKyAnICdcbiAgICAgICAgICAgICAgICArIHllYXIgKyAnICdcbiAgICAgICAgICAgICAgICArIChob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cikgKyAnOidcbiAgICAgICAgICAgICAgICArIChtaW51dGUgPCAxMCA/ICcwJyArIG1pbnV0ZSA6IG1pbnV0ZSkgKyAnOidcbiAgICAgICAgICAgICAgICArIChzZWNvbmQgPCAxMCA/ICcwJyArIHNlY29uZCA6IHNlY29uZCkgKyAnIEdNVCc7XG4gICAgICAgIH1cbiAgICB9LCBoYXNOZWdhdGl2ZU1vbnRoWWVhckJ1ZyB8fCBoYXNUb1VUQ1N0cmluZ0Zvcm1hdEJ1Zyk7XG5cbiAgICAvLyBPcGVyYSAxMiBoYXMgYCxgXG4gICAgZGVmaW5lUHJvcGVydGllcyhEYXRlLnByb3RvdHlwZSwge1xuICAgICAgICB0b0RhdGVTdHJpbmc6IGZ1bmN0aW9uIHRvRGF0ZVN0cmluZygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcyB8fCAhKHRoaXMgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbm90IGEgRGF0ZSBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF5ID0gdGhpcy5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gdGhpcy5nZXREYXRlKCk7XG4gICAgICAgICAgICB2YXIgbW9udGggPSB0aGlzLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2YXIgeWVhciA9IHRoaXMuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHJldHVybiBkYXlOYW1lW2RheV0gKyAnICdcbiAgICAgICAgICAgICAgICArIG1vbnRoTmFtZVttb250aF0gKyAnICdcbiAgICAgICAgICAgICAgICArIChkYXRlIDwgMTAgPyAnMCcgKyBkYXRlIDogZGF0ZSkgKyAnICdcbiAgICAgICAgICAgICAgICArIHllYXI7XG4gICAgICAgIH1cbiAgICB9LCBoYXNOZWdhdGl2ZU1vbnRoWWVhckJ1ZyB8fCBoYXNUb0RhdGVTdHJpbmdGb3JtYXRCdWcpO1xuXG4gICAgLy8gY2FuJ3QgdXNlIGRlZmluZVByb3BlcnRpZXMgaGVyZSBiZWNhdXNlIG9mIHRvU3RyaW5nIGVudW1lcmF0aW9uIGlzc3VlIGluIElFIDw9IDhcbiAgICBpZiAoaGFzTmVnYXRpdmVNb250aFllYXJCdWcgfHwgaGFzVG9TdHJpbmdGb3JtYXRCdWcpIHtcbiAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcyB8fCAhKHRoaXMgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RoaXMgaXMgbm90IGEgRGF0ZSBvYmplY3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF5ID0gdGhpcy5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gdGhpcy5nZXREYXRlKCk7XG4gICAgICAgICAgICB2YXIgbW9udGggPSB0aGlzLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2YXIgeWVhciA9IHRoaXMuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIHZhciBob3VyID0gdGhpcy5nZXRIb3VycygpO1xuICAgICAgICAgICAgdmFyIG1pbnV0ZSA9IHRoaXMuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgdmFyIHNlY29uZCA9IHRoaXMuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gdGhpcy5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIGhvdXJzT2Zmc2V0ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aW1lem9uZU9mZnNldCkgLyA2MCk7XG4gICAgICAgICAgICB2YXIgbWludXRlc09mZnNldCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGltZXpvbmVPZmZzZXQpICUgNjApO1xuICAgICAgICAgICAgcmV0dXJuIGRheU5hbWVbZGF5XSArICcgJ1xuICAgICAgICAgICAgICAgICsgbW9udGhOYW1lW21vbnRoXSArICcgJ1xuICAgICAgICAgICAgICAgICsgKGRhdGUgPCAxMCA/ICcwJyArIGRhdGUgOiBkYXRlKSArICcgJ1xuICAgICAgICAgICAgICAgICsgeWVhciArICcgJ1xuICAgICAgICAgICAgICAgICsgKGhvdXIgPCAxMCA/ICcwJyArIGhvdXIgOiBob3VyKSArICc6J1xuICAgICAgICAgICAgICAgICsgKG1pbnV0ZSA8IDEwID8gJzAnICsgbWludXRlIDogbWludXRlKSArICc6J1xuICAgICAgICAgICAgICAgICsgKHNlY29uZCA8IDEwID8gJzAnICsgc2Vjb25kIDogc2Vjb25kKSArICcgR01UJ1xuICAgICAgICAgICAgICAgICsgKHRpbWV6b25lT2Zmc2V0ID4gMCA/ICctJyA6ICcrJylcbiAgICAgICAgICAgICAgICArIChob3Vyc09mZnNldCA8IDEwID8gJzAnICsgaG91cnNPZmZzZXQgOiBob3Vyc09mZnNldClcbiAgICAgICAgICAgICAgICArIChtaW51dGVzT2Zmc2V0IDwgMTAgPyAnMCcgKyBtaW51dGVzT2Zmc2V0IDogbWludXRlc09mZnNldCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChzdXBwb3J0c0Rlc2NyaXB0b3JzKSB7XG4gICAgICAgICAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5KERhdGUucHJvdG90eXBlLCAndG9TdHJpbmcnLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVTNSAxNS45LjUuNDNcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS45LjUuNDNcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBTdHJpbmcgdmFsdWUgcmVwcmVzZW50IHRoZSBpbnN0YW5jZSBpbiB0aW1lXG4gICAgLy8gcmVwcmVzZW50ZWQgYnkgdGhpcyBEYXRlIG9iamVjdC4gVGhlIGZvcm1hdCBvZiB0aGUgU3RyaW5nIGlzIHRoZSBEYXRlIFRpbWVcbiAgICAvLyBzdHJpbmcgZm9ybWF0IGRlZmluZWQgaW4gMTUuOS4xLjE1LiBBbGwgZmllbGRzIGFyZSBwcmVzZW50IGluIHRoZSBTdHJpbmcuXG4gICAgLy8gVGhlIHRpbWUgem9uZSBpcyBhbHdheXMgVVRDLCBkZW5vdGVkIGJ5IHRoZSBzdWZmaXggWi4gSWYgdGhlIHRpbWUgdmFsdWUgb2ZcbiAgICAvLyB0aGlzIG9iamVjdCBpcyBub3QgYSBmaW5pdGUgTnVtYmVyIGEgUmFuZ2VFcnJvciBleGNlcHRpb24gaXMgdGhyb3duLlxuICAgIHZhciBuZWdhdGl2ZURhdGUgPSAtNjIxOTg3NTUyMDAwMDA7XG4gICAgdmFyIG5lZ2F0aXZlWWVhclN0cmluZyA9ICctMDAwMDAxJztcbiAgICB2YXIgaGFzTmVnYXRpdmVEYXRlQnVnID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgJiYgbmV3IERhdGUobmVnYXRpdmVEYXRlKS50b0lTT1N0cmluZygpLmluZGV4T2YobmVnYXRpdmVZZWFyU3RyaW5nKSA9PT0gLTE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIHZhciBoYXNTYWZhcmk1MURhdGVCdWcgPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyAmJiBuZXcgRGF0ZSgtMSkudG9JU09TdHJpbmcoKSAhPT0gJzE5NjktMTItMzFUMjM6NTk6NTkuOTk5Wic7XG5cbiAgICB2YXIgZ2V0VGltZSA9IGNhbGwuYmluZChEYXRlLnByb3RvdHlwZS5nZXRUaW1lKTtcblxuICAgIGRlZmluZVByb3BlcnRpZXMoRGF0ZS5wcm90b3R5cGUsIHtcbiAgICAgICAgdG9JU09TdHJpbmc6IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCkge1xuICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZSh0aGlzKSB8fCAhaXNGaW5pdGUoZ2V0VGltZSh0aGlzKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBZG9wZSBQaG90b3Nob3AgcmVxdWlyZXMgdGhlIHNlY29uZCBjaGVjay5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcgY2FsbGVkIG9uIG5vbi1maW5pdGUgdmFsdWUuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB5ZWFyID0gb3JpZ2luYWxHZXRVVENGdWxsWWVhcih0aGlzKTtcblxuICAgICAgICAgICAgdmFyIG1vbnRoID0gb3JpZ2luYWxHZXRVVENNb250aCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzExMVxuICAgICAgICAgICAgeWVhciArPSBNYXRoLmZsb29yKG1vbnRoIC8gMTIpO1xuICAgICAgICAgICAgbW9udGggPSAoKG1vbnRoICUgMTIpICsgMTIpICUgMTI7XG5cbiAgICAgICAgICAgIC8vIHRoZSBkYXRlIHRpbWUgc3RyaW5nIGZvcm1hdCBpcyBzcGVjaWZpZWQgaW4gMTUuOS4xLjE1LlxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgICAgICAgICBtb250aCArIDEsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxHZXRVVENEYXRlKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsR2V0VVRDSG91cnModGhpcyksXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxHZXRVVENNaW51dGVzKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsR2V0VVRDU2Vjb25kcyh0aGlzKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHllYXIgPSAoXG4gICAgICAgICAgICAgICAgKHllYXIgPCAwID8gJy0nIDogKHllYXIgPiA5OTk5ID8gJysnIDogJycpKVxuICAgICAgICAgICAgICAgICsgc3RyU2xpY2UoJzAwMDAwJyArIE1hdGguYWJzKHllYXIpLCAoMCA8PSB5ZWFyICYmIHllYXIgPD0gOTk5OSkgPyAtNCA6IC02KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAvLyBwYWQgbW9udGhzLCBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMgdG8gaGF2ZSB0d28gZGlnaXRzLlxuICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IHN0clNsaWNlKCcwMCcgKyByZXN1bHRbaV0sIC0yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBhZCBtaWxsaXNlY29uZHMgdG8gaGF2ZSB0aHJlZSBkaWdpdHMuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHllYXIgKyAnLScgKyBhcnJheVNsaWNlKHJlc3VsdCwgMCwgMikuam9pbignLScpXG4gICAgICAgICAgICAgICAgKyAnVCcgKyBhcnJheVNsaWNlKHJlc3VsdCwgMikuam9pbignOicpICsgJy4nXG4gICAgICAgICAgICAgICAgKyBzdHJTbGljZSgnMDAwJyArIG9yaWdpbmFsR2V0VVRDTWlsbGlzZWNvbmRzKHRoaXMpLCAtMykgKyAnWidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCBoYXNOZWdhdGl2ZURhdGVCdWcgfHwgaGFzU2FmYXJpNTFEYXRlQnVnKTtcblxuICAgIC8vIEVTNSAxNS45LjUuNDRcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS45LjUuNDRcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGEgU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgRGF0ZSBvYmplY3QgZm9yIHVzZSBieVxuICAgIC8vIEpTT04uc3RyaW5naWZ5ICgxNS4xMi4zKS5cbiAgICB2YXIgZGF0ZVRvSlNPTklzU3VwcG9ydGVkID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS50b0pTT05cbiAgICAgICAgICAgICAgICAmJiBuZXcgRGF0ZShOYU4pLnRvSlNPTigpID09PSBudWxsXG4gICAgICAgICAgICAgICAgJiYgbmV3IERhdGUobmVnYXRpdmVEYXRlKS50b0pTT04oKS5pbmRleE9mKG5lZ2F0aXZlWWVhclN0cmluZykgIT09IC0xXG4gICAgICAgICAgICAgICAgJiYgRGF0ZS5wcm90b3R5cGUudG9KU09OLmNhbGwoeyAvLyBnZW5lcmljXG4gICAgICAgICAgICAgICAgICAgIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0oKSk7XG4gICAgaWYgKCFkYXRlVG9KU09OSXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKGtleSkge1xuICAgICAgICAgICAgLy8gV2hlbiB0aGUgdG9KU09OIG1ldGhvZCBpcyBjYWxsZWQgd2l0aCBhcmd1bWVudCBrZXksIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgICAgIC8vIHN0ZXBzIGFyZSB0YWtlbjpcblxuICAgICAgICAgICAgLy8gMS4gIExldCBPIGJlIHRoZSByZXN1bHQgb2YgY2FsbGluZyBUb09iamVjdCwgZ2l2aW5nIGl0IHRoZSB0aGlzXG4gICAgICAgICAgICAvLyB2YWx1ZSBhcyBpdHMgYXJndW1lbnQuXG4gICAgICAgICAgICAvLyAyLiBMZXQgdHYgYmUgRVMuVG9QcmltaXRpdmUoTywgaGludCBOdW1iZXIpLlxuICAgICAgICAgICAgdmFyIE8gPSAkT2JqZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIHR2ID0gRVMuVG9QcmltaXRpdmUoTyk7XG4gICAgICAgICAgICAvLyAzLiBJZiB0diBpcyBhIE51bWJlciBhbmQgaXMgbm90IGZpbml0ZSwgcmV0dXJuIG51bGwuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHR2ID09PSAnbnVtYmVyJyAmJiAhaXNGaW5pdGUodHYpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyA0LiBMZXQgdG9JU08gYmUgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIHRoZSBbW0dldF1dIGludGVybmFsIG1ldGhvZCBvZlxuICAgICAgICAgICAgLy8gTyB3aXRoIGFyZ3VtZW50IFwidG9JU09TdHJpbmdcIi5cbiAgICAgICAgICAgIHZhciB0b0lTTyA9IE8udG9JU09TdHJpbmc7XG4gICAgICAgICAgICAvLyA1LiBJZiBJc0NhbGxhYmxlKHRvSVNPKSBpcyBmYWxzZSwgdGhyb3cgYSBUeXBlRXJyb3IgZXhjZXB0aW9uLlxuICAgICAgICAgICAgaWYgKCFpc0NhbGxhYmxlKHRvSVNPKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RvSVNPU3RyaW5nIHByb3BlcnR5IGlzIG5vdCBjYWxsYWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gNi4gUmV0dXJuIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgW1tDYWxsXV0gaW50ZXJuYWwgbWV0aG9kIG9mXG4gICAgICAgICAgICAvLyAgdG9JU08gd2l0aCBPIGFzIHRoZSB0aGlzIHZhbHVlIGFuZCBhbiBlbXB0eSBhcmd1bWVudCBsaXN0LlxuICAgICAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoTyk7XG5cbiAgICAgICAgICAgIC8vIE5PVEUgMSBUaGUgYXJndW1lbnQgaXMgaWdub3JlZC5cblxuICAgICAgICAgICAgLy8gTk9URSAyIFRoZSB0b0pTT04gZnVuY3Rpb24gaXMgaW50ZW50aW9uYWxseSBnZW5lcmljOyBpdCBkb2VzIG5vdFxuICAgICAgICAgICAgLy8gcmVxdWlyZSB0aGF0IGl0cyB0aGlzIHZhbHVlIGJlIGEgRGF0ZSBvYmplY3QuIFRoZXJlZm9yZSwgaXQgY2FuIGJlXG4gICAgICAgICAgICAvLyB0cmFuc2ZlcnJlZCB0byBvdGhlciBraW5kcyBvZiBvYmplY3RzIGZvciB1c2UgYXMgYSBtZXRob2QuIEhvd2V2ZXIsXG4gICAgICAgICAgICAvLyBpdCBkb2VzIHJlcXVpcmUgdGhhdCBhbnkgc3VjaCBvYmplY3QgaGF2ZSBhIHRvSVNPU3RyaW5nIG1ldGhvZC4gQW5cbiAgICAgICAgICAgIC8vIG9iamVjdCBpcyBmcmVlIHRvIHVzZSB0aGUgYXJndW1lbnQga2V5IHRvIGZpbHRlciBpdHNcbiAgICAgICAgICAgIC8vIHN0cmluZ2lmaWNhdGlvbi5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFUzUgMTUuOS40LjJcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS45LjQuMlxuICAgIC8vIGJhc2VkIG9uIHdvcmsgc2hhcmVkIGJ5IERhbmllbCBGcmllc2VuIChkYW50bWFuKVxuICAgIC8vIGh0dHA6Ly9naXN0LmdpdGh1Yi5jb20vMzAzMjQ5XG4gICAgdmFyIHN1cHBvcnRzRXh0ZW5kZWRZZWFycyA9IERhdGUucGFyc2UoJyswMzM2NTgtMDktMjdUMDE6NDY6NDAuMDAwWicpID09PSAxZTE1O1xuICAgIHZhciBhY2NlcHRzSW52YWxpZERhdGVzID0gIWlzTmFOKERhdGUucGFyc2UoJzIwMTItMDQtMDRUMjQ6MDA6MDAuNTAwWicpKSB8fCAhaXNOYU4oRGF0ZS5wYXJzZSgnMjAxMi0xMS0zMVQyMzo1OTo1OS4wMDBaJykpIHx8ICFpc05hTihEYXRlLnBhcnNlKCcyMDEyLTEyLTMxVDIzOjU5OjYwLjAwMFonKSk7XG4gICAgdmFyIGRvZXNOb3RQYXJzZVkyS05ld1llYXIgPSBpc05hTihEYXRlLnBhcnNlKCcyMDAwLTAxLTAxVDAwOjAwOjAwLjAwMFonKSk7XG4gICAgaWYgKGRvZXNOb3RQYXJzZVkyS05ld1llYXIgfHwgYWNjZXB0c0ludmFsaWREYXRlcyB8fCAhc3VwcG9ydHNFeHRlbmRlZFllYXJzKSB7XG4gICAgICAgIC8vIFhYWCBnbG9iYWwgYXNzaWdubWVudCB3b24ndCB3b3JrIGluIGVtYmVkZGluZ3MgdGhhdCB1c2VcbiAgICAgICAgLy8gYW4gYWx0ZXJuYXRlIG9iamVjdCBmb3IgdGhlIGNvbnRleHQuXG4gICAgICAgIC8qIGdsb2JhbCBEYXRlOiB0cnVlICovXG4gICAgICAgIHZhciBtYXhTYWZlVW5zaWduZWQzMkJpdCA9IE1hdGgucG93KDIsIDMxKSAtIDE7XG4gICAgICAgIHZhciBoYXNTYWZhcmlTaWduZWRJbnRCdWcgPSBpc0FjdHVhbE5hTihuZXcgRGF0ZSgxOTcwLCAwLCAxLCAwLCAwLCAwLCBtYXhTYWZlVW5zaWduZWQzMkJpdCArIDEpLmdldFRpbWUoKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1nbG9iYWxzLCBuby1nbG9iYWwtYXNzaWduXG4gICAgICAgIERhdGUgPSAoZnVuY3Rpb24gKE5hdGl2ZURhdGUpIHtcbiAgICAgICAgICAgIC8vIERhdGUubGVuZ3RoID09PSA3XG4gICAgICAgICAgICB2YXIgRGF0ZVNoaW0gPSBmdW5jdGlvbiBEYXRlKFksIE0sIEQsIGgsIG0sIHMsIG1zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYXRpdmVEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWNvbmRzID0gcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbGxpcyA9IG1zO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzU2FmYXJpU2lnbmVkSW50QnVnICYmIGxlbmd0aCA+PSA3ICYmIG1zID4gbWF4U2FmZVVuc2lnbmVkMzJCaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdvcmsgYXJvdW5kIGEgU2FmYXJpIDgvOSBidWcgd2hlcmUgaXQgdHJlYXRzIHRoZSBzZWNvbmRzIGFzIHNpZ25lZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zVG9TaGlmdCA9IE1hdGguZmxvb3IobXMgLyBtYXhTYWZlVW5zaWduZWQzMkJpdCkgKiBtYXhTYWZlVW5zaWduZWQzMkJpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzVG9TaGlmdCA9IE1hdGguZmxvb3IobXNUb1NoaWZ0IC8gMWUzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgKz0gc1RvU2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWxsaXMgLT0gc1RvU2hpZnQgKiAxZTM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGxlbmd0aCA9PT0gMSAmJiAkU3RyaW5nKFkpID09PSBZIC8vIGlzU3RyaW5nKFkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBleHBsaWNpdGx5IHBhc3MgaXQgdGhyb3VnaCBwYXJzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IE5hdGl2ZURhdGUoRGF0ZVNoaW0ucGFyc2UoWSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRvIG1hbnVhbGx5IG1ha2UgY2FsbHMgZGVwZW5kaW5nIG9uIGFyZ3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZW5ndGggaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsZW5ndGggPj0gNyA/IG5ldyBOYXRpdmVEYXRlKFksIE0sIEQsIGgsIG0sIHNlY29uZHMsIG1pbGxpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlbmd0aCA+PSA2ID8gbmV3IE5hdGl2ZURhdGUoWSwgTSwgRCwgaCwgbSwgc2Vjb25kcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZW5ndGggPj0gNSA/IG5ldyBOYXRpdmVEYXRlKFksIE0sIEQsIGgsIG0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlbmd0aCA+PSA0ID8gbmV3IE5hdGl2ZURhdGUoWSwgTSwgRCwgaClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlbmd0aCA+PSAzID8gbmV3IE5hdGl2ZURhdGUoWSwgTSwgRClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZW5ndGggPj0gMiA/IG5ldyBOYXRpdmVEYXRlKFksIE0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlbmd0aCA+PSAxID8gbmV3IE5hdGl2ZURhdGUoWSBpbnN0YW5jZW9mIE5hdGl2ZURhdGUgPyArWSA6IFkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgTmF0aXZlRGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBOYXRpdmVEYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaXNQcmltaXRpdmUoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBtaXh1cHMgd2l0aCB1bmZpeGVkIERhdGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnRpZXMoZGF0ZSwgeyBjb25zdHJ1Y3RvcjogRGF0ZVNoaW0gfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gMTUuOS4xLjE1IERhdGUgVGltZSBTdHJpbmcgRm9ybWF0LlxuICAgICAgICAgICAgdmFyIGlzb0RhdGVFeHByZXNzaW9uID0gbmV3IFJlZ0V4cCgnXidcbiAgICAgICAgICAgICAgICArICcoXFxcXGR7NH18WystXVxcXFxkezZ9KScgLy8gZm91ci1kaWdpdCB5ZWFyIGNhcHR1cmUgb3Igc2lnbiArIDYtZGlnaXQgZXh0ZW5kZWQgeWVhclxuICAgICAgICAgICAgICAgICsgJyg/Oi0oXFxcXGR7Mn0pJyAvLyBvcHRpb25hbCBtb250aCBjYXB0dXJlXG4gICAgICAgICAgICAgICAgKyAnKD86LShcXFxcZHsyfSknIC8vIG9wdGlvbmFsIGRheSBjYXB0dXJlXG4gICAgICAgICAgICAgICAgKyAnKD86JyAvLyBjYXB0dXJlIGhvdXJzOm1pbnV0ZXM6c2Vjb25kcy5taWxsaXNlY29uZHNcbiAgICAgICAgICAgICAgICAgICAgKyAnVChcXFxcZHsyfSknIC8vIGhvdXJzIGNhcHR1cmVcbiAgICAgICAgICAgICAgICAgICAgKyAnOihcXFxcZHsyfSknIC8vIG1pbnV0ZXMgY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICArICcoPzonIC8vIG9wdGlvbmFsIDpzZWNvbmRzLm1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnOihcXFxcZHsyfSknIC8vIHNlY29uZHMgY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgKyAnKD86KFxcXFwuXFxcXGR7MSx9KSk/JyAvLyBtaWxsaXNlY29uZHMgY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICArICcpPydcbiAgICAgICAgICAgICAgICArICcoJyAvLyBjYXB0dXJlIFVUQyBvZmZzZXQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICsgJ1p8JyAvLyBVVEMgY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICArICcoPzonIC8vIG9mZnNldCBzcGVjaWZpZXIgKy8taG91cnM6bWludXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnKFstK10pJyAvLyBzaWduIGNhcHR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJyhcXFxcZHsyfSknIC8vIGhvdXJzIG9mZnNldCBjYXB0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICArICc6KFxcXFxkezJ9KScgLy8gbWludXRlcyBvZmZzZXQgY2FwdHVyZVxuICAgICAgICAgICAgICAgICAgICArICcpJ1xuICAgICAgICAgICAgICAgICsgJyk/KT8pPyk/J1xuICAgICAgICAgICAgKyAnJCcpO1xuXG4gICAgICAgICAgICB2YXIgbW9udGhzID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0LCAzNjVdO1xuXG4gICAgICAgICAgICB2YXIgZGF5RnJvbU1vbnRoID0gZnVuY3Rpb24gZGF5RnJvbU1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBtb250aCA+IDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBtb250aHNbbW9udGhdXG4gICAgICAgICAgICAgICAgICAgICsgTWF0aC5mbG9vcigoeWVhciAtIDE5NjkgKyB0KSAvIDQpXG4gICAgICAgICAgICAgICAgICAgIC0gTWF0aC5mbG9vcigoeWVhciAtIDE5MDEgKyB0KSAvIDEwMClcbiAgICAgICAgICAgICAgICAgICAgKyBNYXRoLmZsb29yKCh5ZWFyIC0gMTYwMSArIHQpIC8gNDAwKVxuICAgICAgICAgICAgICAgICAgICArICgzNjUgKiAoeWVhciAtIDE5NzApKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdG9VVEMgPSBmdW5jdGlvbiB0b1VUQyh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBtcyA9IHQ7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1NhZmFyaVNpZ25lZEludEJ1ZyAmJiBtcyA+IG1heFNhZmVVbnNpZ25lZDMyQml0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdvcmsgYXJvdW5kIGEgU2FmYXJpIDgvOSBidWcgd2hlcmUgaXQgdHJlYXRzIHRoZSBzZWNvbmRzIGFzIHNpZ25lZFxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNUb1NoaWZ0ID0gTWF0aC5mbG9vcihtcyAvIG1heFNhZmVVbnNpZ25lZDMyQml0KSAqIG1heFNhZmVVbnNpZ25lZDMyQml0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc1RvU2hpZnQgPSBNYXRoLmZsb29yKG1zVG9TaGlmdCAvIDFlMyk7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gc1RvU2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1zIC09IHNUb1NoaWZ0ICogMWUzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJE51bWJlcihuZXcgTmF0aXZlRGF0ZSgxOTcwLCAwLCAxLCAwLCAwLCBzLCBtcykpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQ29weSBhbnkgY3VzdG9tIG1ldGhvZHMgYSAzcmQgcGFydHkgbGlicmFyeSBtYXkgaGF2ZSBhZGRlZFxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5hdGl2ZURhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ducyhOYXRpdmVEYXRlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIERhdGVTaGltW2tleV0gPSBOYXRpdmVEYXRlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb3B5IFwibmF0aXZlXCIgbWV0aG9kcyBleHBsaWNpdGx5OyB0aGV5IG1heSBiZSBub24tZW51bWVyYWJsZVxuICAgICAgICAgICAgZGVmaW5lUHJvcGVydGllcyhEYXRlU2hpbSwge1xuICAgICAgICAgICAgICAgIG5vdzogTmF0aXZlRGF0ZS5ub3csXG4gICAgICAgICAgICAgICAgVVRDOiBOYXRpdmVEYXRlLlVUQ1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICBEYXRlU2hpbS5wcm90b3R5cGUgPSBOYXRpdmVEYXRlLnByb3RvdHlwZTtcbiAgICAgICAgICAgIGRlZmluZVByb3BlcnRpZXMoRGF0ZVNoaW0ucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiBEYXRlU2hpbSB9LCB0cnVlKTtcblxuICAgICAgICAgICAgLy8gVXBncmFkZSBEYXRlLnBhcnNlIHRvIGhhbmRsZSBzaW1wbGlmaWVkIElTTyA4NjAxIHN0cmluZ3NcbiAgICAgICAgICAgIHZhciBwYXJzZVNoaW0gPSBmdW5jdGlvbiBwYXJzZShzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBpc29EYXRlRXhwcmVzc2lvbi5leGVjKHN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIG1vbnRocywgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFuZCBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIFVUQyBvZmZzZXQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gJE51bWJlcihtYXRjaFsxXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9ICROdW1iZXIobWF0Y2hbMl0gfHwgMSkgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5ID0gJE51bWJlcihtYXRjaFszXSB8fCAxKSAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gJE51bWJlcihtYXRjaFs0XSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZSA9ICROdW1iZXIobWF0Y2hbNV0gfHwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSAkTnVtYmVyKG1hdGNoWzZdIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWlsbGlzZWNvbmQgPSBNYXRoLmZsb29yKCROdW1iZXIobWF0Y2hbN10gfHwgMCkgKiAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGltZSB6b25lIGlzIG1pc3NlZCwgbG9jYWwgb2Zmc2V0IHNob3VsZCBiZSB1c2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoRVMgNS4xIGJ1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2J1Z3MuZWNtYXNjcmlwdC5vcmcvc2hvd19idWcuY2dpP2lkPTExMlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2NhbFRpbWUgPSBCb29sZWFuKG1hdGNoWzRdICYmICFtYXRjaFs4XSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduT2Zmc2V0ID0gbWF0Y2hbOV0gPT09ICctJyA/IDEgOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJPZmZzZXQgPSAkTnVtYmVyKG1hdGNoWzEwXSB8fCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCA9ICROdW1iZXIobWF0Y2hbMTFdIHx8IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzTWludXRlc09yU2Vjb25kc09yTWlsbGlzZWNvbmRzID0gbWludXRlID4gMCB8fCBzZWNvbmQgPiAwIHx8IG1pbGxpc2Vjb25kID4gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91ciA8IChoYXNNaW51dGVzT3JTZWNvbmRzT3JNaWxsaXNlY29uZHMgPyAyNCA6IDI1KVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbWludXRlIDwgNjAgJiYgc2Vjb25kIDwgNjAgJiYgbWlsbGlzZWNvbmQgPCAxMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBtb250aCA+IC0xICYmIG1vbnRoIDwgMTIgJiYgaG91ck9mZnNldCA8IDI0XG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBtaW51dGVPZmZzZXQgPCA2MCAvLyBkZXRlY3QgaW52YWxpZCBvZmZzZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBkYXkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgZGF5IDwgKGRheUZyb21Nb250aCh5ZWFyLCBtb250aCArIDEpIC0gZGF5RnJvbU1vbnRoKHllYXIsIG1vbnRoKSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChkYXlGcm9tTW9udGgoeWVhciwgbW9udGgpICsgZGF5KSAqIDI0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgaG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGhvdXJPZmZzZXQgKiBzaWduT2Zmc2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSAqIDYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gKChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHJlc3VsdCArIG1pbnV0ZSArIChtaW51dGVPZmZzZXQgKiBzaWduT2Zmc2V0KSkgKiA2MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHNlY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgKSAqIDEwMDApICsgbWlsbGlzZWNvbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0b1VUQyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC04LjY0ZTE1IDw9IHJlc3VsdCAmJiByZXN1bHQgPD0gOC42NGUxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hdGl2ZURhdGUucGFyc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZpbmVQcm9wZXJ0aWVzKERhdGVTaGltLCB7IHBhcnNlOiBwYXJzZVNoaW0gfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBEYXRlU2hpbTtcbiAgICAgICAgfShEYXRlKSk7XG4gICAgICAgIC8qIGdsb2JhbCBEYXRlOiBmYWxzZSAqL1xuICAgIH1cblxuICAgIC8vIEVTNSAxNS45LjQuNFxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjkuNC40XG4gICAgaWYgKCFEYXRlLm5vdykge1xuICAgICAgICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIE51bWJlclxuICAgIC8vID09PT09PVxuICAgIC8vXG5cbiAgICAvLyBFUzUuMSAxNS43LjQuNVxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjcuNC41XG4gICAgdmFyIGhhc1RvRml4ZWRCdWdzID0gTnVtYmVyUHJvdG90eXBlLnRvRml4ZWQgJiYgKFxuICAgICAgICAoMC4wMDAwOCkudG9GaXhlZCgzKSAhPT0gJzAuMDAwJ1xuICAgICAgICB8fCAoMC45KS50b0ZpeGVkKDApICE9PSAnMSdcbiAgICAgICAgfHwgKDEuMjU1KS50b0ZpeGVkKDIpICE9PSAnMS4yNSdcbiAgICAgICAgfHwgKDEwMDAwMDAwMDAwMDAwMDAxMjgpLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuICAgICk7XG5cbiAgICB2YXIgdG9GaXhlZEhlbHBlcnMgPSB7XG4gICAgICAgIGJhc2U6IDFlNyxcbiAgICAgICAgc2l6ZTogNixcbiAgICAgICAgZGF0YTogWzAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICBtdWx0aXBseTogZnVuY3Rpb24gbXVsdGlwbHkobiwgYykge1xuICAgICAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgICAgIHZhciBjMiA9IGM7XG4gICAgICAgICAgICB3aGlsZSAoKytpIDwgdG9GaXhlZEhlbHBlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGMyICs9IG4gKiB0b0ZpeGVkSGVscGVycy5kYXRhW2ldO1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLmRhdGFbaV0gPSBjMiAlIHRvRml4ZWRIZWxwZXJzLmJhc2U7XG4gICAgICAgICAgICAgICAgYzIgPSBNYXRoLmZsb29yKGMyIC8gdG9GaXhlZEhlbHBlcnMuYmFzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpdmlkZTogZnVuY3Rpb24gZGl2aWRlKG4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdG9GaXhlZEhlbHBlcnMuc2l6ZTtcbiAgICAgICAgICAgIHZhciBjID0gMDtcbiAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGMgKz0gdG9GaXhlZEhlbHBlcnMuZGF0YVtpXTtcbiAgICAgICAgICAgICAgICB0b0ZpeGVkSGVscGVycy5kYXRhW2ldID0gTWF0aC5mbG9vcihjIC8gbik7XG4gICAgICAgICAgICAgICAgYyA9IChjICUgbikgKiB0b0ZpeGVkSGVscGVycy5iYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBudW1Ub1N0cmluZzogZnVuY3Rpb24gbnVtVG9TdHJpbmcoKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRvRml4ZWRIZWxwZXJzLnNpemU7XG4gICAgICAgICAgICB2YXIgcyA9ICcnO1xuICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMgIT09ICcnIHx8IGkgPT09IDAgfHwgdG9GaXhlZEhlbHBlcnMuZGF0YVtpXSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9ICRTdHJpbmcodG9GaXhlZEhlbHBlcnMuZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzICs9IHN0clNsaWNlKCcwMDAwMDAwJywgMCwgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfSxcbiAgICAgICAgcG93OiBmdW5jdGlvbiBwb3coeCwgbiwgYWNjKSB7XG4gICAgICAgICAgICByZXR1cm4gKG4gPT09IDAgPyBhY2MgOiAobiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKSkpO1xuICAgICAgICB9LFxuICAgICAgICBsb2c6IGZ1bmN0aW9uIGxvZyh4KSB7XG4gICAgICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgICAgICB2YXIgeDIgPSB4O1xuICAgICAgICAgICAgd2hpbGUgKHgyID49IDQwOTYpIHtcbiAgICAgICAgICAgICAgICBuICs9IDEyO1xuICAgICAgICAgICAgICAgIHgyIC89IDQwOTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoeDIgPj0gMikge1xuICAgICAgICAgICAgICAgIG4gKz0gMTtcbiAgICAgICAgICAgICAgICB4MiAvPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHRvRml4ZWRTaGltID0gZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgICAgICB2YXIgZiwgeCwgcywgbSwgZSwgeiwgaiwgaztcblxuICAgICAgICAvLyBUZXN0IGZvciBOYU4gYW5kIHJvdW5kIGZyYWN0aW9uRGlnaXRzIGRvd25cbiAgICAgICAgZiA9ICROdW1iZXIoZnJhY3Rpb25EaWdpdHMpO1xuICAgICAgICBmID0gaXNBY3R1YWxOYU4oZikgPyAwIDogTWF0aC5mbG9vcihmKTtcblxuICAgICAgICBpZiAoZiA8IDAgfHwgZiA+IDIwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTnVtYmVyLnRvRml4ZWQgY2FsbGVkIHdpdGggaW52YWxpZCBudW1iZXIgb2YgZGVjaW1hbHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHggPSAkTnVtYmVyKHRoaXMpO1xuXG4gICAgICAgIGlmIChpc0FjdHVhbE5hTih4KSkge1xuICAgICAgICAgICAgcmV0dXJuICdOYU4nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgdG9vIGJpZyBvciBzbWFsbCwgcmV0dXJuIHRoZSBzdHJpbmcgdmFsdWUgb2YgdGhlIG51bWJlclxuICAgICAgICBpZiAoeCA8PSAtMWUyMSB8fCB4ID49IDFlMjEpIHtcbiAgICAgICAgICAgIHJldHVybiAkU3RyaW5nKHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcyA9ICcnO1xuXG4gICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgcyA9ICctJztcbiAgICAgICAgICAgIHggPSAteDtcbiAgICAgICAgfVxuXG4gICAgICAgIG0gPSAnMCc7XG5cbiAgICAgICAgaWYgKHggPiAxZS0yMSkge1xuICAgICAgICAgICAgLy8gMWUtMjEgPCB4IDwgMWUyMVxuICAgICAgICAgICAgLy8gLTcwIDwgbG9nMih4KSA8IDcwXG4gICAgICAgICAgICBlID0gdG9GaXhlZEhlbHBlcnMubG9nKHggKiB0b0ZpeGVkSGVscGVycy5wb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgICAgICAgeiA9IChlIDwgMCA/IHggKiB0b0ZpeGVkSGVscGVycy5wb3coMiwgLWUsIDEpIDogeCAvIHRvRml4ZWRIZWxwZXJzLnBvdygyLCBlLCAxKSk7XG4gICAgICAgICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7IC8vIE1hdGgucG93KDIsIDUyKTtcbiAgICAgICAgICAgIGUgPSA1MiAtIGU7XG5cbiAgICAgICAgICAgIC8vIC0xOCA8IGUgPCAxMjJcbiAgICAgICAgICAgIC8vIHggPSB6IC8gMiBeIGVcbiAgICAgICAgICAgIGlmIChlID4gMCkge1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLm11bHRpcGx5KDAsIHopO1xuICAgICAgICAgICAgICAgIGogPSBmO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgICAgICAgICAgICB0b0ZpeGVkSGVscGVycy5tdWx0aXBseSgxZTcsIDApO1xuICAgICAgICAgICAgICAgICAgICBqIC09IDc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMubXVsdGlwbHkodG9GaXhlZEhlbHBlcnMucG93KDEwLCBqLCAxKSwgMCk7XG4gICAgICAgICAgICAgICAgaiA9IGUgLSAxO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGogPj0gMjMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMuZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgICAgICAgICAgICBqIC09IDIzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLmRpdmlkZSgxIDw8IGopO1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLm11bHRpcGx5KDEsIDEpO1xuICAgICAgICAgICAgICAgIHRvRml4ZWRIZWxwZXJzLmRpdmlkZSgyKTtcbiAgICAgICAgICAgICAgICBtID0gdG9GaXhlZEhlbHBlcnMubnVtVG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMubXVsdGlwbHkoMCwgeik7XG4gICAgICAgICAgICAgICAgdG9GaXhlZEhlbHBlcnMubXVsdGlwbHkoMSA8PCAoLWUpLCAwKTtcbiAgICAgICAgICAgICAgICBtID0gdG9GaXhlZEhlbHBlcnMubnVtVG9TdHJpbmcoKSArIHN0clNsaWNlKCcwLjAwMDAwMDAwMDAwMDAwMDAwMDAwJywgMiwgMiArIGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGYgPiAwKSB7XG4gICAgICAgICAgICBrID0gbS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChrIDw9IGYpIHtcbiAgICAgICAgICAgICAgICBtID0gcyArIHN0clNsaWNlKCcwLjAwMDAwMDAwMDAwMDAwMDAwMDAnLCAwLCBmIC0gayArIDIpICsgbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbSA9IHMgKyBzdHJTbGljZShtLCAwLCBrIC0gZikgKyAnLicgKyBzdHJTbGljZShtLCBrIC0gZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtID0gcyArIG07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbTtcbiAgICB9O1xuICAgIGRlZmluZVByb3BlcnRpZXMoTnVtYmVyUHJvdG90eXBlLCB7IHRvRml4ZWQ6IHRvRml4ZWRTaGltIH0sIGhhc1RvRml4ZWRCdWdzKTtcblxuICAgIHZhciBoYXNUb1ByZWNpc2lvblVuZGVmaW5lZEJ1ZyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gMS4wLnRvUHJlY2lzaW9uKHVuZGVmaW5lZCkgPT09ICcxJztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KCkpO1xuICAgIHZhciBvcmlnaW5hbFRvUHJlY2lzaW9uID0gTnVtYmVyUHJvdG90eXBlLnRvUHJlY2lzaW9uO1xuICAgIGRlZmluZVByb3BlcnRpZXMoTnVtYmVyUHJvdG90eXBlLCB7XG4gICAgICAgIHRvUHJlY2lzaW9uOiBmdW5jdGlvbiB0b1ByZWNpc2lvbihwcmVjaXNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJyA/IG9yaWdpbmFsVG9QcmVjaXNpb24uY2FsbCh0aGlzKSA6IG9yaWdpbmFsVG9QcmVjaXNpb24uY2FsbCh0aGlzLCBwcmVjaXNpb24pO1xuICAgICAgICB9XG4gICAgfSwgaGFzVG9QcmVjaXNpb25VbmRlZmluZWRCdWcpO1xuXG4gICAgLy9cbiAgICAvLyBTdHJpbmdcbiAgICAvLyA9PT09PT1cbiAgICAvL1xuXG4gICAgLy8gRVM1IDE1LjUuNC4xNFxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjUuNC4xNFxuXG4gICAgLy8gW2J1Z2ZpeCwgSUUgbHQgOSwgZmlyZWZveCA0LCBLb25xdWVyb3IsIE9wZXJhLCBvYnNjdXJlIGJyb3dzZXJzXVxuICAgIC8vIE1hbnkgYnJvd3NlcnMgZG8gbm90IHNwbGl0IHByb3Blcmx5IHdpdGggcmVndWxhciBleHByZXNzaW9ucyBvciB0aGV5XG4gICAgLy8gZG8gbm90IHBlcmZvcm0gdGhlIHNwbGl0IGNvcnJlY3RseSB1bmRlciBvYnNjdXJlIGNvbmRpdGlvbnMuXG4gICAgLy8gU2VlIGh0dHA6Ly9ibG9nLnN0ZXZlbmxldml0aGFuLmNvbS9hcmNoaXZlcy9jcm9zcy1icm93c2VyLXNwbGl0XG4gICAgLy8gSSd2ZSB0ZXN0ZWQgaW4gbWFueSBicm93c2VycyBhbmQgdGhpcyBzZWVtcyB0byBjb3ZlciB0aGUgZGV2aWFudCBvbmVzOlxuICAgIC8vICAgICdhYicuc3BsaXQoLyg/OmFiKSovKSBzaG91bGQgYmUgW1wiXCIsIFwiXCJdLCBub3QgW1wiXCJdXG4gICAgLy8gICAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pIHNob3VsZCBiZSBbXCJcIiwgXCIuXCIsIFwiXCIsIFwiXCJdLCBub3QgW1wiXCIsIFwiXCJdXG4gICAgLy8gICAgJ3Rlc3N0Jy5zcGxpdCgvKHMpKi8pIHNob3VsZCBiZSBbXCJ0XCIsIHVuZGVmaW5lZCwgXCJlXCIsIFwic1wiLCBcInRcIl0sIG5vdFxuICAgIC8vICAgICAgIFt1bmRlZmluZWQsIFwidFwiLCB1bmRlZmluZWQsIFwiZVwiLCAuLi5dXG4gICAgLy8gICAgJycuc3BsaXQoLy4/Lykgc2hvdWxkIGJlIFtdLCBub3QgW1wiXCJdXG4gICAgLy8gICAgJy4nLnNwbGl0KC8oKSgpLykgc2hvdWxkIGJlIFtcIi5cIl0sIG5vdCBbXCJcIiwgXCJcIiwgXCIuXCJdXG5cbiAgICBpZiAoXG4gICAgICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT09IDJcbiAgICAgICAgfHwgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPT0gNFxuICAgICAgICB8fCAndGVzc3QnLnNwbGl0KC8ocykqLylbMV0gPT09ICd0J1xuICAgICAgICB8fCAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9PSA0XG4gICAgICAgIHx8ICcnLnNwbGl0KC8uPy8pLmxlbmd0aFxuICAgICAgICB8fCAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxXG4gICAgKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY29tcGxpYW50RXhlY05wY2cgPSB0eXBlb2YgKC8oKT8/LykuZXhlYygnJylbMV0gPT09ICd1bmRlZmluZWQnOyAvLyBOUENHOiBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgICAgICAgICAgdmFyIG1heFNhZmUzMkJpdEludCA9IE1hdGgucG93KDIsIDMyKSAtIDE7XG5cbiAgICAgICAgICAgIFN0cmluZ1Byb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlcGFyYXRvciA9PT0gJ3VuZGVmaW5lZCcgJiYgbGltaXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICAgICAgICAgICAgaWYgKCFpc1JlZ2V4KHNlcGFyYXRvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0clNwbGl0KHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgLy8gaW4gRVM2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKSwgLy8gRmlyZWZveCAzKyBhbmQgRVM2XG4gICAgICAgICAgICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSAwLFxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wbGlhbnRFeGVjTnBjZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyogVmFsdWVzIGZvciBgbGltaXRgLCBwZXIgdGhlIHNwZWM6XG4gICAgICAgICAgICAgICAgICogSWYgdW5kZWZpbmVkOiA0Mjk0OTY3Mjk1IC8vIG1heFNhZmUzMkJpdEludFxuICAgICAgICAgICAgICAgICAqIElmIDAsIEluZmluaXR5LCBvciBOYU46IDBcbiAgICAgICAgICAgICAgICAgKiBJZiBwb3NpdGl2ZSBudW1iZXI6IGxpbWl0ID0gTWF0aC5mbG9vcihsaW1pdCk7IGlmIChsaW1pdCA+IDQyOTQ5NjcyOTUpIGxpbWl0IC09IDQyOTQ5NjcyOTY7XG4gICAgICAgICAgICAgICAgICogSWYgbmVnYXRpdmUgbnVtYmVyOiA0Mjk0OTY3Mjk2IC0gTWF0aC5mbG9vcihNYXRoLmFicyhsaW1pdCkpXG4gICAgICAgICAgICAgICAgICogSWYgb3RoZXI6IFR5cGUtY29udmVydCwgdGhlbiB1c2UgdGhlIGFib3ZlIHJ1bGVzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0TGltaXQgPSB0eXBlb2YgbGltaXQgPT09ICd1bmRlZmluZWQnID8gbWF4U2FmZTMyQml0SW50IDogRVMuVG9VaW50MzIobGltaXQpO1xuICAgICAgICAgICAgICAgIG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZyk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoQ2FsbChvdXRwdXQsIHN0clNsaWNlKHN0cmluZywgbGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXBzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBsaWFudEV4ZWNOcGNnICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFswXS5yZXBsYWNlKHNlcGFyYXRvcjIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtpXSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheV9wdXNoLmFwcGx5KG91dHB1dCwgYXJyYXlTbGljZShtYXRjaCwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBzcGxpdExpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRvckNvcHkubGFzdEluZGV4ID09PSBtYXRjaC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gc2VwYXJhdG9yQ29weS5leGVjKHN0cmluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoQ2FsbChvdXRwdXQsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hDYWxsKG91dHB1dCwgc3RyU2xpY2Uoc3RyaW5nLCBsYXN0TGFzdEluZGV4KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQubGVuZ3RoID4gc3BsaXRMaW1pdCA/IGFycmF5U2xpY2Uob3V0cHV0LCAwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKSk7XG5cbiAgICAvLyBbYnVnZml4LCBjaHJvbWVdXG4gICAgLy8gSWYgc2VwYXJhdG9yIGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgcmVzdWx0IGFycmF5IGNvbnRhaW5zIGp1c3Qgb25lIFN0cmluZyxcbiAgICAvLyB3aGljaCBpcyB0aGUgdGhpcyB2YWx1ZSAoY29udmVydGVkIHRvIGEgU3RyaW5nKS4gSWYgbGltaXQgaXMgbm90IHVuZGVmaW5lZCxcbiAgICAvLyB0aGVuIHRoZSBvdXRwdXQgYXJyYXkgaXMgdHJ1bmNhdGVkIHNvIHRoYXQgaXQgY29udGFpbnMgbm8gbW9yZSB0aGFuIGxpbWl0XG4gICAgLy8gZWxlbWVudHMuXG4gICAgLy8gXCIwXCIuc3BsaXQodW5kZWZpbmVkLCAwKSAtPiBbXVxuICAgIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHZvaWQgMCwgMCkubGVuZ3RoKSB7XG4gICAgICAgIFN0cmluZ1Byb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VwYXJhdG9yID09PSAndW5kZWZpbmVkJyAmJiBsaW1pdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHJTcGxpdCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgc3RyX3JlcGxhY2UgPSBTdHJpbmdQcm90b3R5cGUucmVwbGFjZTtcbiAgICB2YXIgcmVwbGFjZVJlcG9ydHNHcm91cHNDb3JyZWN0bHkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ3JvdXBzID0gW107XG4gICAgICAgICd4Jy5yZXBsYWNlKC94KC4pPy9nLCBmdW5jdGlvbiAobWF0Y2gsIGdyb3VwKSB7XG4gICAgICAgICAgICBwdXNoQ2FsbChncm91cHMsIGdyb3VwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBncm91cHNbMF0gPT09ICd1bmRlZmluZWQnO1xuICAgIH0oKSk7XG5cbiAgICBpZiAoIXJlcGxhY2VSZXBvcnRzR3JvdXBzQ29ycmVjdGx5KSB7XG4gICAgICAgIFN0cmluZ1Byb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaXNGbiA9IGlzQ2FsbGFibGUocmVwbGFjZVZhbHVlKTtcbiAgICAgICAgICAgIHZhciBoYXNDYXB0dXJpbmdHcm91cHMgPSBpc1JlZ2V4KHNlYXJjaFZhbHVlKSAmJiAoL1xcKVsqP10vKS50ZXN0KHNlYXJjaFZhbHVlLnNvdXJjZSk7XG4gICAgICAgICAgICBpZiAoIWlzRm4gfHwgIWhhc0NhcHR1cmluZ0dyb3Vwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJfcmVwbGFjZS5jYWxsKHRoaXMsIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZFJlcGxhY2VWYWx1ZSA9IGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsTGFzdEluZGV4ID0gc2VhcmNoVmFsdWUubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHNlYXJjaFZhbHVlLmV4ZWMobWF0Y2gpIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZS5sYXN0SW5kZXggPSBvcmlnaW5hbExhc3RJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgcHVzaENhbGwoYXJncywgYXJndW1lbnRzW2xlbmd0aCAtIDJdLCBhcmd1bWVudHNbbGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZVZhbHVlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cl9yZXBsYWNlLmNhbGwodGhpcywgc2VhcmNoVmFsdWUsIHdyYXBwZWRSZXBsYWNlVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEVDTUEtMjYyLCAzcmQgQi4yLjNcbiAgICAvLyBOb3QgYW4gRUNNQVNjcmlwdCBzdGFuZGFyZCwgYWx0aG91Z2ggRUNNQVNjcmlwdCAzcmQgRWRpdGlvbiBoYXMgYVxuICAgIC8vIG5vbi1ub3JtYXRpdmUgc2VjdGlvbiBzdWdnZXN0aW5nIHVuaWZvcm0gc2VtYW50aWNzIGFuZCBpdCBzaG91bGQgYmVcbiAgICAvLyBub3JtYWxpemVkIGFjcm9zcyBhbGwgYnJvd3NlcnNcbiAgICAvLyBbYnVnZml4LCBJRSBsdCA5XSBJRSA8IDkgc3Vic3RyKCkgd2l0aCBuZWdhdGl2ZSB2YWx1ZSBub3Qgd29ya2luZyBpbiBJRVxuICAgIHZhciBzdHJpbmdfc3Vic3RyID0gU3RyaW5nUHJvdG90eXBlLnN1YnN0cjtcbiAgICB2YXIgaGFzTmVnYXRpdmVTdWJzdHJCdWcgPSAnJy5zdWJzdHIgJiYgJzBiJy5zdWJzdHIoLTEpICE9PSAnYic7XG4gICAgZGVmaW5lUHJvcGVydGllcyhTdHJpbmdQcm90b3R5cGUsIHtcbiAgICAgICAgc3Vic3RyOiBmdW5jdGlvbiBzdWJzdHIoc3RhcnQsIGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWRTdGFydCA9IHN0YXJ0O1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRTdGFydCA9IG1heCh0aGlzLmxlbmd0aCArIHN0YXJ0LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdfc3Vic3RyLmNhbGwodGhpcywgbm9ybWFsaXplZFN0YXJ0LCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSwgaGFzTmVnYXRpdmVTdWJzdHJCdWcpO1xuXG4gICAgLy8gRVM1IDE1LjUuNC4yMFxuICAgIC8vIHdoaXRlc3BhY2UgZnJvbTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS41LjQuMjBcbiAgICB2YXIgd3MgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnXG4gICAgICAgICsgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4J1xuICAgICAgICArICdcXHUyMDI5XFx1RkVGRic7XG4gICAgdmFyIHplcm9XaWR0aCA9ICdcXHUyMDBiJztcbiAgICB2YXIgd3NSZWdleENoYXJzID0gJ1snICsgd3MgKyAnXSc7XG4gICAgdmFyIHRyaW1CZWdpblJlZ2V4cCA9IG5ldyBSZWdFeHAoJ14nICsgd3NSZWdleENoYXJzICsgd3NSZWdleENoYXJzICsgJyonKTtcbiAgICB2YXIgdHJpbUVuZFJlZ2V4cCA9IG5ldyBSZWdFeHAod3NSZWdleENoYXJzICsgd3NSZWdleENoYXJzICsgJyokJyk7XG4gICAgdmFyIGhhc1RyaW1XaGl0ZXNwYWNlQnVnID0gU3RyaW5nUHJvdG90eXBlLnRyaW0gJiYgKHdzLnRyaW0oKSB8fCAhemVyb1dpZHRoLnRyaW0oKSk7XG4gICAgZGVmaW5lUHJvcGVydGllcyhTdHJpbmdQcm90b3R5cGUsIHtcbiAgICAgICAgLy8gaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL2Zhc3Rlci10cmltLWphdmFzY3JpcHRcbiAgICAgICAgLy8gaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vd2hpdGVzcGFjZS1kZXZpYXRpb25zL1xuICAgICAgICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzID09PSAndW5kZWZpbmVkJyB8fCB0aGlzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbid0IGNvbnZlcnQgXCIgKyB0aGlzICsgJyB0byBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAkU3RyaW5nKHRoaXMpLnJlcGxhY2UodHJpbUJlZ2luUmVnZXhwLCAnJykucmVwbGFjZSh0cmltRW5kUmVnZXhwLCAnJyk7XG4gICAgICAgIH1cbiAgICB9LCBoYXNUcmltV2hpdGVzcGFjZUJ1Zyk7XG4gICAgdmFyIHRyaW0gPSBjYWxsLmJpbmQoU3RyaW5nLnByb3RvdHlwZS50cmltKTtcblxuICAgIHZhciBoYXNMYXN0SW5kZXhCdWcgPSBTdHJpbmdQcm90b3R5cGUubGFzdEluZGV4T2YgJiYgJ2FiY+OBguOBhCcubGFzdEluZGV4T2YoJ+OBguOBhCcsIDIpICE9PSAtMTtcbiAgICBkZWZpbmVQcm9wZXJ0aWVzKFN0cmluZ1Byb3RvdHlwZSwge1xuICAgICAgICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FuJ3QgY29udmVydCBcIiArIHRoaXMgKyAnIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIFMgPSAkU3RyaW5nKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaFN0ciA9ICRTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBudW1Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/ICROdW1iZXIoYXJndW1lbnRzWzFdKSA6IE5hTjtcbiAgICAgICAgICAgIHZhciBwb3MgPSBpc0FjdHVhbE5hTihudW1Qb3MpID8gSW5maW5pdHkgOiBFUy5Ub0ludGVnZXIobnVtUG9zKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG1pbihtYXgocG9zLCAwKSwgUy5sZW5ndGgpO1xuICAgICAgICAgICAgdmFyIHNlYXJjaExlbiA9IHNlYXJjaFN0ci5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgayA9IHN0YXJ0ICsgc2VhcmNoTGVuO1xuICAgICAgICAgICAgd2hpbGUgKGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgayA9IG1heCgwLCBrIC0gc2VhcmNoTGVuKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzdHJJbmRleE9mKHN0clNsaWNlKFMsIGssIHN0YXJ0ICsgc2VhcmNoTGVuKSwgc2VhcmNoU3RyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfSwgaGFzTGFzdEluZGV4QnVnKTtcblxuICAgIHZhciBvcmlnaW5hbExhc3RJbmRleE9mID0gU3RyaW5nUHJvdG90eXBlLmxhc3RJbmRleE9mO1xuICAgIGRlZmluZVByb3BlcnRpZXMoU3RyaW5nUHJvdG90eXBlLCB7XG4gICAgICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbExhc3RJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9LCBTdHJpbmdQcm90b3R5cGUubGFzdEluZGV4T2YubGVuZ3RoICE9PSAxKTtcblxuICAgIC8vIEVTLTUgMTUuMS4yLjJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmFkaXhcbiAgICBpZiAocGFyc2VJbnQod3MgKyAnMDgnKSAhPT0gOCB8fCBwYXJzZUludCh3cyArICcweDE2JykgIT09IDIyKSB7XG4gICAgICAgIC8qIGdsb2JhbCBwYXJzZUludDogdHJ1ZSAqL1xuICAgICAgICBwYXJzZUludCA9IChmdW5jdGlvbiAob3JpZ1BhcnNlSW50KSB7XG4gICAgICAgICAgICB2YXIgaGV4UmVnZXggPSAvXlstK10/MFt4WF0vO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBhcnNlSW50KHN0ciwgcmFkaXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFN5bWJvbHMgaW4gbm9kZSA4LjMvOC40XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiwgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgICcnICsgc3RyOyAvLyBqc2NzOmlnbm9yZSBkaXNhbGxvd0ltcGxpY2l0VHlwZUNvbnZlcnNpb25cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gdHJpbShTdHJpbmcoc3RyKSk7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRlZFJhZGl4ID0gJE51bWJlcihyYWRpeCkgfHwgKGhleFJlZ2V4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnUGFyc2VJbnQoc3RyaW5nLCBkZWZhdWx0ZWRSYWRpeCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KHBhcnNlSW50KSk7XG4gICAgfVxuXG4gICAgLy8gaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMS4yLjNcbiAgICBpZiAoMSAvIHBhcnNlRmxvYXQoJy0wJykgIT09IC1JbmZpbml0eSkge1xuICAgICAgICAvKiBnbG9iYWwgcGFyc2VGbG9hdDogdHJ1ZSAqL1xuICAgICAgICBwYXJzZUZsb2F0ID0gKGZ1bmN0aW9uIChvcmlnUGFyc2VGbG9hdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0U3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9yaWdQYXJzZUZsb2F0KGlucHV0U3RyaW5nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHN0clNsaWNlKGlucHV0U3RyaW5nLCAwLCAxKSA9PT0gJy0nID8gLTAgOiByZXN1bHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KHBhcnNlRmxvYXQpKTtcbiAgICB9XG5cbiAgICBpZiAoU3RyaW5nKG5ldyBSYW5nZUVycm9yKCd0ZXN0JykpICE9PSAnUmFuZ2VFcnJvcjogdGVzdCcpIHtcbiAgICAgICAgdmFyIGVycm9yVG9TdHJpbmdTaGltID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FuJ3QgY29udmVydCBcIiArIHRoaXMgKyAnIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9ICdFcnJvcic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5hbWUgPSAkU3RyaW5nKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1zZyA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG1zZyA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbXNnICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG1zZyA9ICRTdHJpbmcobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1zZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5hbWUgKyAnOiAnICsgbXNnO1xuICAgICAgICB9O1xuICAgICAgICAvLyBjYW4ndCB1c2UgZGVmaW5lUHJvcGVydGllcyBoZXJlIGJlY2F1c2Ugb2YgdG9TdHJpbmcgZW51bWVyYXRpb24gaXNzdWUgaW4gSUUgPD0gOFxuICAgICAgICBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBlcnJvclRvU3RyaW5nU2hpbTtcbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydHNEZXNjcmlwdG9ycykge1xuICAgICAgICB2YXIgZW5zdXJlTm9uRW51bWVyYWJsZSA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChpc0VudW0ob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICAgICAgICAgICAgICAgIGlmIChkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBlbnN1cmVOb25FbnVtZXJhYmxlKEVycm9yLnByb3RvdHlwZSwgJ21lc3NhZ2UnKTtcbiAgICAgICAgaWYgKEVycm9yLnByb3RvdHlwZS5tZXNzYWdlICE9PSAnJykge1xuICAgICAgICAgICAgRXJyb3IucHJvdG90eXBlLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBlbnN1cmVOb25FbnVtZXJhYmxlKEVycm9yLnByb3RvdHlwZSwgJ25hbWUnKTtcbiAgICB9XG5cbiAgICBpZiAoU3RyaW5nKC9hL21pZykgIT09ICcvYS9naW0nKSB7XG4gICAgICAgIHZhciByZWdleFRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gJy8nICsgdGhpcy5zb3VyY2UgKyAnLyc7XG4gICAgICAgICAgICBpZiAodGhpcy5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gJ2cnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgICAgIHN0ciArPSAnaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tdWx0aWxpbmUpIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gJ20nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2FuJ3QgdXNlIGRlZmluZVByb3BlcnRpZXMgaGVyZSBiZWNhdXNlIG9mIHRvU3RyaW5nIGVudW1lcmF0aW9uIGlzc3VlIGluIElFIDw9IDhcbiAgICAgICAgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZyA9IHJlZ2V4VG9TdHJpbmc7XG4gICAgfVxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXM1LXNoaW0vZXM1LXNoaW0uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW1cbiAqIEBsaWNlbnNlIGVzNS1zaGltIENvcHlyaWdodCAyMDA5LTIwMTUgYnkgY29udHJpYnV0b3JzLCBNSVQgTGljZW5zZVxuICogc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdmltOiB0cz00IHN0cz00IHN3PTQgZXhwYW5kdGFiXG5cbi8vIEFkZCBzZW1pY29sb24gdG8gcHJldmVudCBJSUZFIGZyb20gYmVpbmcgcGFzc2VkIGFzIGFyZ3VtZW50IHRvIGNvbmNhdGVuYXRlZCBjb2RlLlxuO1xuXG4vLyBVTUQgKFVuaXZlcnNhbCBNb2R1bGUgRGVmaW5pdGlvbilcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3RlbXBsYXRlcy9yZXR1cm5FeHBvcnRzLmpzXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lLCBleHBvcnRzLCBtb2R1bGUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QucmV0dXJuRXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBjYWxsID0gRnVuY3Rpb24uY2FsbDtcbiAgICB2YXIgcHJvdG90eXBlT2ZPYmplY3QgPSBPYmplY3QucHJvdG90eXBlO1xuICAgIHZhciBvd25zID0gY2FsbC5iaW5kKHByb3RvdHlwZU9mT2JqZWN0Lmhhc093blByb3BlcnR5KTtcbiAgICB2YXIgaXNFbnVtZXJhYmxlID0gY2FsbC5iaW5kKHByb3RvdHlwZU9mT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlKTtcbiAgICB2YXIgdG9TdHIgPSBjYWxsLmJpbmQocHJvdG90eXBlT2ZPYmplY3QudG9TdHJpbmcpO1xuXG4gICAgLy8gSWYgSlMgZW5naW5lIHN1cHBvcnRzIGFjY2Vzc29ycyBjcmVhdGluZyBzaG9ydGN1dHMuXG4gICAgdmFyIGRlZmluZUdldHRlcjtcbiAgICB2YXIgZGVmaW5lU2V0dGVyO1xuICAgIHZhciBsb29rdXBHZXR0ZXI7XG4gICAgdmFyIGxvb2t1cFNldHRlcjtcbiAgICB2YXIgc3VwcG9ydHNBY2Nlc3NvcnMgPSBvd25zKHByb3RvdHlwZU9mT2JqZWN0LCAnX19kZWZpbmVHZXR0ZXJfXycpO1xuICAgIGlmIChzdXBwb3J0c0FjY2Vzc29ycykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzICovXG4gICAgICAgIGRlZmluZUdldHRlciA9IGNhbGwuYmluZChwcm90b3R5cGVPZk9iamVjdC5fX2RlZmluZUdldHRlcl9fKTtcbiAgICAgICAgZGVmaW5lU2V0dGVyID0gY2FsbC5iaW5kKHByb3RvdHlwZU9mT2JqZWN0Ll9fZGVmaW5lU2V0dGVyX18pO1xuICAgICAgICBsb29rdXBHZXR0ZXIgPSBjYWxsLmJpbmQocHJvdG90eXBlT2ZPYmplY3QuX19sb29rdXBHZXR0ZXJfXyk7XG4gICAgICAgIGxvb2t1cFNldHRlciA9IGNhbGwuYmluZChwcm90b3R5cGVPZk9iamVjdC5fX2xvb2t1cFNldHRlcl9fKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzICovXG4gICAgfVxuXG4gICAgdmFyIGlzUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNQcmltaXRpdmUobykge1xuICAgICAgICByZXR1cm4gbyA9PSBudWxsIHx8ICh0eXBlb2YgbyAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG8gIT09ICdmdW5jdGlvbicpO1xuICAgIH07XG5cbiAgICAvLyBFUzUgMTUuMi4zLjJcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuMlxuICAgIGlmICghT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMjaXNzdWUvMlxuICAgICAgICAvLyBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvb2JqZWN0Z2V0cHJvdG90eXBlb2YvXG4gICAgICAgIC8vIHJlY29tbWVuZGVkIGJ5IGZzY2hhZWZlciBvbiBnaXRodWJcbiAgICAgICAgLy9cbiAgICAgICAgLy8gc3VyZSwgYW5kIHdlYnJlZmxlY3Rpb24gc2F5cyBeX15cbiAgICAgICAgLy8gLi4uIHRoaXMgd2lsbCBuZXJldmVyIHBvc3NpYmx5IHJldHVybiBudWxsXG4gICAgICAgIC8vIC4uLiBPcGVyYSBNaW5pIGJyZWFrcyBoZXJlIHdpdGggaW5maW5pdGUgbG9vcHNcbiAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2Yob2JqZWN0KSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cbiAgICAgICAgICAgIHZhciBwcm90byA9IG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgICAgICBpZiAocHJvdG8gfHwgcHJvdG8gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvU3RyKG9iamVjdC5jb25zdHJ1Y3RvcikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqZWN0IGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZU9mT2JqZWN0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDb3JyZWN0bHkgcmV0dXJuIG51bGwgZm9yIE9iamVjdHMgY3JlYXRlZCB3aXRoIGBPYmplY3QuY3JlYXRlKG51bGwpYFxuICAgICAgICAgICAgICAgIC8vIChzaGFtbWVkIG9yIG5hdGl2ZSkgb3IgYHsgX19wcm90b19fOiBudWxsfWAuICBBbHNvIHJldHVybnMgbnVsbCBmb3JcbiAgICAgICAgICAgICAgICAvLyBjcm9zcy1yZWFsbSBvYmplY3RzIG9uIGJyb3dzZXJzIHRoYXQgbGFjayBgX19wcm90b19fYCBzdXBwb3J0IChsaWtlXG4gICAgICAgICAgICAgICAgLy8gSUUgPDExKSwgYnV0IHRoYXQncyB0aGUgYmVzdCB3ZSBjYW4gZG8uXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRVM1IDE1LjIuMy4zXG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMi4zLjNcblxuICAgIHZhciBkb2VzR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29yayA9IGZ1bmN0aW9uIGRvZXNHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JXb3JrKG9iamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2JqZWN0LnNlbnRpbmVsID0gMDtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgJ3NlbnRpbmVsJykudmFsdWUgPT09IDA7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIHdvcmtzIGlmIGl0J3MgZ2l2ZW4uIE90aGVyd2lzZSwgc2hpbSBwYXJ0aWFsbHkuXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29ya3NPbk9iamVjdCA9IGRvZXNHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JXb3JrKHt9KTtcbiAgICAgICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcldvcmtzT25Eb20gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICB8fCBkb2VzR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29yayhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGlmICghZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29ya3NPbkRvbSB8fCAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yV29ya3NPbk9iamVjdCkge1xuICAgICAgICAgICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvckZhbGxiYWNrID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciB8fCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JGYWxsYmFjaykge1xuICAgICAgICB2YXIgRVJSX05PTl9PQkpFQ1QgPSAnT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciBjYWxsZWQgb24gYSBub24tb2JqZWN0OiAnO1xuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUl9OT05fT0JKRUNUICsgb2JqZWN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWFrZSBhIHZhbGlhbnQgYXR0ZW1wdCB0byB1c2UgdGhlIHJlYWwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG4gICAgICAgICAgICAvLyBmb3IgSTgncyBET00gZWxlbWVudHMuXG4gICAgICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yRmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yRmFsbGJhY2suY2FsbChPYmplY3QsIG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdGhlIHNoaW0gaWYgdGhlIHJlYWwgb25lIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3I7XG5cbiAgICAgICAgICAgIC8vIElmIG9iamVjdCBkb2VzIG5vdCBvd25zIHByb3BlcnR5IHJldHVybiB1bmRlZmluZWQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICBpZiAoIW93bnMob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb2JqZWN0IGhhcyBhIHByb3BlcnR5IHRoZW4gaXQncyBmb3Igc3VyZSBgY29uZmlndXJhYmxlYCwgYW5kXG4gICAgICAgICAgICAvLyBwcm9iYWJseSBgZW51bWVyYWJsZWAuIERldGVjdCBlbnVtZXJhYmlsaXR5IHRob3VnaC5cbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogaXNFbnVtZXJhYmxlKG9iamVjdCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSWYgSlMgZW5naW5lIHN1cHBvcnRzIGFjY2Vzc29yIHByb3BlcnRpZXMgdGhlbiBwcm9wZXJ0eSBtYXkgYmUgYVxuICAgICAgICAgICAgLy8gZ2V0dGVyIG9yIHNldHRlci5cbiAgICAgICAgICAgIGlmIChzdXBwb3J0c0FjY2Vzc29ycykge1xuICAgICAgICAgICAgICAgIC8vIFVuZm9ydHVuYXRlbHkgYF9fbG9va3VwR2V0dGVyX19gIHdpbGwgcmV0dXJuIGEgZ2V0dGVyIGV2ZW5cbiAgICAgICAgICAgICAgICAvLyBpZiBvYmplY3QgaGFzIG93biBub24gZ2V0dGVyIHByb3BlcnR5IGFsb25nIHdpdGggYSBzYW1lIG5hbWVkXG4gICAgICAgICAgICAgICAgLy8gaW5oZXJpdGVkIGdldHRlci4gVG8gYXZvaWQgbWlzYmVoYXZpb3Igd2UgdGVtcG9yYXJ5IHJlbW92ZVxuICAgICAgICAgICAgICAgIC8vIGBfX3Byb3RvX19gIHNvIHRoYXQgYF9fbG9va3VwR2V0dGVyX19gIHdpbGwgcmV0dXJuIGdldHRlciBvbmx5XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQncyBvd25lZCBieSBhbiBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgdmFyIG5vdFByb3RvdHlwZU9mT2JqZWN0ID0gb2JqZWN0ICE9PSBwcm90b3R5cGVPZk9iamVjdDtcbiAgICAgICAgICAgICAgICAvLyBhdm9pZCByZWN1cnNpb24gcHJvYmxlbSwgYnJlYWtpbmcgaW4gT3BlcmEgTWluaSB3aGVuXG4gICAgICAgICAgICAgICAgLy8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnKVxuICAgICAgICAgICAgICAgIC8vIG9yIGFueSBvdGhlciBPYmplY3QucHJvdG90eXBlIGFjY2Vzc29yXG4gICAgICAgICAgICAgICAgaWYgKG5vdFByb3RvdHlwZU9mT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGVPZk9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZ2V0dGVyID0gbG9va3VwR2V0dGVyKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgIHZhciBzZXR0ZXIgPSBsb29rdXBTZXR0ZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm90UHJvdG90eXBlT2ZPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25jZSB3ZSBoYXZlIGdldHRlciBhbmQgc2V0dGVyIHdlIGNhbiBwdXQgdmFsdWVzIGJhY2suXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGdldHRlciB8fCBzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci5nZXQgPSBnZXR0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvci5zZXQgPSBzZXR0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgd2FzIGFjY2Vzc29yIHByb3BlcnR5IHdlJ3JlIGRvbmUgYW5kIHJldHVybiBoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIHRvIGF2b2lkIGFkZGluZyBgdmFsdWVgIHRvIHRoZSBkZXNjcmlwdG9yLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciB3ZSBrbm93IHRoYXQgb2JqZWN0IGhhcyBhbiBvd24gcHJvcGVydHkgdGhhdCBpc1xuICAgICAgICAgICAgLy8gbm90IGFuIGFjY2Vzc29yIHNvIHdlIHNldCBpdCBhcyBhIHZhbHVlIGFuZCByZXR1cm4gZGVzY3JpcHRvci5cbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xuICAgIH1cblxuICAgIC8vIEVTNSAxNS4yLjMuNFxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy40XG4gICAgaWYgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFUzUgMTUuMi4zLjVcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuNVxuICAgIGlmICghT2JqZWN0LmNyZWF0ZSkge1xuXG4gICAgICAgIC8vIENvbnRyaWJ1dGVkIGJ5IEJyYW5kb24gQmVudmllLCBPY3RvYmVyLCAyMDEyXG4gICAgICAgIHZhciBjcmVhdGVFbXB0eTtcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJvdG8gPSAhKHsgX19wcm90b19fOiBudWxsIH0gaW5zdGFuY2VvZiBPYmplY3QpO1xuICAgICAgICAvLyB0aGUgZm9sbG93aW5nIHByb2R1Y2VzIGZhbHNlIHBvc2l0aXZlc1xuICAgICAgICAvLyBpbiBPcGVyYSBNaW5pID0+IG5vdCBhIHJlbGlhYmxlIGNoZWNrXG4gICAgICAgIC8vIE9iamVjdC5wcm90b3R5cGUuX19wcm90b19fID09PSBudWxsXG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4gICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuICAgICAgICAvLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuICAgICAgICAvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xuICAgICAgICB2YXIgc2hvdWxkVXNlQWN0aXZlWCA9IGZ1bmN0aW9uIHNob3VsZFVzZUFjdGl2ZVgoKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZWFybHkgaWYgZG9jdW1lbnQuZG9tYWluIG5vdCBzZXRcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIW5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRoaXMgc3VwcG9ydHMgSUU4IHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIHVzZWRcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4gICAgICAgIC8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4gICAgICAgIHZhciBnZXRFbXB0eVZpYUFjdGl2ZVggPSBmdW5jdGlvbiBnZXRFbXB0eVZpYUFjdGl2ZVgoKSB7XG4gICAgICAgICAgICB2YXIgZW1wdHk7XG4gICAgICAgICAgICB2YXIgeERvYztcblxuICAgICAgICAgICAgeERvYyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gICAgICAgICAgICB4RG9jLndyaXRlKCc8JyArIHNjcmlwdCArICc+PC8nICsgc2NyaXB0ICsgJz4nKTtcbiAgICAgICAgICAgIHhEb2MuY2xvc2UoKTtcblxuICAgICAgICAgICAgZW1wdHkgPSB4RG9jLnBhcmVudFdpbmRvdy5PYmplY3QucHJvdG90eXBlO1xuICAgICAgICAgICAgeERvYyA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUaGUgb3JpZ2luYWwgaW1wbGVtZW50YXRpb24gdXNpbmcgYW4gaWZyYW1lXG4gICAgICAgIC8vIGJlZm9yZSB0aGUgYWN0aXZleCBhcHByb2FjaCB3YXMgYWRkZWRcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4gICAgICAgIHZhciBnZXRFbXB0eVZpYUlGcmFtZSA9IGZ1bmN0aW9uIGdldEVtcHR5VmlhSUZyYW1lKCkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIGVtcHR5O1xuXG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcbiAgICAgICAgICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonO1xuXG4gICAgICAgICAgICBlbXB0eSA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdC5wcm90b3R5cGU7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgIGlmcmFtZSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiBnbG9iYWwgZG9jdW1lbnQgKi9cbiAgICAgICAgaWYgKHN1cHBvcnRzUHJvdG8gfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY3JlYXRlRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgX19wcm90b19fOiBudWxsIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gb2xkIElFIF9fcHJvdG9fXyBjYW4ndCBiZSB1c2VkIHRvIG1hbnVhbGx5IHNldCBgbnVsbGAsIG5vciBkb2VzXG4gICAgICAgICAgICAvLyBhbnkgb3RoZXIgbWV0aG9kIGV4aXN0IHRvIG1ha2UgYW4gb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSBub3RoaW5nLFxuICAgICAgICAgICAgLy8gYXNpZGUgZnJvbSBPYmplY3QucHJvdG90eXBlIGl0c2VsZi4gSW5zdGVhZCwgY3JlYXRlIGEgbmV3IGdsb2JhbFxuICAgICAgICAgICAgLy8gb2JqZWN0IGFuZCAqc3RlYWwqIGl0cyBPYmplY3QucHJvdG90eXBlIGFuZCBzdHJpcCBpdCBiYXJlLiBUaGlzIGlzXG4gICAgICAgICAgICAvLyB1c2VkIGFzIHRoZSBwcm90b3R5cGUgdG8gY3JlYXRlIG51bGxhcnkgb2JqZWN0cy5cbiAgICAgICAgICAgIGNyZWF0ZUVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSB3aGljaCBhcHByb2FjaCB0byB1c2VcbiAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbiAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSBzaG91bGRVc2VBY3RpdmVYKCkgPyBnZXRFbXB0eVZpYUFjdGl2ZVgoKSA6IGdldEVtcHR5VmlhSUZyYW1lKCk7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgZW1wdHkuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVtcHR5Lmhhc093blByb3BlcnR5O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbXB0eS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgZW1wdHkuaXNQcm90b3R5cGVPZjtcbiAgICAgICAgICAgICAgICBkZWxldGUgZW1wdHkudG9Mb2NhbGVTdHJpbmc7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGVtcHR5LnRvU3RyaW5nO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlbXB0eS52YWx1ZU9mO1xuXG4gICAgICAgICAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBlbXB0eTtcbiAgICAgICAgICAgICAgICAvLyBzaG9ydC1jaXJjdWl0IGZ1dHVyZSBjYWxsc1xuICAgICAgICAgICAgICAgIGNyZWF0ZUVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShwcm90b3R5cGUsIHByb3BlcnRpZXMpIHtcblxuICAgICAgICAgICAgdmFyIG9iamVjdDtcbiAgICAgICAgICAgIHZhciBUeXBlID0gZnVuY3Rpb24gVHlwZSgpIHt9OyAvLyBBbiBlbXB0eSBjb25zdHJ1Y3Rvci5cblxuICAgICAgICAgICAgaWYgKHByb3RvdHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9iamVjdCA9IGNyZWF0ZUVtcHR5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUgIT09IG51bGwgJiYgaXNQcmltaXRpdmUocHJvdG90eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIGBwYXJlbnRgIGNhbiBiZSBgbnVsbGBcbiAgICAgICAgICAgICAgICAgICAgLy8gT1IgKmFueSogYGluc3RhbmNlb2YgT2JqZWN0YCAgKE9iamVjdHxGdW5jdGlvbnxBcnJheXxSZWdFeHB8ZXRjKVxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYHR5cGVvZmAgdGhvLCBiL2MgaW4gb2xkIElFLCBET00gZWxlbWVudHMgYXJlIG5vdCBgaW5zdGFuY2VvZiBPYmplY3RgXG4gICAgICAgICAgICAgICAgICAgIC8vIGxpa2UgdGhleSBhcmUgaW4gbW9kZXJuIGJyb3dzZXJzLiBVc2luZyBgT2JqZWN0LmNyZWF0ZWAgb24gRE9NIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzLi4uZXJyLi4ucHJvYmFibHkgaW5hcHByb3ByaWF0ZSwgYnV0IHRoZSBuYXRpdmUgdmVyc2lvbiBhbGxvd3MgZm9yIGl0LlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QgcHJvdG90eXBlIG1heSBvbmx5IGJlIGFuIE9iamVjdCBvciBudWxsJyk7IC8vIHNhbWUgbXNnIGFzIENocm9tZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICBvYmplY3QgPSBuZXcgVHlwZSgpO1xuICAgICAgICAgICAgICAgIC8vIElFIGhhcyBubyBidWlsdC1pbiBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmdldFByb3RvdHlwZU9mYFxuICAgICAgICAgICAgICAgIC8vIG5laXRoZXIgYF9fcHJvdG9fX2AsIGJ1dCB0aGlzIG1hbnVhbGx5IHNldHRpbmcgYF9fcHJvdG9fX2Agd2lsbFxuICAgICAgICAgICAgICAgIC8vIGd1YXJhbnRlZSB0aGF0IGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIHdpbGwgd29yayBhcyBleHBlY3RlZCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0cyBjcmVhdGVkIHVzaW5nIGBPYmplY3QuY3JlYXRlYFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICAgICAgICAgICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmplY3QsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEVTNSAxNS4yLjMuNlxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy42XG5cbiAgICAvLyBQYXRjaCBmb3IgV2ViS2l0IGFuZCBJRTggc3RhbmRhcmQgbW9kZVxuICAgIC8vIERlc2lnbmVkIGJ5IGhheCA8aGF4LmdpdGh1Yi5jb20+XG4gICAgLy8gcmVsYXRlZCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3VlcyNpc3N1ZS81XG4gICAgLy8gSUU4IFJlZmVyZW5jZTpcbiAgICAvLyAgICAgaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2RkMjgyOTAwLmFzcHhcbiAgICAvLyAgICAgaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2RkMjI5OTE2LmFzcHhcbiAgICAvLyBXZWJLaXQgQnVnczpcbiAgICAvLyAgICAgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTM2NDIzXG5cbiAgICB2YXIgZG9lc0RlZmluZVByb3BlcnR5V29yayA9IGZ1bmN0aW9uIGRvZXNEZWZpbmVQcm9wZXJ0eVdvcmsob2JqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCAnc2VudGluZWwnLCB7fSk7XG4gICAgICAgICAgICByZXR1cm4gJ3NlbnRpbmVsJyBpbiBvYmplY3Q7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgZGVmaW5lUHJvcGVydHkgd29ya3MgaWYgaXQncyBnaXZlbi4gT3RoZXJ3aXNlLFxuICAgIC8vIHNoaW0gcGFydGlhbGx5LlxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgdmFyIGRlZmluZVByb3BlcnR5V29ya3NPbk9iamVjdCA9IGRvZXNEZWZpbmVQcm9wZXJ0eVdvcmsoe30pO1xuICAgICAgICB2YXIgZGVmaW5lUHJvcGVydHlXb3Jrc09uRG9tID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgfHwgZG9lc0RlZmluZVByb3BlcnR5V29yayhkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIGlmICghZGVmaW5lUHJvcGVydHlXb3Jrc09uT2JqZWN0IHx8ICFkZWZpbmVQcm9wZXJ0eVdvcmtzT25Eb20pIHtcbiAgICAgICAgICAgIHZhciBkZWZpbmVQcm9wZXJ0eUZhbGxiYWNrID0gT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnRpZXNGYWxsYmFjayA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZGVmaW5lUHJvcGVydHlGYWxsYmFjaykge1xuICAgICAgICB2YXIgRVJSX05PTl9PQkpFQ1RfREVTQ1JJUFRPUiA9ICdQcm9wZXJ0eSBkZXNjcmlwdGlvbiBtdXN0IGJlIGFuIG9iamVjdDogJztcbiAgICAgICAgdmFyIEVSUl9OT05fT0JKRUNUX1RBUkdFVCA9ICdPYmplY3QuZGVmaW5lUHJvcGVydHkgY2FsbGVkIG9uIG5vbi1vYmplY3Q6ICc7XG4gICAgICAgIHZhciBFUlJfQUNDRVNTT1JTX05PVF9TVVBQT1JURUQgPSAnZ2V0dGVycyAmIHNldHRlcnMgY2FuIG5vdCBiZSBkZWZpbmVkIG9uIHRoaXMgamF2YXNjcmlwdCBlbmdpbmUnO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZShvYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJfTk9OX09CSkVDVF9UQVJHRVQgKyBvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKGRlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJfTk9OX09CSkVDVF9ERVNDUklQVE9SICsgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYWtlIGEgdmFsaWFudCBhdHRlbXB0IHRvIHVzZSB0aGUgcmVhbCBkZWZpbmVQcm9wZXJ0eVxuICAgICAgICAgICAgLy8gZm9yIEk4J3MgRE9NIGVsZW1lbnRzLlxuICAgICAgICAgICAgaWYgKGRlZmluZVByb3BlcnR5RmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHlGYWxsYmFjay5jYWxsKE9iamVjdCwgb2JqZWN0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0aGUgc2hpbSBpZiB0aGUgcmVhbCBvbmUgZG9lc24ndCB3b3JrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCdzIGEgZGF0YSBwcm9wZXJ0eS5cbiAgICAgICAgICAgIGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgICAgICAvLyBmYWlsIHNpbGVudGx5IGlmICd3cml0YWJsZScsICdlbnVtZXJhYmxlJywgb3IgJ2NvbmZpZ3VyYWJsZSdcbiAgICAgICAgICAgICAgICAvLyBhcmUgcmVxdWVzdGVkIGJ1dCBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAvLyBhbHRlcm5hdGUgYXBwcm9hY2g6XG4gICAgICAgICAgICAgICAgaWYgKCAvLyBjYW4ndCBpbXBsZW1lbnQgdGhlc2UgZmVhdHVyZXM7IGFsbG93IGZhbHNlIGJ1dCBub3QgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAoJ3dyaXRhYmxlJyBpbiBkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLndyaXRhYmxlKSB8fFxuICAgICAgICAgICAgICAgICAgICAoJ2VudW1lcmFibGUnIGluIGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3IuZW51bWVyYWJsZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKCdjb25maWd1cmFibGUnIGluIGRlc2NyaXB0b3IgJiYgIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RoaXMgaW1wbGVtZW50YXRpb24gb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5IGRvZXMgbm90IHN1cHBvcnQgY29uZmlndXJhYmxlLCBlbnVtZXJhYmxlLCBvciB3cml0YWJsZS4nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c0FjY2Vzc29ycyAmJiAobG9va3VwR2V0dGVyKG9iamVjdCwgcHJvcGVydHkpIHx8IGxvb2t1cFNldHRlcihvYmplY3QsIHByb3BlcnR5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXMgYWNjZXNzb3JzIGFyZSBzdXBwb3J0ZWQgb25seSBvbiBlbmdpbmVzIGltcGxlbWVudGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBgX19wcm90b19fYCB3ZSBjYW4gc2FmZWx5IG92ZXJyaWRlIGBfX3Byb3RvX19gIHdoaWxlIGRlZmluaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgcHJvcGVydHkgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGl0IGFuIGluaGVyaXRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBhY2Nlc3Nvci5cbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5fX3Byb3RvX18gPSBwcm90b3R5cGVPZk9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVsZXRpbmcgYSBwcm9wZXJ0eSBhbnl3YXkgc2luY2UgZ2V0dGVyIC8gc2V0dGVyIG1heSBiZVxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZpbmVkIG9uIG9iamVjdCBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbcHJvcGVydHldID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0dGluZyBvcmlnaW5hbCBgX19wcm90b19fYCBiYWNrIG5vdy5cbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Ll9fcHJvdG9fXyA9IHByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtwcm9wZXJ0eV0gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0dldHRlciA9ICdnZXQnIGluIGRlc2NyaXB0b3I7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1NldHRlciA9ICdzZXQnIGluIGRlc2NyaXB0b3I7XG4gICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0FjY2Vzc29ycyAmJiAoaGFzR2V0dGVyIHx8IGhhc1NldHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJfQUNDRVNTT1JTX05PVF9TVVBQT1JURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnb3QgdGhhdCBmYXIgdGhlbiBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGNhbiBiZSBkZWZpbmVkICEhXG4gICAgICAgICAgICAgICAgaWYgKGhhc0dldHRlcikge1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVHZXR0ZXIob2JqZWN0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvci5nZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFzU2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVNldHRlcihvYmplY3QsIHByb3BlcnR5LCBkZXNjcmlwdG9yLnNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFUzUgMTUuMi4zLjdcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuN1xuICAgIGlmICghT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgfHwgZGVmaW5lUHJvcGVydGllc0ZhbGxiYWNrKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhvYmplY3QsIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIC8vIG1ha2UgYSB2YWxpYW50IGF0dGVtcHQgdG8gdXNlIHRoZSByZWFsIGRlZmluZVByb3BlcnRpZXNcbiAgICAgICAgICAgIGlmIChkZWZpbmVQcm9wZXJ0aWVzRmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lUHJvcGVydGllc0ZhbGxiYWNrLmNhbGwoT2JqZWN0LCBvYmplY3QsIHByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdGhlIHNoaW0gaWYgdGhlIHJlYWwgb25lIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgIT09ICdfX3Byb3RvX18nKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5LCBwcm9wZXJ0aWVzW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEVTNSAxNS4yLjMuOFxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy44XG4gICAgaWYgKCFPYmplY3Quc2VhbCkge1xuICAgICAgICBPYmplY3Quc2VhbCA9IGZ1bmN0aW9uIHNlYWwob2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KG9iamVjdCkgIT09IG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5zZWFsIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBtaXNsZWFkaW5nIGFuZCBicmVha3MgZmVhdHVyZS1kZXRlY3Rpb24sIGJ1dFxuICAgICAgICAgICAgLy8gYWxsb3dzIFwic2VjdXJhYmxlXCIgY29kZSB0byBcImdyYWNlZnVsbHlcIiBkZWdyYWRlIHRvIHdvcmtpbmdcbiAgICAgICAgICAgIC8vIGJ1dCBpbnNlY3VyZSBjb2RlLlxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBFUzUgMTUuMi4zLjlcbiAgICAvLyBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3gxNS4yLjMuOVxuICAgIGlmICghT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdChvYmplY3QpICE9PSBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuZnJlZXplIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBPYmplY3RzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcyBpcyBtaXNsZWFkaW5nIGFuZCBicmVha3MgZmVhdHVyZS1kZXRlY3Rpb24sIGJ1dFxuICAgICAgICAgICAgLy8gYWxsb3dzIFwic2VjdXJhYmxlXCIgY29kZSB0byBcImdyYWNlZnVsbHlcIiBkZWdyYWRlIHRvIHdvcmtpbmdcbiAgICAgICAgICAgIC8vIGJ1dCBpbnNlY3VyZSBjb2RlLlxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBkZXRlY3QgYSBSaGlubyBidWcgYW5kIHBhdGNoIGl0XG4gICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUgPSAoZnVuY3Rpb24gKGZyZWV6ZU9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcmVlemVPYmplY3Qob2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KE9iamVjdC5mcmVlemUpKTtcbiAgICB9XG5cbiAgICAvLyBFUzUgMTUuMi4zLjEwXG4gICAgLy8gaHR0cDovL2VzNS5naXRodWIuY29tLyN4MTUuMi4zLjEwXG4gICAgaWYgKCFPYmplY3QucHJldmVudEV4dGVuc2lvbnMpIHtcbiAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zID0gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMob2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KG9iamVjdCkgIT09IG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbWlzbGVhZGluZyBhbmQgYnJlYWtzIGZlYXR1cmUtZGV0ZWN0aW9uLCBidXRcbiAgICAgICAgICAgIC8vIGFsbG93cyBcInNlY3VyYWJsZVwiIGNvZGUgdG8gXCJncmFjZWZ1bGx5XCIgZGVncmFkZSB0byB3b3JraW5nXG4gICAgICAgICAgICAvLyBidXQgaW5zZWN1cmUgY29kZS5cbiAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRVM1IDE1LjIuMy4xMVxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy4xMVxuICAgIGlmICghT2JqZWN0LmlzU2VhbGVkKSB7XG4gICAgICAgIE9iamVjdC5pc1NlYWxlZCA9IGZ1bmN0aW9uIGlzU2VhbGVkKG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdChvYmplY3QpICE9PSBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuaXNTZWFsZWQgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRVM1IDE1LjIuMy4xMlxuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy4xMlxuICAgIGlmICghT2JqZWN0LmlzRnJvemVuKSB7XG4gICAgICAgIE9iamVjdC5pc0Zyb3plbiA9IGZ1bmN0aW9uIGlzRnJvemVuKG9iamVjdCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdChvYmplY3QpICE9PSBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuaXNGcm96ZW4gY2FuIG9ubHkgYmUgY2FsbGVkIG9uIE9iamVjdHMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRVM1IDE1LjIuMy4xM1xuICAgIC8vIGh0dHA6Ly9lczUuZ2l0aHViLmNvbS8jeDE1LjIuMy4xM1xuICAgIGlmICghT2JqZWN0LmlzRXh0ZW5zaWJsZSkge1xuICAgICAgICBPYmplY3QuaXNFeHRlbnNpYmxlID0gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKG9iamVjdCkge1xuICAgICAgICAgICAgLy8gMS4gSWYgVHlwZShPKSBpcyBub3QgT2JqZWN0IHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGlmIChPYmplY3Qob2JqZWN0KSAhPT0gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmlzRXh0ZW5zaWJsZSBjYW4gb25seSBiZSBjYWxsZWQgb24gT2JqZWN0cy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDIuIFJldHVybiB0aGUgQm9vbGVhbiB2YWx1ZSBvZiB0aGUgW1tFeHRlbnNpYmxlXV0gaW50ZXJuYWwgcHJvcGVydHkgb2YgTy5cbiAgICAgICAgICAgIHZhciBuYW1lID0gJyc7XG4gICAgICAgICAgICB3aGlsZSAob3ducyhvYmplY3QsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgbmFtZSArPSAnPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmplY3RbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlID0gb3ducyhvYmplY3QsIG5hbWUpO1xuICAgICAgICAgICAgZGVsZXRlIG9iamVjdFtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VzNS1zaGltL2VzNS1zaGFtLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvbnNvbGUtcG9seWZpbGwuIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BhdWxtaWxsci9jb25zb2xlLXBvbHlmaWxsXG4vLyBNYWtlIGl0IHNhZmUgdG8gZG8gY29uc29sZS5sb2coKSBhbHdheXMuXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKCFnbG9iYWwuY29uc29sZSkge1xuICAgIGdsb2JhbC5jb25zb2xlID0ge307XG4gIH1cbiAgdmFyIGNvbiA9IGdsb2JhbC5jb25zb2xlO1xuICB2YXIgcHJvcCwgbWV0aG9kO1xuICB2YXIgZHVtbXkgPSBmdW5jdGlvbigpIHt9O1xuICB2YXIgcHJvcGVydGllcyA9IFsnbWVtb3J5J107XG4gIHZhciBtZXRob2RzID0gKCdhc3NlcnQsY2xlYXIsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsJyArXG4gICAgICdncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGxvZyxtYXJrVGltZWxpbmUscHJvZmlsZSxwcm9maWxlcyxwcm9maWxlRW5kLCcgK1xuICAgICAnc2hvdyx0YWJsZSx0aW1lLHRpbWVFbmQsdGltZWxpbmUsdGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm4nKS5zcGxpdCgnLCcpO1xuICB3aGlsZSAocHJvcCA9IHByb3BlcnRpZXMucG9wKCkpIGlmICghY29uW3Byb3BdKSBjb25bcHJvcF0gPSB7fTtcbiAgd2hpbGUgKG1ldGhvZCA9IG1ldGhvZHMucG9wKCkpIGlmICghY29uW21ldGhvZF0pIGNvblttZXRob2RdID0gZHVtbXk7XG4gIC8vIFVzaW5nIGB0aGlzYCBmb3Igd2ViIHdvcmtlcnMgJiBzdXBwb3J0cyBCcm93c2VyaWZ5IC8gV2VicGFjay5cbn0pKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gdGhpcyA6IHdpbmRvdyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb25zb2xlLXBvbHlmaWxsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3RhdGljL3Njc3MvcHVibGljLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnNvbGUubG9nKFwidGVzdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=