import React from "react";
import PropTypes from "prop-types";
import Container from "./side-panel";

const SidePanel = ({ children }) => {
  return <Container>{children}</Container>;
};

SidePanel.propTypes = {
  children: PropTypes.node,
};

SidePanel.defaultProps = {
  children: null,
};

export default SidePanel;
