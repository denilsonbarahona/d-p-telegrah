import React from "react";
import PropTypes from "prop-types";
import Paragraph from "@styles/components/profile-paragraph.style";

const ProfileParagraph = ({ children, className }) => (
  <Paragraph className={className}>{children}</Paragraph>
);

ProfileParagraph.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

ProfileParagraph.defaultProps = {
  children: "",
  className: "",
};

export default ProfileParagraph;
