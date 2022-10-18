"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var utils = require('./utils/index');

var _require = require('./config'),
    prefix = _require.prefix;

module.exports = (_module$exports = {}, _defineProperty(_module$exports, "".concat(prefix, "number"), function number(v, rule) {
  if (utils.isNumber(v)) {
    var _rule$maxLength, _rule$minLength, _rule$max, _rule$min;

    var maxLength = (_rule$maxLength = rule.maxLength) !== null && _rule$maxLength !== void 0 ? _rule$maxLength : Infinity;
    var minLength = (_rule$minLength = rule.minLength) !== null && _rule$minLength !== void 0 ? _rule$minLength : 0;
    var max = (_rule$max = rule.max) !== null && _rule$max !== void 0 ? _rule$max : Infinity;
    var min = (_rule$min = rule.min) !== null && _rule$min !== void 0 ? _rule$min : -Infinity;
    return v <= max && v >= min && "".concat(v).length <= maxLength && "".concat(v).length >= minLength;
  }

  return utils.isNumber(v);
}), _defineProperty(_module$exports, "".concat(prefix, "string"), function string(value, rule) {
  if (utils.isString(value)) {
    var _rule$maxLength2, _rule$minLength2;

    if (rule.isTrim) {
      value = value.trim();
    }

    var maxLength = (_rule$maxLength2 = rule.maxLength) !== null && _rule$maxLength2 !== void 0 ? _rule$maxLength2 : Infinity;
    var minLength = (_rule$minLength2 = rule.minLength) !== null && _rule$minLength2 !== void 0 ? _rule$minLength2 : 0;
    return value.length <= maxLength && value.length >= minLength;
  }

  return utils.isString(value);
}), _defineProperty(_module$exports, "".concat(prefix, "boolean"), function boolean(value, rule) {
  return utils.isBoolean(value);
}), _defineProperty(_module$exports, "".concat(prefix, "phone"), /^1[3-9][0-9]\d{8}$/), _defineProperty(_module$exports, "".concat(prefix, "array"), function array(value, rule) {
  if (utils.isArray(value)) {
    var _rule$maxLength3, _rule$minLength3;

    var length = value.length;
    var maxLength = (_rule$maxLength3 = rule.maxLength) !== null && _rule$maxLength3 !== void 0 ? _rule$maxLength3 : Infinity;
    var minLength = (_rule$minLength3 = rule.minLength) !== null && _rule$minLength3 !== void 0 ? _rule$minLength3 : 0;
    return length <= maxLength && length >= minLength;
  }

  return utils.isArray(value);
}), _defineProperty(_module$exports, "".concat(prefix, "object"), function object(value, rule) {
  return utils.isObject(value);
}), _defineProperty(_module$exports, "".concat(prefix, "IDCard"), /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/), _module$exports);