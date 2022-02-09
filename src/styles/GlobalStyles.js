import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
        --purple: #822B32;
       
    }

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
  
 
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }

`;

export default GlobalStyle;
