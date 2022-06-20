import React, { useContext } from "react";
import PropTypes from "prop-types";
import UIChanges from "@context/uiChanges";
import Profile from "@atoms/profileImage";
import ProfileTitle from "@atoms/profileTitle";
import { IoArrowBack } from "react-icons/io5";
import { HeaderContainer, ProfileInfo, Button } from "./header.style";

const Header = ({ name, image }) => {
  const { setShowDisplay } = useContext(UIChanges);

  const handleOnClick = () => {
    setShowDisplay(false);
  };

  return (
    <HeaderContainer>
      <Button onClick={handleOnClick}>
        <IoArrowBack />
      </Button>
      <Profile name={name} src={image} />
      <ProfileInfo>
        <ProfileTitle>{name}</ProfileTitle>
      </ProfileInfo>
    </HeaderContainer>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;
