import React from "react";
import PropTypes from "prop-types";
import Profile from "@atoms/profileImage";
import ProfileTitle from "@atoms/profileTitle";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HeaderContainer, ProfileInfo, Button } from "./header.style";

const Header = ({ name, image }) => {
  return (
    <HeaderContainer>
      <Profile name={name} src={image} />
      <ProfileInfo>
        <ProfileTitle>{name}</ProfileTitle>
      </ProfileInfo>
      <Button>
        <IoPhonePortraitOutline />
      </Button>
    </HeaderContainer>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;
