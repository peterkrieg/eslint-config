module.exports = {
	extends: [
		'eslint-config-peter',
		'./rules/react',
	].map(require.resolve),
	rules: {},
};
