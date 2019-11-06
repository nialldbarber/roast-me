module.exports = (api) => {
	api.cache(true)

	return {
		presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
		plugins: [
			'@babel/plugin-proposal-optional-chaining',
			'@babel/plugin-proposal-nullish-coalescing-operator',
			'@babel/proposal-class-properties',
			'@babel/proposal-object-rest-spread',
			[
				'babel-plugin-root-import',
				{
					rootPathPrefix: '~@',
					rootPathSuffix: 'src'
				}
			]
		]
	}
}
