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
	}
	const verif = {
		name: {
			verify: 'string',
			maxLength: 10,
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
		
	}
	const v = new verifica(verif)
    v.verification(user, ({ success, error }) => {
        expect(error).toHaveLength(0)
    })
```
If you want to customize the rules:
```JavaScript
	const verif = {
		gender: {
			verify: function(value, rule){
				return value == 0 //true or false
			},
			required: true
		},
		regular: {
			verify: /^123/,
			required: true
		}
	}
	const user = {
		gender: 0,
		regular: 123
	}
	const v = new verifica(verif)
    v.verification(user, ({ success, error }) => {
        expect(error).toHaveLength(0)
    })

```



## Contact
The project's website is located at https://github.com/
Author: Ji-Yang (443239423@qq.com)
