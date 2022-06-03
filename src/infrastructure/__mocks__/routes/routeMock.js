import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const RouterMock = ({ children }) => {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      {children}
    </Router>
  );
};

export default RouterMock;
