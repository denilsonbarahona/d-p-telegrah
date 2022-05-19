import React from "react";
import { createRoot } from "react-dom/client";
import App from "@ui/App";
import Store from "@redux/store";
import { Provider } from "react-redux";
import GlobalStyle from "@styles/global.style.js";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={Store}>
    <GlobalStyle />
    <App />
  </Provider>
);
