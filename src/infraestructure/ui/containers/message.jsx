import React from "react";
import Profile from "@ui/components/profile-image";
import MessageStatus from "@ui/components/message-status";
import ProfileTitle from "@ui/components/profile-title";
import {
  MessageBody,
  MessageContainer,
  Article,
} from "@styles/containers/message.style";

const Message = () => {
  return (
    <MessageContainer>
      <Profile
        className="small"
        name="denilson"
        src="https://imgur.com/gallery/3snKn9E.png"
      />
      <MessageBody>
        <ProfileTitle>Denilson Barahona</ProfileTitle>
        <Article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat
          cum commodi sunt quam, quaerat aliquid distinctio quas quod iure ad
          sequi ea? Eligendi esse est animi magnam quae numquam? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Illo, fugiat cum commodi
          sunt quam, quaerat aliquid distinctio quas quod iure ad sequi ea?
          Eligendi esse est animi magnam quae numquam?
        </Article>
      </MessageBody>
      <div>
        <MessageStatus />
      </div>
    </MessageContainer>
  );
};

export default Message;
