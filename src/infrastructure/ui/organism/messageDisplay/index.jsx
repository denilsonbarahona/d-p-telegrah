import React from "react";
import Message from "@molecules/message";
import Tag from "@atoms/tag";
import MessageBox from "@molecules/messageBox";
import Header from "@molecules/header";
import { Main, MessageContainer } from "./message-display.style";

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
