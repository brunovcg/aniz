import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
        --purple: #822B32;
        --white: #ffffeb;
        --yellow: #E69C02;
        --light-yellow: #ffef84;
        --red: #A31A2E;
        --light-green: #a4cf85;
        --light-grey: #e2e2e2;
        --grey: #adadad;
        --middle-grey: #d6d4d4;
        --dark-grey: #998f8f ;
        --blue: #aaf;
       
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
