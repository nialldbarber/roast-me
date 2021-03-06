import styled from 'styled-components'
import { containerMixin } from '~/styles/utils/mixins'

export const Nav = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: ${(props) => props.theme.headerHeight};
	background: ${(props) => props.theme.white};
	box-shadow: ${(props) => props.theme.bs};
	z-index: 9;
	${containerMixin};

	.logo {
		svg {
			width: 55px;
			transform: scale(1);
			transition: transform .125s ${(props) => props.theme.transition};
		}

		&:hover {
			svg {
				transform: scale(1.1);
			}
		}
	}

	nav {
		margin-right: 1rem;

		ul {
			display: flex;
			padding: 0;
			margin: 0;

			li {
				a {
					position: relative;
					display: block;
					min-width: 115px;
					padding: calc(${(props) => props.theme.headerHeight} / 3) 1rem;
					text-align: center;
					text-transform: capitalize;
					color: ${(props) => props.theme.green};
					border-bottom: none;

					&:after {
						content: '';
						position: absolute;
						top: 100%;
						left: 0;
						bottom: 0;
						right: 0;
						background: ${(props) => props.theme.green};
						z-index: -1;
						transition: all .125s ${(props) => props.theme.transition};
					}

					&:hover,
					&.active {
						color: ${(props) => props.theme.white};
						&:after {
							top: 0;
						}
					}

					&.logout {
						color: ${(props) => props.theme.green};
						&:after {
							top: 100%;
						}
					}

					&.inactive {
						color: ${(props) => props.theme.green};
						cursor: initial;
						&:after {
							top: 100%;
						}
					}
				}
			}
		}
	}
`
