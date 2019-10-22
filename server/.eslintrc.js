module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [ 'airbnb/base', 'eslint:recommended', 'plugin:react/recommended' ],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			ecmaVersion: 6,
			jsx: true,
			experimentalObjectRestSpread: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [ 'react' ],
	rules: {
		'react/prop-types': 0,
		indent: [ 2, 'tab' ],
		'no-tabs': 0,
		'function-paren-newline': 1,
		semi: [ 'error', 'never' ],
		'no-trailing-spaces': 0,
		'no-console': 'off',
		indent: 0,
		'no-use-before-define': 0,
		'no-useless-escape': 0,
		'class-methods-use-this': 0,
		'arrow-parens': 0,
		'no-underscore-dangle': 0,
		'max-len': 'off',
		'padded-blocks': 0,
		camelcase: 0,
		'no-unused-vars': [ 1, { vars: 'local', args: 'after-used' } ],
		'comma-dangle': 0,
		'spaced-comment': 0,
		'default-case': 0,
		'no-param-reassign': 0,
		'space-infix-ops': 1,
		radix: 0,
		'no-else-return': 0,
		'no-return-assign': 0,
		'space-before-function-paren': 0,
		'no-await-in-loop': 0,
		'no-restricted-syntax': [ 2, 'DebuggerStatement', 'LabeledStatement', 'WithStatement' ],

		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 0,
		'import/imports-first': 1,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		curly: 2,
		'object-curly-newline': 0
	}
}
