module.exports = {
	rules: {
		// disallow deletion of variables
		'no-delete-var': 'error',

		// disallow specific globals
		'no-restricted-globals': ['error', 'isFinite', 'isNaN'],

		// disallow declaration of variables already declared in the outer scope
		'no-shadow': 'error',

		// disallow shadowing of names such as arguments
		'no-shadow-restricted-names': 'error',

		// disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef': 'error',

		// disallow use of undefined when initializing variables
		'no-undef-init': 'error',

		// disallow declaration of variables that are not used in the code
		'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_$' }],

		// disallow use of variables before they are defined
		'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
	}
};
