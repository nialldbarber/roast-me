import styled from 'styled-components'
import { buttonMixin } from '~/styles/utils/mixins'

export const Btn = styled.button`
	${buttonMixin};
	height: 2.5rem;
	border-radius: 4px;
	white-space: nowrap;

	&:hover {
		box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3),
			0 -6px 16px -6px rgba(0, 0, 0, .025);
	}
`
