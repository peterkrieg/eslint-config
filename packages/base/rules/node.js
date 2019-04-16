module.exports = {
	env: {
		node: true
	},

	rules: {
		// enforce return after a callback
		// TODO: consider turning on, useful for node dev
		'callback-return': 'off',

		// require all requires be top-level
		// https://eslint.org/docs/rules/global-require
		'global-require': 'warn',

		// enforces error handling in callbacks (node environment)
		'handle-callback-err': 'off',

		// disallow use of the Buffer() constructor
		// https://eslint.org/docs/rules/no-buffer-constructor
		'no-buffer-constructor': 'error',

		// disallow use of new operator with the require function
		'no-new-require': 'error',

		// disallow string concatenation with __dirname and __filename
		// https://eslint.org/docs/rules/no-path-concat
		'no-path-concat': 'error',
	}
};
