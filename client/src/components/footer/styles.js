import styled from 'styled-components'
import { containerMixin } from '~@styles/utils/mixins'

export const Container = styled.footer`
	display: flex;
	align-items: center;
	height: 80px;
	background: ${(props) => props.theme.green};
	${containerMixin};

	p {
		margin: 0;
		color: ${(props) => props.theme.white};
	}
`
