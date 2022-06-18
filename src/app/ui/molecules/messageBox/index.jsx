import React from "react";
import { IoAttachOutline, IoHappyOutline, IoMicOutline } from "react-icons/io5";
import {
  MessageContainer,
  TextArea,
  Button,
  MessageAction,
} from "./message-box.style";

const MessageBox = () => {
  return (
    <MessageContainer>
      <Button type="button">
        <IoAttachOutline />
      </Button>
      <TextArea placeholder="Write a message" />
      <MessageAction>
        <>
          <IoHappyOutline />
          <IoMicOutline />
        </>
      </MessageAction>
    </MessageContainer>
  );
};

export default MessageBox;
