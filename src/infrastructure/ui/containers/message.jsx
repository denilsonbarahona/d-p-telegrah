import React from "react";
import Profile from "@UI-components/profile-image";
import MessageStatus from "@UI-components/message-status";
import ProfileTitle from "@UI-components/profile-title";
import PropTypes from "prop-types";
import {
  MessageBody,
  MessageContainer,
  Article,
} from "@Style-containers/message.style";

const Message = ({ name, image, message }) => {
  return (
    <MessageContainer>
      <Profile className="small" name={`${name}'s image`} src={image} />
      <MessageBody>
        <ProfileTitle>{name}</ProfileTitle>
        <Article> {message} </Article>
      </MessageBody>
      <div>
        <MessageStatus />
      </div>
    </MessageContainer>
  );
};

Message.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
};

Message.defaultProps = {
  name: "",
  image: "",
  message: "",
};

export default Message;
