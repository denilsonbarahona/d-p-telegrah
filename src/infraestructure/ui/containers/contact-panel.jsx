import React from "react";
import PropTypes from "prop-types";
import Container from "@styles/containers/contact-panel";

const ContactPanel = ({ children }) => {
  return <Container>{children}</Container>;
};

ContactPanel.propTypes = {
  children: PropTypes.element,
};

ContactPanel.defaultProps = {
  children: null,
};

export default ContactPanel;
