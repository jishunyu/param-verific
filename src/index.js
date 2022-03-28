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
            const success = [];
            const error = [];
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                const rule = this.rule[key]
                const value = verificaObject[key]
                const result = this._verifica(rule, value)
                result ? success.push({ key, ...rule }) : error.push({ key, ...rule })
            }
            const result = { success, error }
            
            callback && callback(result);

            error.length > 0 ? reject(result) : resolve(result)
        })
    }
    _verifica(rule, value) {
        const verify = rule.verify
        if (!verify) {
            return false
        }
        if (utils.isString(verify)) {
            if (builtRule[prefix + verify]) {
                return this._verifica(Object.assign({}, rule, { verify: builtRule[prefix + verify] }), value)
            }
            return false
        }
        if (utils.isRegExp(verify)) {
            return this._handleRegExp(rule, value)
        } else if (utils.isFunction(verify)) {
            return this._handleFunction(rule, value)
        }
        return false
    }
    _handleRegExp(rule, value) {
        if (!rule.required && utils.isEmpty(value)) {
            return true
        }
        return rule.verify.test(value)
    }
    _handleFunction(rule, value) {
        if (!rule.required && utils.isEmpty(value)) {
            return true
        }
        return rule.verify(value, rule)
    }
}

Verifica.builtRule = builtRule;
module.exports = Verifica;
