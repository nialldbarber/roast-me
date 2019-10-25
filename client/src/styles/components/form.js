import styled from 'styled-components'

export const UserForm = styled.form`
	display: none;
	z-index: -1;
	min-width: 560px;
	margin-top: 0;

	&.active {
		display: block;
		z-index: 7;
	}

	input {
		&.error {
			border: 1px dashed red;
			background: rgba(0, 0, 0, 0.2);
		}
	}
`
