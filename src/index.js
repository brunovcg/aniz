import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./provider";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
