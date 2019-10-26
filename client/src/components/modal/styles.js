import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	opacity: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: -1;
	display: none;

	&.active {
		opacity: 1;
		z-index: 10;
		display: block;
	}
`

export const Box = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.theme.white};
	border-radius: 4px;
	height: 300px;
	width: 380px;
	transform: translate(-50%, -50%);

	h3 {
		margin: 0;
	}

	.close-container {
		position: absolute;
		top: 0;
		left: 0;
		margin: 1rem;

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
			width: 20px;
			height: 20px;

			path {
				fill: ${(props) => props.theme.green};
			}
		}
	}
`
