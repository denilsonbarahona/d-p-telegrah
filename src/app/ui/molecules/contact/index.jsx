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
  name,
  titleClassName,
  src,
  paragraph,
  children,
}) => {
  const dispatch = useDispatch();
  const context = useContext(UIChanges);

  const handleOnClick = () => {
    dispatch(showMessageForm({ name, chatId, src }));
    context.setShowDisplay(true);
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
  name: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  src: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  children: PropTypes.node,
  chatId: PropTypes.string,
};

Contact.defaultProps = {
  titleClassName: "",
  paragraph: "",
  children: null,
  chatId: "(blank)",
};

export default Contact;
