import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import UIChanges from "@context/uiChanges";
import Profile from "@atoms/profileImage";
import ProfileTitle from "@atoms/profileTitle";
import ProfileParagraph from "@atoms/profileParagraph";
import { showMessageForm } from "@Redux/features/messages";
import { ContactContainer, ContactContent } from "./contact.style";

const Contact = ({
  chatId,
  contactId,
  name,
  src,
  paragraph,
  children,
  titleClassName,
}) => {
  const dispatch = useDispatch();
  const { setShowDisplay } = useContext(UIChanges);

  const handleOnClick = () => {
    dispatch(showMessageForm({ name, contactId, chatId, src }));
    setShowDisplay(true);
  };

  return (
    <ContactContainer onClick={handleOnClick} tabIndex="0">
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
  contactId: PropTypes.string.isRequired,
  chatId: PropTypes.string,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  children: PropTypes.node,
  titleClassName: PropTypes.string,
};

Contact.defaultProps = {
  chatId: "(blank)",
  paragraph: "",
  children: null,
  titleClassName: "",
};

export default Contact;
