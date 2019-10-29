import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HKGrotesk';
    font-weight: 100;
    src: url('../fonts/HKGrotesk-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'HKGrotesk';
    font-weight: 300;
    src: url('../fonts/HKGrotesk-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'HKGrotesk';
    font-weight: 500;
    src: url('../fonts/HKGrotesk-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'HKGrotesk';
    font-weight: 700;
    src: url('../fonts/HKGrotesk-SemiBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'HKGrotesk';
    font-weight: 900;
    src: url('../fonts/HKGrotesk-Bold.otf') format('opentype');
  }

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
