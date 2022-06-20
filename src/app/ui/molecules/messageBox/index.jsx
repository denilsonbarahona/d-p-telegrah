import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage, createChat } from "@Redux/features/messages/actions";
import {
  MessageContainer,
  TextArea,
  Button,
  MessageAction,
} from "./message-box.style";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { contactRequest } = useSelector((state) => state.messages);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { chatId } = contactRequest;
    if (chatId !== "(blank)" && message !== "") {
      dispatch(sendMessage({ chatID: chatId, message }));
    } else if (chatId === "(blank)" && message !== "") {
      dispatch(createChat({ id: contactRequest.contactId, message }));
    }
    setMessage("");
  };

  return (
    <MessageContainer onSubmit={handleSubmit}>
      <TextArea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        name="message"
        placeholder="Write a message"
      />
      <MessageAction>
        <Button type="submit">
          <IoSend />
        </Button>
      </MessageAction>
    </MessageContainer>
  );
};

export default MessageBox;
