import styled from 'styled-components'

export const Wrapper = styled.button`
	display: inline-block;
	height: 3rem;
	width: 100%;
	line-height: 2.5rem;
	padding: 0 .875rem;
	box-shadow: 0 3px 6px rgba(0, 0, 0, .05), 0 3px 6px rgba(0, 0, 0, .02);
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
	background-color: ${(props) => props.theme.opaqueBlue};
	font-size: .9rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: .025rem;
	text-decoration: none;
	transition: .125s ease;

	&.active {
		background-color: ${(props) => props.theme.white};
	}
`
