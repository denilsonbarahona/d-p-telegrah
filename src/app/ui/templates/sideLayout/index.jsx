import React, { useContext } from "react";
import Context from "@context/Context";
import PropTypes from "prop-types";
import Container from "./side-layout.style";

const SideLayout = ({ children }) => {
  const { showDisplay } = useContext(Context);
  return (
    <Container hide={showDisplay} aria-label="side menu">
      {children}
    </Container>
  );
};

SideLayout.propTypes = {
  children: PropTypes.node,
};

SideLayout.defaultProps = {
  children: null,
};

export default SideLayout;
