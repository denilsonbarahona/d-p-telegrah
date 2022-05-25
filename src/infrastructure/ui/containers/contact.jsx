import React from "react";
import Profile from "@UI-components/profile-image";
import ProfileTitle from "@UI-components/profile-title";
import ProfileParagraph from "@UI-components/profile-paragraph";
import MessageStatus from "@UI-components/message-status";
import MessageAlert from "@UI-components/message-alert";
import {
  ContactContainer,
  ContactContent,
  ContactNotification,
} from "@Style-containers/contact.style";
import PropTypes from "prop-types";

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
