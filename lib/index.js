/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builtIn.js":
/*!************************!*\
  !*** ./src/builtIn.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _module$exports;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar utils = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.js\");\n\nvar _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    prefix = _require.prefix;\n\nmodule.exports = (_module$exports = {}, _defineProperty(_module$exports, \"\".concat(prefix, \"number\"), function number(v, rule) {\n  if (utils.isNumber(v)) {\n    var _rule$maxLength, _rule$minLength, _rule$max, _rule$min;\n\n    var maxLength = (_rule$maxLength = rule.maxLength) !== null && _rule$maxLength !== void 0 ? _rule$maxLength : Infinity;\n    var minLength = (_rule$minLength = rule.minLength) !== null && _rule$minLength !== void 0 ? _rule$minLength : 0;\n    var max = (_rule$max = rule.max) !== null && _rule$max !== void 0 ? _rule$max : Infinity;\n    var min = (_rule$min = rule.min) !== null && _rule$min !== void 0 ? _rule$min : -Infinity;\n    return v <= max && v >= min && \"\".concat(v).length <= maxLength && \"\".concat(v).length >= minLength;\n  }\n\n  return utils.isNumber(v);\n}), _defineProperty(_module$exports, \"\".concat(prefix, \"string\"), function string(value, rule) {\n  if (utils.isString(value)) {\n    var _rule$maxLength2, _rule$minLength2;\n\n    if (rule.isTrim) {\n      value = value.trim();\n    }\n\n    var maxLength = (_rule$maxLength2 = rule.maxLength) !== null && _rule$maxLength2 !== void 0 ? _rule$maxLength2 : Infinity;\n    var minLength = (_rule$minLength2 = rule.minLength) !== null && _rule$minLength2 !== void 0 ? _rule$minLength2 : 0;\n    return value.length <= maxLength && value.length >= minLength;\n  }\n\n  return utils.isString(value);\n}), _defineProperty(_module$exports, \"\".concat(prefix, \"boolean\"), function boolean(value, rule) {\n  return utils.isBoolean(value);\n}), _defineProperty(_module$exports, \"\".concat(prefix, \"phone\"), /^1[3-9][0-9]\\d{8}$/), _defineProperty(_module$exports, \"\".concat(prefix, \"array\"), function array(value, rule) {\n  if (utils.isArray(value)) {\n    var _rule$maxLength3, _rule$minLength3;\n\n    var length = value.length;\n    var maxLength = (_rule$maxLength3 = rule.maxLength) !== null && _rule$maxLength3 !== void 0 ? _rule$maxLength3 : Infinity;\n    var minLength = (_rule$minLength3 = rule.minLength) !== null && _rule$minLength3 !== void 0 ? _rule$minLength3 : 0;\n    return length <= maxLength && length >= minLength;\n  }\n\n  return utils.isArray(value);\n}), _defineProperty(_module$exports, \"\".concat(prefix, \"object\"), function object(value, rule) {\n  return utils.isObject(value);\n}), _defineProperty(_module$exports, \"\".concat(prefix, \"IDCard\"), /^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/), _module$exports);\n\n//# sourceURL=webpack://param-verific/./src/builtIn.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = {\n  prefix: '_' //函数调用前缀\n\n};\n\n//# sourceURL=webpack://param-verific/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar builtRule = __webpack_require__(/*! ./builtIn */ \"./src/builtIn.js\");\n\nvar utils = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.js\");\n\nvar _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    prefix = _require.prefix;\n\nvar Verifica = /*#__PURE__*/function () {\n  function Verifica(rule) {\n    _classCallCheck(this, Verifica);\n\n    if (!utils.isObject(rule)) {\n      throw '参数错误：rule Must be an object';\n    }\n\n    this.rule = rule;\n  }\n\n  _createClass(Verifica, [{\n    key: \"verification\",\n    value: function verification(verificaObject, callback) {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        var keys = Object.keys(_this.rule);\n        var result = keys.reduce(function (previousValue, key) {\n          var rule = _this.rule[key];\n          var value = verificaObject[key];\n\n          var res = _this._verifica(rule, value);\n\n          var success = previousValue.success,\n              error = previousValue.error;\n          res ? success.push(_objectSpread({\n            key: key\n          }, rule)) : error.push(_objectSpread({\n            key: key\n          }, rule));\n          return previousValue;\n        }, {\n          success: [],\n          error: []\n        });\n        callback && callback(result);\n        result.error.length > 0 ? reject(result) : resolve(result);\n      });\n    }\n  }, {\n    key: \"_verifica\",\n    value: function _verifica(rule, value) {\n      var verify = rule.verify;\n\n      if (!verify) {\n        return false;\n      }\n\n      if (utils.isEmpty(rule.required)) {\n        rule.required = true;\n      }\n\n      if (utils.isString(verify)) {\n        if (builtRule[prefix + verify]) {\n          return this._verifica(Object.assign({}, rule, {\n            verify: builtRule[prefix + verify]\n          }), value);\n        }\n\n        return false;\n      }\n\n      if (utils.isRegExp(verify)) {\n        return this._handleRegExp(rule, value);\n      } else if (utils.isFunction(verify)) {\n        return this._handleFunction(rule, value);\n      }\n\n      return false;\n    }\n  }, {\n    key: \"_handleRegExp\",\n    value: function _handleRegExp(rule, value) {\n      if (!rule.required && utils.isEmpty(value)) {\n        return true;\n      }\n\n      return rule.verify.test(value);\n    }\n  }, {\n    key: \"_handleFunction\",\n    value: function _handleFunction(rule, value) {\n      if (!rule.required && utils.isEmpty(value)) {\n        return true;\n      }\n\n      return rule.verify(value, rule);\n    }\n  }]);\n\n  return Verifica;\n}();\n\nVerifica.builtRule = builtRule;\nmodule.exports = Verifica;\n\n//# sourceURL=webpack://param-verific/./src/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.isString = function isString(str) {\n  return Object.prototype.toString.call(str) === '[object String]';\n};\n\nexports.isNumber = function isNumber(num) {\n  return Object.prototype.toString.call(num) === '[object Number]';\n};\n\nexports.isRegExp = function isRegExp(reg) {\n  return Object.prototype.toString.call(reg) === '[object RegExp]';\n};\n\nexports.isFunction = function isFunction(fn) {\n  return Object.prototype.toString.call(fn) === '[object Function]';\n};\n\nexports.isBoolean = function isBoolean(_boolean) {\n  return Object.prototype.toString.call(_boolean) === '[object Boolean]';\n};\n\nexports.isEmpty = function isEmpty(val) {\n  return val === null || val === undefined;\n};\n\nexports.isArray = function isNumber(array) {\n  return Object.prototype.toString.call(array) === '[object Array]';\n};\n\nexports.isObject = function isObject(obj) {\n  return Object.prototype.toString.call(obj) === '[object Object]';\n};\n\n//# sourceURL=webpack://param-verific/./src/utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;