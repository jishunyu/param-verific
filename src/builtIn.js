const utils = require('./utils/index')
const { prefix } = require('./config')
module.exports = {
    [`${prefix}number`]: (value, rule) => {
        if(utils.isNumber(value)){
            const maxLength = rule.maxLength ?? Infinity
            const minLength = rule.minLength ?? 0
            const v = `${value}`
            return (v.length <= maxLength ) && (v.length >= minLength)
        }
        return utils.isNumber(value)
    },
    [`${prefix}string`]: (value, rule) => {
        if (utils.isString(value)) {
            if(rule.isTrim){
                value = value.trim()
            }
            if(rule.isEmpty && (value === '')){
                return false
            }
            const maxLength = rule.maxLength ?? Infinity
            const minLength = rule.minLength ?? 0
            return (value.length <= maxLength ) && (value.length >= minLength)
        }
        return utils.isString(value)
    },
    [`${prefix}boolean`]: (value, rule) => {
        return utils.isBoolean(value)
    },
    [`${prefix}phone`]: /^1[3-9][0-9]\d{8}$/,
    [`${prefix}array`]: (value, rule) => {
        if(utils.isArray(value)){
            const length = value.length
            if(!rule.isEmpty && length <= 0){
                return false
            }
            const maxLength = rule.maxLength ?? Infinity
            const minLength = rule.minLength ?? 0
            return (value.length <= maxLength ) && (value.length >= minLength)
        }
        return utils.isArray(value)
    },
    [`${prefix}object`]: (value, rule) => {
        return utils.isObject(value)
    },
    [`${prefix}IDCard`]: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
}
