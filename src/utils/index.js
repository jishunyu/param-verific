exports.isString = function isString(str) {
    return Object.prototype.toString.call(str) === '[object String]'
}
exports.isNumber = function isNumber(num) {
    return Object.prototype.toString.call(num) === '[object Number]'
}
exports.isRegExp = function isRegExp(reg) {
    return Object.prototype.toString.call(reg) === '[object RegExp]'
}
exports.isFunction = function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
}
exports.isBoolean = function isBoolean(boolean) {
    return Object.prototype.toString.call(boolean) === '[object Boolean]'
}
exports.isEmpty = function isEmpty(val) {
    return val === null || val === undefined
}