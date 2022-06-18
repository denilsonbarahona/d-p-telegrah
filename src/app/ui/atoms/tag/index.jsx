import React from "react";
import PropTypes from "prop-types";
import DateTag from "./tag.style";

const Tag = ({ tag }) => {
  return <DateTag>{tag}</DateTag>;
};

Tag.propTypes = {
  tag: PropTypes.string,
};

Tag.defaultProps = {
  tag: "",
};

export default Tag;
