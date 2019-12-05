import styled from 'styled-components'
import { rotateSpinner, dashSpinner } from '~/styles/utils/keyframes'
import { centerMixin } from '~/styles/utils/mixins'

export const Container = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, .3);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 9;
`

export const SpinnerContainer = styled.div`
	position: fixed;
	${centerMixin};
`

export const StyledSpinner = styled.svg`
	animation: ${rotateSpinner} 1s linear infinite;
	width: 70px;
	height: 70px;

	& .path {
		stroke: ${(props) => props.theme.white};
		stroke-linecap: round;
		animation: ${dashSpinner} 2s ease-in-out infinite;
	}
`
