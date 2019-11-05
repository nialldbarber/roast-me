import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5rem auto 2rem;
	padding: 0 0 .5rem;
	max-width: 1000px;
	background: ${(props) => props.theme.white};
	border-radius: ${(props) => props.theme.borderRadius};

	h3 {
		background: ${(props) => props.theme.green};
		margin: 0;
		padding: .5rem 1rem;
		width: 100%;
		text-align: center;
		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
		color: ${(props) => props.theme.white};
		box-shadow: ${(props) => props.theme.bs};
	}
`

export const Wrapper = styled.div`
	margin: 1rem 0;
	padding: 0 2rem;
	background: ${(props) => props.theme.white};
	border-radius: ${(props) => props.theme.borderRadius};
	width: 100%;
	border-bottom: 1px solid ${(props) => props.theme.lightGreen};

	a {
		text-transform: capitalize;
		color: ${(props) => props.theme.green};

		&:hover {
			color: ${(props) => props.theme.lightGreen};
		}
	}
`
