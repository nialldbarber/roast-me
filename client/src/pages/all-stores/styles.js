import styled from 'styled-components'
import { media } from '~@styles/utils/media-queries'

export const Cards = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-rows: 300px;
	grid-gap: 20px;
	${media.greaterThan('phablet')`
    grid-template-columns: repeat(2, 1fr);
  `};
	${media.greaterThan('tablet')`
    grid-template-columns: repeat(3, 1fr);
  `};
	${media.greaterThan('desktop')`
    grid-template-columns: repeat(4, 1fr);
  `};
	.card {
		position: relative;
		border-width: 0px 5px;
		background: ${(props) => props.theme.white};
		box-shadow: rgba(${(props) => props.theme.black}, 0.15) 0px 2px 8px;
		border-radius: 3px;

		a {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			.inner {
				h3 {
					background: ${(props) => props.theme.green};
					margin: 0;
					padding: 0.5rem 1rem;
					color: ${(props) => props.theme.white};
				}

				p {
					padding: 0.5rem 1rem;
				}
			}
		}
	}
`
