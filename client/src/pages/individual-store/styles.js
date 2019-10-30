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
	padding: ${(props) => props.theme.padding};
	border-radius: ${(props) => props.theme.borderRadius};
`
