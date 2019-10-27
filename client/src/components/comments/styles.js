import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 400px;
	overflow: scroll;
`

export const Wrapper = styled.div`
	margin: 1rem 0;
	padding: 1rem;
	background: ${(props) => props.theme.white};
`
