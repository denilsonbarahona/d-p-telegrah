import React from "react";
import Profile from "@ui/components/profile-image";
import ProfileTitle from "@ui/components/profile-title";
import ProfileParagraph from "@ui/components/profile-paragraph";
import {
  HeaderContainer,
  ProfileInfo,
  Button,
} from "@styles/components/header.style";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Header = () => {
  return (
    <HeaderContainer>
      <Profile name="denilson" src="https://imgur.com/gallery/3snKn9E.png" />
      <ProfileInfo>
        <ProfileTitle>Denilson</ProfileTitle>
        <ProfileParagraph className="base isGray">
          últ. vez recientemente
        </ProfileParagraph>
      </ProfileInfo>
      <Button>
        <IoPhonePortraitOutline />
      </Button>
    </HeaderContainer>
  );
};

export default Header;
