import React from "react";
import { Router } from "react-router-dom";
import PropTypes from "prop-types";
import { createMemoryHistory } from "history";

const RouterMock = ({ children }) => {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      {children}
    </Router>
  );
};

RouterMock.propTypes = {
  children: PropTypes.node,
};

RouterMock.defaultProps = {
  children: null,
};

export default RouterMock;
