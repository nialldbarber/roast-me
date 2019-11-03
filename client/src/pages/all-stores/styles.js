import styled from 'styled-components'
import { media } from '~@styles/utils/media-queries'

export const Cards = styled.section`
	display: grid;
	grid-template-columns: 1fr;
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
		box-shadow: rgba(0, 0, 0, .15) 0px 2px 8px;
		border-radius: 3px;
		overflow: hidden;

		a {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;

			.inner {
				overflow: hidden;

				h3 {
					margin: 0;
					padding: .5rem 1rem;
					background: ${(props) => props.theme.green};
					color: ${(props) => props.theme.white};
				}

				p {
					padding: .5rem 1rem;
				}

				img {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					width: 150%;
					height: auto;
				}
			}
		}
	}
`
