const builtRule = require('./builtIn')
const utils = require('./utils/index')
class verifica {
    constructor(rule) {
        this.rule = rule;
    }
    verification(verificaObject, callback) {
        const keys = Object.keys(verificaObject)
        const success = [];
        const error = [];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            const rule = this.rule[key]
            if (!rule) continue;
            const value = verificaObject[key]
            const result = this._verifica(rule, value)
            result ? success.push({ key, ...rule }) : error.push({ key, ...rule })
        }
        callback({ success, error })
    }
    _verifica(rule, value) {
        const verify = rule.verify
        if (!verify) {
            return false
        }
        if (utils.isString(verify)) {
            if (builtRule[verify]) {
                return this._verifica(Object.assign({}, rule, { verify: builtRule[verify] }), value)
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

module.exports = verifica;

