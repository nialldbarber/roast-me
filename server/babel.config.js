module.exports = (api) => {
	api.cache(true)

	return {
		presets: ['@babel/env'],
		plugins: [
			[
				'babel-plugin-root-import',
				{
					rootPathSuffix: 'src',
					rootPathPrefix: '~/'
				}
			]
		]
	}
}
