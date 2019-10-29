import styled from 'styled-components'
import { buttonMixin } from '~@styles/utils/mixins'

export const Wrapper = styled.button`
	${buttonMixin};
	height: 3rem;
	width: 100%;
	background-color: ${(props) => props.theme.opaqueBlue};
	border-top-right-radius: 4px;
	border-top-left-radius: 4px;

	&.active {
		background-color: ${(props) => props.theme.white};
	}
`
