const builtRule = require('./builtIn')
const utils = require('./utils/index')
const { prefix } = require('./config')
class Verifica {
    constructor(rule) {
        if(!utils.isObject(rule)){
            throw('参数错误：rule Must be an object')
        }
        this.rule = rule;
    }
    verification(verificaObject, callback) {
        return new Promise((resolve,reject) => {
            const keys = Object.keys(this.rule)
            const result = keys.reduce((previousValue,key) => {
                const rule = this.rule[key]
                const value = verificaObject[key]
                const res = this._verifica(rule, value)
                const { success, error } = previousValue
                res ? success.push({ key, ...rule }) : error.push({ key, ...rule })
                return previousValue;
            },{success: [],error: []})
            
            callback && callback(result);

            result.error.length > 0 ? reject(result) : resolve(result)
        })
    }
    _verifica(rule, value) {
        const verify = rule.verify
        if (!verify) {
            return false
        }
        if(utils.isEmpty(rule.required)){
            rule.required = true
        }
        if (utils.isString(verify)) {
            if (builtRule[prefix + verify]) {
                return this._verifica(Object.assign({}, rule, { verify: builtRule[prefix + verify] }), value)
            }
            return false
        }
        if (!rule.required && utils.isEmpty(value)) {
            return true
        }
        if (utils.isRegExp(verify)) {
            return this._handleRegExp(rule, value)
        } else if (utils.isFunction(verify)) {
            return this._handleFunction(rule, value)
        }
        return false
    }
    _handleRegExp(rule, value) {
        return rule.verify.test(value)
    }
    _handleFunction(rule, value) {
        return rule.verify(value, rule)
    }
}

Verifica.builtRule = builtRule;
module.exports = Verifica;
