import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./provider";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
