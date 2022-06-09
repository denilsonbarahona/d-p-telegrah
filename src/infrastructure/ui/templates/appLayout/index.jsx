import React from "react";
import PropTypes from "prop-types";
import Layout from "./app-layout.style";

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

AppLayout.defaultProps = {
  children: null,
};

export default AppLayout;
