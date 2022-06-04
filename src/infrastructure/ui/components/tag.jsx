import React from "react";
import DateTag from "@Style-components/tag.style";
import PropTypes from "prop-types";

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
