# param-verific

## Installation

For node.js, you can use this command to install:

    npm install param-verific


## Example
You could use like this:
```JavaScript
	const user = {
		name: '哈哈',
		age: 21,
		phone: '17743256788',
		gender: 0,
		regular: 123,
		arr: [1],
		obj: {}
	}
	const verif = {
		name: {
			verify: 'string',
			minLength: 2,
			tips: '昵称不能为空！'
		},
		age: {
			verify: 'number',
			required: true, //不能为null 或 undefined 默认true 注意：1.07版本前required默认为false 即默认属性值可以为null 或 undefined
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
			},
			required: true
		},
		regular: {
			verify: /^123/,
			required: true
		},
		arr: {
			verify: 'array',
			required: true,
		},
		obj: {
			verify: 'object',
			required: true
		}
	}
	const v = new verifica(verif)
    v.verification(user, ({ success, error }) => {
        expect(error).toHaveLength(0)
    }).then(res => {

	}).catch(err => {
		expect(err).toHaveLength(0)
	})

```



## Contact
The project's website is located at https://github.com/jishunyu/param-verific
Author: Ji-Yang (443239423@qq.com)
