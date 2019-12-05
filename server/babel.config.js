module.exports = (api) => {
	api.cache(true)

	return {
		presets: [ '@babel/env', '@babel/preset-react' ],
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
