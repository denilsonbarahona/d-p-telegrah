import React from "react";
import PropTypes from "prop-types";
import Button from "./color-preference.style";

const Preference = ({ text, src, onClick, selected }) => {
  return (
    <Button
      onClick={onClick}
      aria-label={`Click to change to ${text} theme`}
      type="button"
    >
      <img
        className={`${selected ? "selected" : ""}`}
        aria-hidden
        src={src}
        alt={`${text}`}
        width="195"
        height="88"
      />
      {text}
    </Button>
  );
};

Preference.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool.isRequired,
};

Preference.defaultProps = {
  text: "",
  src: "",
  onClick: () => {},
};

export default Preference;
