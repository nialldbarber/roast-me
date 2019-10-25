import styled from 'styled-components'

export const UserForm = styled.form`
	display: none;
	z-index: -1;
	max-width: 560px;
	margin-top: 0;
	border-top-right-radius: 0;
	border-top-left-radius: 0;

	&.active {
		display: block;
		z-index: 7;
	}

	input {
		&.error {
			border: 1px solid #394439;
			background: #cfd2d3;
		}
	}
`
