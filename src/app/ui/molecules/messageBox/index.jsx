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
  const { user } = useSelector((state) => state.auth);
  const { contactRequest } = useSelector((state) => state.messages);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { chatId, contactId } = contactRequest;
    const sender = {
      name: user.name,
      id: user.id,
      image: user.image,
    };

    if (chatId !== "(blank)" && message !== "") {
      dispatch(sendMessage({ contactId, chatID: chatId, message, sender }));
    } else if (chatId === "(blank)" && message !== "") {
      dispatch(createChat({ contactId, message, sender }));
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
