import Store from "@Redux/store";
import GlobalStyle from "@Style/global.style.js";
import { ContextProvider } from "@context/uiChanges";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "@/app/ui/App";

const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={Store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
