import { keyframes } from 'styled-components'
import { timingFunctionMixin } from '~@styles/utils/mixins'

export const bounceFromTop = keyframes`
	from,
	60%,
	75%,
	90%,
	to {
		${timingFunctionMixin};
	}
	0% {
		opacity: 0;
		transform: translate3d(-50%, -3000px, 0);
	}
	60% {
		opacity: 1;
		transform: translate3d(-50%, 25px, 0);
	}
	75% {
		transform: translate3d(-50%, -10px, 0);
	}
	90% {
		transform: translate3d(-50%, 5px, 0);
	}
	to {
		transform: translateX(-50%);
	}
`
