import React from "react";
import PropTypes from "prop-types";
import Button from "./color-preference.style";

const Preference = ({ text, src }) => {
  return (
    <Button aria-label={`Click to change to ${text} theme`} type="button">
      <img aria-hidden src={src} alt={`${text}`} width="195" height="88" />
      {text}
    </Button>
  );
};

Preference.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
};

Preference.defaultProps = {
  text: "",
  src: "",
};

export default Preference;
