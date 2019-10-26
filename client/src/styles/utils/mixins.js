import { css } from 'styled-components'
import { media } from '~@styles/utils/media-queries'

export const containerMixin = css`
	padding-right: 1pc;
	padding-left: 1pc;
	${media.greaterThan('tablet')`
    padding-right: 3pc;
    padding-left: 3pc;
  `};
	${media.greaterThan('desktop')`
    padding-right: 72px;
    padding-left: 72px;
  `};
`

export const timingFunctionMixin = css`animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);`
