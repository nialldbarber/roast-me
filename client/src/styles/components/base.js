import { createGlobalStyle, css } from 'styled-components'
import fontLight from '~@styles/fonts/HKGrotesk-Light.otf'
import fontMedium from '~@styles/fonts/HKGrotesk-Medium.otf'
import fontRegular from '~@styles/fonts/HKGrotesk-Regular.otf'
import fontSemiBold from '~@styles/fonts/HKGrotesk-SemiBold.otf'
import fontBold from '~@styles/fonts/HKGrotesk-Bold.otf'

export const fontFaces = css`
	@font-face {
		font-family: 'HKGrotesk';
		font-weight: 100;
		src: url(${fontLight}) format('opentype');
	}

	@font-face {
		font-family: 'HKGrotesk';
		font-weight: 300;
		src: url(${fontMedium}) format('opentype');
	}

	@font-face {
		font-family: 'HKGrotesk';
		font-weight: 500;
		src: url(${fontRegular}) format('opentype');
	}

	@font-face {
		font-family: 'HKGrotesk';
		font-weight: 700;
		src: url(${fontSemiBold}) format('opentype');
	}

	@font-face {
		font-family: 'HKGrotesk';
		font-weight: 900;
		src: url(${fontBold}) format('opentype');
	}
`

export const GlobalStyle = createGlobalStyle`
  ${fontFaces};

  * {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html {
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    position: relative;
    background: linear-gradient(90deg, ${(props) => props.theme.green}, ${(props) => props.theme.darkGreen} 200%);
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font};

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 500px;
      background: ${(props) => props.theme.offWhite};
      transform: skewY(-12deg);
      top: -200px;
      z-index: -2;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input,
  textarea {
    border: none;
    outline: none;
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
  }  
`
