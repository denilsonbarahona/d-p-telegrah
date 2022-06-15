import React from "react";
import PropTypes from "prop-types";
import Profile from "@atoms/profileImage";
import ProfileTitle from "@atoms/profileTitle";
import ProfileParagraph from "@atoms/profileParagraph";
import { ContactContainer, ContactContent } from "./contact.style";

const Contact = ({ name, titleClassName, src, paragraph, children }) => {
  return (
    <ContactContainer tabIndex="0">
      <Profile name={name} src={src} />
      <div>
        <ContactContent>
          <ProfileTitle className={titleClassName}>{name}</ProfileTitle>
          <ProfileParagraph className="base isGray">
            {paragraph}
          </ProfileParagraph>
        </ContactContent>
      </div>
      {children}
    </ContactContainer>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  titleClassName: PropTypes.string,
  src: PropTypes.string,
  paragraph: PropTypes.string,
  children: PropTypes.node,
};

Contact.defaultProps = {
  name: "",
  titleClassName: "",
  src: "",
  paragraph: "",
  children: null,
};

export default Contact;
