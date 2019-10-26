import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font};
    position: relative;
    background: linear-gradient(90deg, ${(props) => props.theme.green}, ${(props) => props.theme.darkGreen} 200%);

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 500px;
      background: ${(props) => props.theme.offWhite};
      transform: skewY(-12deg);
      top: -200px;
      z-index: -1;
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
