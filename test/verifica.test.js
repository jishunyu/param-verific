const verifica = require('../src/index');
const user = {
    name: '哈哈',
    age: 21,
    phone: '17743256788',
    gender: 0,
    regular: 123,
    arr: [],
    obj: {}
}
const verif = {
    name: {
        verify: 'string',
        minLength: 2
    },
    age: {
        verify: 'number',
        required: true,
        maxLength: 10,
        minLength: 2
    },
    phone: {
        verify: 'phone',
        required: true
    },
    gender: {
        verify: function(value, rule){
            return value == 0 //true or false
        }
    },
    regular: {
        verify: /^123/,
        required: true
    },
    arr: {
        verify: 'array',
        required: true,
        isEmpty: false
    },
    obj: {
        verify: 'object',
        required: true
    }
}

test('params verific', () => {
    const v = new verifica(verif)
    v.verification(user, ({ success, error }) => {
        expect(error).toHaveLength(0)
    })
});