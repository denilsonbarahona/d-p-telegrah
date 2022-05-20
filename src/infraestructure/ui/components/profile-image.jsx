import React from "react";
import PropTypes from "prop-types";
import { Figure, Image } from "@styles/components/profile-image.style";

const Profile = ({ name, src, className }) => {
  return (
    <Figure className={className}>
      <Image alt={`${name}`} src={src} width="48" height="48" />
    </Figure>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
};

Profile.defaultProps = {
  name: "",
  src: "",
  className: "light",
};

export default Profile;
