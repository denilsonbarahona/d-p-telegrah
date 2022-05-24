import React from "react";
import Message from "@ui/containers/message";
import Tag from "@ui/components/tag";
import MessageBox from "@ui/components/message-box";
import Header from "@ui/components/header";
import {
  Main,
  MessageContainer,
} from "@styles/containers/message-display.style";

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
