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
        <Tag />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </MessageContainer>
      <MessageBox />
    </Main>
  );
};

export default MessageDisplay;
