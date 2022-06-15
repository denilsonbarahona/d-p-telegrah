import React from "react";
import PropTypes from "prop-types";
import Container from "./side-layout.style";

const SideLayout = ({ children }) => {
  return <Container aria-label="side menu">{children}</Container>;
};

SideLayout.propTypes = {
  children: PropTypes.node,
};

SideLayout.defaultProps = {
  children: null,
};

export default SideLayout;
