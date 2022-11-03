import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * { 
    -moz-osx-font-smoothing: grayscale;     
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  header {
    background: #0D0D0D;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header .logo {
    display: flex;
    gap: 10px;
  }

  .linha {
    border-bottom: 1px solid #808080;
    margin: 0 35px;
    opacity: 0.2;
  }

  .checkbox::after {
    box-sizing: border-box;
    content: '';
    display: block;
    width: 1.090rem;
    height: 1.090rem;
    border-radius: .7rem;
    border: 2px solid #4EA8DE;
    transition: .1s ease-in-out background-color;
  }
`;

export default GlobalStyle;