import React from "react";
import PropTypes from "prop-types";
import Container from "@styles/containers/side-panel";

const SidePanel = ({ children }) => {
  return <Container>{children}</Container>;
};

SidePanel.propTypes = {
  children: PropTypes.element,
};

SidePanel.defaultProps = {
  children: null,
};

export default SidePanel;
