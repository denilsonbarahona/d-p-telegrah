import React from "react";
import { createRoot } from "react-dom/client";
import App from "@/infrastructure/ui/App";
import Store from "@Redux/store";
import { Provider } from "react-redux";
import GlobalStyle from "@Style/global.style.js";

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={Store}>
    <GlobalStyle />
    <App />
  </Provider>
);
