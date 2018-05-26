module.exports = {
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false
		}
	},

	rules: {
		// enforces no braces where they can be omitted
		// https://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': ['warn', 'as-needed'],

		// require parens in arrow function arguments
		// https://eslint.org/docs/rules/arrow-parens
		'arrow-parens': ['warn', 'as-needed'],

		// require space before/after arrow function's arrow
		// https://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': 'warn',

		// verify super() callings in constructors
		'constructor-super': 'error',

		// disallow modifying variables of class declarations
		// https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// disallow arrow functions where they could be confused with comparisons
		// https://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': ['warn', {
			allowParens: true,
		}],

		// disallow modifying variables that are declared using const
		'no-const-assign': 'error',

		// disallow duplicate class members
		// https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',


		// disallow symbol constructor
		// https://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// disallow to use this/super before super() calling in constructors.
		// https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// disallow useless computed property keys
		// https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'warn',

		// disallow unnecessary constructor
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'warn',

		// disallow renaming import, export, and destructured assignments to the same name
		// https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': ['warn', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],

		// require let or const instead of var
		'no-var': 'warn',

		// require method and property shorthand syntax for object literals
		// https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': ['warn', 'always'],

		// suggest using arrow functions as callbacks
		'prefer-arrow-callback': ['warn', {
			allowNamedFunctions: false,
			allowUnboundThis: true,
		}],

		// suggest using of const declaration for variables that are never modified after declared
		'prefer-const': ['warn', {
			destructuring: 'all',
		}],

		// Prefer destructuring from arrays and objects
		// https://eslint.org/docs/rules/prefer-destructuring
		'prefer-destructuring': ['warn', {
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: true,
			},
		}, {
			enforceForRenamedProperties: false,
		}],

		// disallow parseInt() in favor of binary, octal, and hexadecimal literals
		// https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'warn',

		// use rest parameters instead of arguments
		// https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'warn',

		// suggest using the spread operator instead of .apply()
		// https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'warn',

		// suggest using template literals instead of string concatenation
		// https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'warn',

		// disallow generator functions that do not have yield
		// https://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// enforce spacing between object rest-spread
		// https://eslint.org/docs/rules/rest-spread-spacing
		'rest-spread-spacing': ['warn', 'never'],

		// enforce usage of spacing in template strings
		// https://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': 'warn',
	}
};
