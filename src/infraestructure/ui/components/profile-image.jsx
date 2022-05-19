import React from "react";
import PropTypes from "prop-types";
import { Figure, Image } from "@styles/components/profile-image.style";

const Profile = ({ name, src, type }) => {
  return (
    <Figure className={type}>
      <Image alt={`${name}`} src={src} width="48" height="48" />
    </Figure>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
};

Profile.defaultProps = {
  name: "",
  src: "",
  type: "light",
};

export default Profile;
