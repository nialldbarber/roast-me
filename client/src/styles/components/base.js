import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    &:before, 
    &:after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
    line-height: 1.15;
  }

  body {
    position: relative;
    background: linear-gradient(90deg, ${(props) => props.theme.green}, ${(props) => props.theme.lightGreen} 200%);
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

  main {
    min-height: calc(100vh - ${(props) => props.theme.headerHeight} * 2);
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.green};
    font-weight: ${(props) => props.theme.fontWeight};
    transition: color .1s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${(props) => props.theme.fontWeight};
  }

  p {
    font-weight: 400;
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
