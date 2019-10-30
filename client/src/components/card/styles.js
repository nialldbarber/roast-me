import styled from 'styled-components'

export const LikeCount = styled.span`
	background: ${(props) => props.theme.white};
	color: ${(props) => props.theme.green};
	position: absolute;
	bottom: .5rem;
	left: .5rem;
	padding: .5rem .7rem;
	border-radius: 4px;
`
