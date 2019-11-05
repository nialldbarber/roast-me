import styled from 'styled-components'

export const Container = styled.div`
	margin-left: auto;
	height: 0;
`

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 40px;
	height: 160px;
	margin-left: auto;

	button {
		position: absolute;
		background: ${(props) => props.theme.white};
		color: ${(props) => props.theme.green};
		top: -1rem;
	}

	&.active {
		button {
			background: ${(props) => props.theme.green};
			color: ${(props) => props.theme.white};
		}
	}
`

export const LikeCount = styled.div`
	position: absolute;
	right: .5rem;
	bottom: .7rem;

	svg {
		width: 50px;
		height: auto;
	}

	span {
		position: absolute;
		left: 50%;
		bottom: 50%;
		transform: translate(-50%, 55%);
	}
`
