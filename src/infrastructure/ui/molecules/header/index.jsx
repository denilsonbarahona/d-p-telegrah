import React from "react";
import Profile from "@atoms/profileImage";
import ProfileTitle from "@atoms/profileTitle";
import ProfileParagraph from "@atoms/profileParagraph";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HeaderContainer, ProfileInfo, Button } from "./header.style";

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
