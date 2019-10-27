import styled from 'styled-components'

export const Title = styled.h2`
	margin: 0.5rem 0 2rem;
	font-size: 5rem;
	color: ${(props) => props.theme.green};
	text-transform: capitalize;

	&.stores {
		color: ${(props) => props.theme.white};
	}
`
