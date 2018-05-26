module.exports = {
	rules: {
		// enforces getter/setter pairs in objects
		'accessor-pairs': 'off',

		// enforces return statements in callbacks of array's methods
		// https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': ['error', { allowImplicit: true }],

		// treat var statements as if they were block scoped
		'block-scoped-var': 'warn',

		// specify curly brace conventions for all control statements
		curly: ['warn', 'multi-line'],

		// require default case in switch statements
		'default-case': ['error', { commentPattern: '^no default$' }],

		// encourages use of dot notation whenever possible
		'dot-notation': 'warn',

		// require the use of === and !==
		// https://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['warn', 'always', { null: 'ignore' }],

		// disallow the use of alert, confirm, and prompt
		'no-alert': 'warn',

		// disallow lexical declarations in case/default clauses
		// https://eslint.org/docs/rules/no-case-declarations.html
		'no-case-declarations': 'error',

		// disallow else after a return in an if
		// https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['warn', { allowElseIf: false }],

		// disallow empty functions, except for standalone funcs/arrows
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': ['error', {
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			]
		}],

		// disallow empty destructuring patterns
		// https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'warn',

		// disallow use of eval()
		'no-eval': 'error',

		// disallow adding to native types
		'no-extend-native': 'error',

		// disallow unnecessary function binding
		'no-extra-bind': 'error',

		// disallow fallthrough of case statements
		'no-fallthrough': 'error',

		// disallow reassignments of native objects or read-only globals
		// https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'error',

		// disallow use of eval()-like methods
		'no-implied-eval': 'error',

		// disallow unnecessary nested blocks
		'no-lone-blocks': 'error',

		// disallow creation of functions within loops
		'no-loop-func': 'error',


		// disallow use of multiple spaces
		'no-multi-spaces': ['warn', {
			ignoreEOLComments: false,
		}],

		// disallow use of multiline strings
		'no-multi-str': 'warn',

		// disallow use of new operator when not part of the assignment or comparison
		'no-new': 'error',

		// disallow use of new operator for Function object
		'no-new-func': 'error',

		// disallows creating new instances of String, Number, and Boolean
		'no-new-wrappers': 'error',

		// disallow use of (old style) octal literals
		'no-octal': 'error',

		// disallow use of octal escape sequences in string literals, such as
		// var foo = 'Copyright \251';
		'no-octal-escape': 'error',

		// rule: https://eslint.org/docs/rules/no-param-reassign.html
		// TODO: consider turning this on in future
		'no-param-reassign': 'off',

		// disallow usage of __proto__ property
		'no-proto': 'error',

		// disallow declaring the same variable more then once
		'no-redeclare': 'error',

		// disallow use of assignment in return statement
		'no-return-assign': ['error', 'always'],

		// disallow redundant `return await`
		'no-return-await': 'error',

		// disallow use of `javascript:` urls.
		'no-script-url': 'error',

		// disallow self assignment
		// https://eslint.org/docs/rules/no-self-assign
		'no-self-assign': 'error',

		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 'error',

		// disallow use of comma operator
		'no-sequences': 'error',

		// restrict what can be thrown as an exception
		// TODO: consider turning this off
		'no-throw-literal': 'error',

		// disallow usage of expressions in statement position
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],

		// disallow useless string concatenation
		// https://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// disallow unnecessary string escaping
		// https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// disallow redundant return; keywords
		// https://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// disallow use of void operator
		// https://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// disallow use of the with statement
		'no-with': 'error',

		// require using Error objects as Promise rejection reasons
		// https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': 'off',

		// require use of the second argument for parseInt()
		radix: 'error',

		// requires to declare all vars on top of their containing scope
		'vars-on-top': 'error',

		// require immediate function invocation to be wrapped in parentheses
		// https://eslint.org/docs/rules/wrap-iife.html
		'wrap-iife': ['warn', 'outside'],

		// require or disallow Yoda conditions
		yoda: 'error'
	}
};
