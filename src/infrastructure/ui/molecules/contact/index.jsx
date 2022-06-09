import React from "react";
import PropTypes from "prop-types";
import Profile from "@atoms/profileImage";
import ProfileTitle from "@atoms/profileTitle";
import ProfileParagraph from "@atoms/profileParagraph";
import MessageStatus from "@atoms/messageStatus";
import MessageAlert from "@atoms/messageAlert";
import {
  ContactContainer,
  ContactContent,
  ContactNotification,
} from "./contact.style";

const Contact = ({ name, titleClassName, src, paragraph, showStatus }) => {
  return (
    <ContactContainer>
      <Profile name={name} src={src} />
      <div>
        <ContactContent>
          <ProfileTitle className={titleClassName}>{name}</ProfileTitle>
          <ProfileParagraph className="base isGray">
            {paragraph}
          </ProfileParagraph>
        </ContactContent>
      </div>
      {showStatus && (
        <ContactNotification>
          <MessageStatus />
          <MessageAlert />
        </ContactNotification>
      )}
    </ContactContainer>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  titleClassName: PropTypes.string,
  src: PropTypes.string,
  paragraph: PropTypes.string,
  showStatus: PropTypes.bool,
};

Contact.defaultProps = {
  name: "",
  titleClassName: "",
  src: "",
  paragraph: "",
  showStatus: false,
};

export default Contact;
