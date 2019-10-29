import styled, { css } from 'styled-components'

function createCSS() {
	let styles = ''

	for (let i = 0; i < 20; i += 1) {
		styles += `
			.circle-${i} {
				border: 7px solid $white;
				border-radius: 50%;
				box-sizing: border-box;
				border-right: 7px solid transparent;
				border-bottom: 7px solid transparent;
				border-left: 7px solid transparent;
				animation: rotate 1.2s cubic-bezier(0, 0.58, 1, 0.3) infinite;
				animation-delay: 30ms * ${i};
			}
  	`
	}

	return css`${styles}`
}

export const Container = styled.div`
	position: fixed;
	z-index: 9;
	background: rgba(0, 0, 0, 0.3);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`

export const Loader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: calc(100vh - ${(props) => props.theme.headerHeight});

	.loader-group {
		position: relative;
		height: 60px;
		width: 60px;

		.circle {
			position: absolute;
			height: 100%;
			width: 100%;
		}

		${createCSS()};
	}
`
