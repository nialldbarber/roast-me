import styled from 'styled-components'

export const UserForm = styled.form`
	display: none;
	flex-direction: column;
	justify-content: space-evenly;
	margin-top: 0;
	padding: 2rem 2rem 1.5rem;
	max-width: ${(props => props.theme.formMaxWidth)};
	width: 100%;
	background: ${(props) => props.theme.white};
	box-shadow: ${(props) => props.theme.bs};
	border-radius: ${(props) => props.theme.borderRadius};
	z-index: -1;

	&.active {
		display: flex;
		z-index: 7;
	}

	&.login {
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}

	input,
	textarea {
		background-color: ${(props) => props.theme.opaqueBlue};
		border-radius: 4px;
		margin: 1rem 0;
		padding: .7rem 1.25rem;
		width: 100%;
		font-size: 1rem;

		&.error {
			border: 1px solid ${(props) => props.theme.green};
			background: ${(props) => props.theme.opaqueBlueDark};
		}
	}

	textarea {
		min-height: 140px;
	}

	button {
		width: 100%;
		margin-top: 1rem;
		background: ${(props) => props.theme.green};
		color: ${(props) => props.theme.white};
	}
`
