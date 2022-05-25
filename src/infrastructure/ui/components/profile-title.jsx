import React from "react";
import PropTypes from "prop-types";
import Title from "@Style-components/profile-title.style";

const ProfileTitle = ({ children, className }) => (
  <Title className={className}>{children}</Title>
);

ProfileTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

ProfileTitle.defaultProps = {
  children: "",
  className: "",
};

export default ProfileTitle;
