import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
        --purple: #822B32;
        --white: #ffffeb;
        --yellow: #E69C02;
        --light-yellow: #ffef84;
        --light-red: #A31A2E;
        --light-green: #a4cf85;
       
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

    h2{
        font-family: 'Dancing Script', cursive;
        font-size: 40px;
    }
  
 
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }

`;

export default GlobalStyle;
