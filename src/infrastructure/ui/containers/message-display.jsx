import React from "react";
import Message from "@UI-containers/message";
import Tag from "@UI-components/tag";
import MessageBox from "@UI-components/message-box";
import Header from "@UI-components/header";
import {
  Main,
  MessageContainer,
} from "@Style-containers/message-display.style";

const MessageDisplay = () => {
  return (
    <Main>
      <Header />
      <MessageContainer>
        <div>
          <Tag />
          <Message />
        </div>
      </MessageContainer>
      <MessageBox />
    </Main>
  );
};

export default MessageDisplay;
