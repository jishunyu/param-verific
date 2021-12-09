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
			isEmpty: false
		},
		obj: {
			verify: 'object',
			required: true
		}
	}
	const v = new verifica(verif)
    v.verification(user, ({ success, error }) => {
        expect(error).toHaveLength(0)
    })

```



## Contact
The project's website is located at https://github.com/jishunyu/param-verific
Author: Ji-Yang (443239423@qq.com)
