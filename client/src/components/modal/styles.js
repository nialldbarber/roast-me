import styled from 'styled-components'
import { centerMixin } from '~@styles/utils/mixins'

export const Container = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	opacity: 0;
	background: rgba(0, 0, 0, .6);
	z-index: -1;

	&.active {
		display: block;
		opacity: 1;
		z-index: 10;
	}
`

export const Box = styled.div`
	position: fixed;
	${centerMixin};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.white};
	border-radius: 4px;
	height: 200px;
	width: 320px;

	h3 {
		position: absolute;
		top: 0;
		width: 100%;
		margin: 0;
		text-align: center;
		background: ${(props) => props.theme.green};
		color: ${(props) => props.theme.white};
		padding: .9rem 0;
		z-index: -1;
	}

	.close-container {
		position: absolute;
		top: 0;
		left: 0;
		margin: 1.1rem;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			cursor: pointer;
		}

		svg {
			width: 15px;
			height: 15px;

			path {
				fill: ${(props) => props.theme.white};
			}
		}
	}
`
