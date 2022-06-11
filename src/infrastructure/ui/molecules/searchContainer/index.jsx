import React from "react";
import PropTypes from "prop-types";
import Container from "./search-container.style";

const SearchContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

SearchContainer.propTypes = {
  children: PropTypes.node,
};

SearchContainer.defaultProps = {
  children: null,
};

export default SearchContainer;
