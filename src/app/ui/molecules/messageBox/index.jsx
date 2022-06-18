import React from "react";
import { IconContext } from "react-icons";
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
        <IconContext.Provider value={{ size: "20px" }}>
          <IoAttachOutline />
        </IconContext.Provider>
      </Button>
      <TextArea placeholder="Write a message" />
      <MessageAction>
        <IconContext.Provider value={{ size: "20px" }}>
          <IoHappyOutline />
          <IoMicOutline />
        </IconContext.Provider>
      </MessageAction>
    </MessageContainer>
  );
};

export default MessageBox;
