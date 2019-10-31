import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 592px;
	margin: 12rem auto 2rem;
	padding: 0 1rem .5rem;
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
