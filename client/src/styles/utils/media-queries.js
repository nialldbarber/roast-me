import { generateMedia } from 'styled-media-query'

export const media = generateMedia({
	mobile: '320px',
	phablet: '510px',
	almostTablet: '629px',
	tablet: '768px',
	desktop: '992px',
	large: '1199px'
})
