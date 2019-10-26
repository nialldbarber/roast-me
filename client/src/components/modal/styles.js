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
	transform: translate(-50%, -50%);
	background: #fff;
	border-radius: 4px;
	height: 300px;
	width: 380px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		margin: 0;
	}

	svg {
		position: absolute;
		width: 20px;
		height: 20px;
		top: 0;
		left: 0;
		margin: 0.5rem;

		path {
			fill: #000;
		}
	}
`
