import React from "react";
import Profile from "@ui/components/profile-image";
import ProfileTitle from "@ui/components/profile-title";
import ProfileParagraph from "@ui/components/profile-paragraph";
import MessageStatus from "@ui/components/message-status";
import MessageAlert from "@ui/components/message-alert";
import {
  ContactContainer,
  ContactContent,
  ContactNotification,
} from "@styles/containers/contact.style";

const Contact = () => {
  return (
    <ContactContainer>
      <Profile name="denilson" src="https://imgur.com/gallery/3snKn9E.png" />
      <div>
        <ContactContent>
          <ProfileTitle>Denilson</ProfileTitle>
          <ProfileParagraph className="base isGray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            architecto repudiandae esse amet non animi odit est consectetur
            nulla laborum in nemo dignissimos, fugit iure labore aut quos
            itaque! Velit!
          </ProfileParagraph>
        </ContactContent>
      </div>
      <ContactNotification>
        <MessageStatus />
        <MessageAlert />
      </ContactNotification>
    </ContactContainer>
  );
};

export default Contact;
