import styled from 'styled-components'
import { bounceFromTop } from '~/styles/utils/keyframes'

export const Container = styled.div`
	position: fixed;
	top: -5rem;
	left: 50%;
	display: flex;
	align-content: center;
	padding: .5rem;
	box-shadow: ${(props) => props.theme.bs};
	transform: translateX(-50%);
	transition: 1s ease;
	z-index: 9;

	&.active {
		top: 1rem;
		animation: ${bounceFromTop} 1s;
	}

	p {
		margin: 0;
		color: ${(props) => props.theme.white};
	}

	&.toast-success {
		background-color: ${(props) => props.theme.rag.success};
	}

	&.toast-error {
		background-color: ${(props) => props.theme.rag.error};
	}

	&.toast-warning {
		background-color: ${(props) => props.theme.rag.warning};
	}

	.btn {
		padding: 0;
		margin-left: .5rem;
		background: none;

		.close-btn {
			height: 10px;
		}
	}
`
