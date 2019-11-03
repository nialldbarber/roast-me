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
	display: grid;
	grid-template-rows: 50px 1fr;
	background: ${(props) => props.theme.white};
	border-radius: 4px;
	height: 200px;
	width: 320px;

	.close-container {
		position: relative;
		background: ${(props) => props.theme.green};

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			cursor: pointer;
		}

		h3 {
			width: 100%;
			margin: 0;
			text-align: center;
			color: ${(props) => props.theme.white};
			padding: .9rem 0;
		}

		svg {
			position: absolute;
			top: 50%;
			left: 1rem;
			transform: translateY(-50%);
			width: 15px;
			height: 15px;

			path {
				fill: ${(props) => props.theme.white};
			}
		}
	}

	.modal-body {
		display: grid;
		grid-template-rows: 90px 1fr;

		p {
			align-self: center;
			text-align: center;
		}

		button {
			width: 120px;
			margin: 0 auto;
		}
	}
`
