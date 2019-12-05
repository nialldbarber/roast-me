import styled from 'styled-components'
import { containerMixin } from '~/styles/utils/mixins'

export const PageContainer = styled.div`
	${containerMixin};
	padding-bottom: 2rem;

	&.store {
		position: relative;
		overflow: hidden;
	}
`
