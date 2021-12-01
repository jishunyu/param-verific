const utils = require('./utils/index')

module.exports = {
    'number': (value, rule) => {
        if(utils.isNumber(value)){
            const maxLength = rule.maxLength ?? Infinity
            const minLength = rule.minLength ?? 0
            const v = `${value}`
            return (v.length <= maxLength ) && (v.length >= minLength)
        }
        return utils.isNumber(value)
    },
    'string': (value, rule) => {
        if (utils.isString(value)) {
            const maxLength = rule.maxLength ?? Infinity
            const minLength = rule.minLength ?? 0
            return (value.length <= maxLength ) && (value.length >= minLength)
        }
        return utils.isString(value)
    },
    'boolean': (value, rule) => {
        return utils.isBoolean(value)
    },
    'phone': /^1[3-9][0-9]\d{8}$/,
    'array': (value, rule) => {
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
}
