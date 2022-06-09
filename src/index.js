import Store from "@Redux/store";
import GlobalStyle from "@Style/global.style.js";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "@/infrastructure/ui/App";

const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
