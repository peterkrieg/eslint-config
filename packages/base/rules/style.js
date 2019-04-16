module.exports = {
	rules: {
		// enforce spacing inside array brackets
		'array-bracket-spacing': ['warn', 'never'],

		// enforce spacing inside single-line blocks
		// https://eslint.org/docs/rules/block-spacing
		'block-spacing': ['warn', 'always'],

		// enforce one true brace style
		'brace-style': ['warn', 'stroustrup'],

		// require camel case names
		camelcase: ['warn', { properties: 'never' }],


		// require trailing commas in multiline object literals
		'comma-dangle': ['warn', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
		}],

		// enforce spacing before and after comma
		'comma-spacing': ['error', { before: false, after: true }],

		// enforce one true comma style
		'comma-style': ['warn', 'last'],

		// disallow padding inside computed properties
		'computed-property-spacing': ['warn', 'never'],

		// enforce newline at the end of file, with no multiple empty lines
		'eol-last': ['warn', 'always'],

		// enforce spacing between functions and their invocations
		// https://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': ['warn', 'never'],

		// require function expressions to have a name
		// https://eslint.org/docs/rules/func-names
		'func-names': 'warn',

		// enforce consistent line breaks inside function parentheses
		// https://eslint.org/docs/rules/function-paren-newline
		'function-paren-newline': ['warn', 'consistent'],

		// Enforce the location of arrow function bodies with implicit returns
		// https://eslint.org/docs/rules/implicit-arrow-linebreak
		'implicit-arrow-linebreak': ['warn', 'beside'],

		// this option sets a specific tab width for your code
		// https://eslint.org/docs/rules/indent
		indent: ['warn', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			FunctionExpression: {
				parameters: 1,
				body: 1
			},
			CallExpression: {
				arguments: 1
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			ignoreComments: false
		}],


		// enforces spacing between keys and values in object literal properties
		'key-spacing': ['warn', { beforeColon: false, afterColon: true }],

		// require a space before & after certain keywords
		'keyword-spacing': ['warn', {
			before: true,
			after: true,
		}],

		// disallow mixed 'LF' and 'CRLF' as linebreaks
		// https://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['warn', 'unix'],

		// specify the maximum length of a line in your program
		// https://eslint.org/docs/rules/max-len
		'max-len': ['error', 100, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],

		// specify the max number of lines in a file
		// https://eslint.org/docs/rules/max-lines
		'max-lines': ['warn', {
			max: 500,
			skipBlankLines: true,
			skipComments: true
		}],

		// limits the number of parameters that can be used in the function declaration.
		'max-params': ['warn', 5],

		// require a capital letter for constructors
		'new-cap': ['warn', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
		}],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		// https://eslint.org/docs/rules/new-parens
		'new-parens': 'warn',

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// https://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

		// disallow use of the Array constructor
		'no-array-constructor': 'error',

		// disallow use of bitwise operators
		// https://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// disallow if as the only statement in an else block
		// https://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'warn',

		// disallow un-paren'd mixes of different operators
		// https://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': 'warn',

		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 'warn',

		// disallow use of chained assignment expressions
		// https://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': 'warn',

		// disallow multiple empty lines and only one newline at the end
		'no-multiple-empty-lines': ['error', { max: 2 }],

		// disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// disallow use of the Object constructor
		'no-new-object': 'error',

		// disallow certain syntax forms
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForOfStatement',
				message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': 'warn',

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// https://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': ['warn', { defaultAssignment: false }],

		// disallow whitespace before properties
		// https://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 'warn',

		// enforce the location of single-line statements
		// https://eslint.org/docs/rules/nonblock-statement-body-position
		'nonblock-statement-body-position': ['warn', 'beside', { overrides: {} }],

		// require padding inside curly braces
		'object-curly-spacing': ['warn', 'always'],

		// enforce line breaks between braces
		// https://eslint.org/docs/rules/object-curly-newline
		'object-curly-newline': ['warn', {
			ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
			ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
			ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
			ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
		}],

		// enforce "same line" or "multiple line" on object properties.
		// https://eslint.org/docs/rules/object-property-newline
		'object-property-newline': ['warn', {
			allowAllPropertiesOnSameLine: true,
		}],

		// allow just one var statement per function
		'one-var': ['warn', 'never'],

		// require a newline around variable declaration
		// https://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': ['warn', 'always'],

		// require assignment operator shorthand where possible or prohibit it entirely
		// https://eslint.org/docs/rules/operator-assignment
		'operator-assignment': ['warn', 'always'],

		// Requires operator at the beginning of the line in multiline statements
		// https://eslint.org/docs/rules/operator-linebreak
		'operator-linebreak': ['warn', 'before', { overrides: { '=': 'none' } }],

		// disallow padding within blocks
		'padded-blocks': ['warn', { blocks: 'never', classes: 'never', switches: 'never' }],

		// require quotes around object literal property names
		// https://eslint.org/docs/rules/quote-props.html
		'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

		// specify whether double or single quotes should be used
		quotes: ['warn', 'single'],

		// require or disallow use of semicolons instead of ASI
		semi: ['warn', 'always'],

		// enforce spacing before and after semicolons
		'semi-spacing': ['warn', { before: false, after: true }],

		// Enforce location of semicolons
		// https://eslint.org/docs/rules/semi-style
		'semi-style': ['warn', 'last'],


		// require or disallow space before blocks
		'space-before-blocks': 'warn',

		// require or disallow space before function opening parenthesis
		// https://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': 'warn',

		// require or disallow spaces inside parentheses
		'space-in-parens': ['warn', 'never'],

		// require spaces around operators
		'space-infix-ops': 'warn',

		// Require or disallow spaces before/after unary operators
		// https://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
		}],

		// require or disallow a space immediately following the // or /* in a comment
		// https://eslint.org/docs/rules/spaced-comment
		'spaced-comment': ['warn', 'always'],

		// Enforce spacing around colons of switch statements
		// https://eslint.org/docs/rules/switch-colon-spacing
		'switch-colon-spacing': ['warn', { after: true, before: false }],

		// Require or disallow spacing between template tags and their literals
		// https://eslint.org/docs/rules/template-tag-spacing
		'template-tag-spacing': ['warn', 'never'],

		// require or disallow the Unicode Byte Order Mark
		// https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['warn', 'never'],
	}
};
