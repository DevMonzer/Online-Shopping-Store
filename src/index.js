import React from "react";
import { render } from "react-dom";
// For routing functionality
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// For useContext so we don't have to do props drilling
import { UserProvider } from "./contexts/user.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
