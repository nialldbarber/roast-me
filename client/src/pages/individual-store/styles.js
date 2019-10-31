import styled from 'styled-components'

export const ImgWrapper = styled.div`
	position: absolute;
	top: 0;
	left: -3pc;
	right: -3pc;
	overflow-y: hidden;
	max-height: 400px;
	z-index: -1;

	img {
		width: calc(100% + 6pc);
		filter: blur(5px);
	}
`

export const StoreInfo = styled.div`
	background: ${(props) => props.theme.white};
	padding: calc(${(props) => props.theme.padding} / 2) ${(props) => props.theme.padding};
	border-radius: ${(props) => props.theme.borderRadius};

	.location {
		display: flex;
		align-items: center;

		h3 {
			padding-left: .3rem;
			font-weight: 500;
			font-size: 1.5rem;
			text-transform: capitalize;
			color: ${(props) => props.theme.green};
		}

		svg {
			width: 25px;
			height: 25px;
		}
	}
`
