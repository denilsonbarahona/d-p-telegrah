import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import UIChanges from "@context/uiChanges";
import Tag from "@atoms/tag";
import Message from "@molecules/message";
import MessageBox from "@molecules/messageBox";
import Header from "@molecules/header";
import getMessages from "@Redux/features/messages/actions";
import { Main, MessageContainer } from "./message-display.style";

const MessageDisplay = () => {
  const { showDisplay } = useContext(UIChanges);
  const {
    contactRequest: { chatId, name, src },
  } = useSelector((state) => state.messages);
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const promise = dispatch(getMessages({ id: chatId, page: 1 }));
    return () => promise.abort();
  }, [chatId]);

  return (
    <Main hide={showDisplay}>
      <Header name={name} image={src} />
      <MessageContainer>
        {messages.map((message) => (
          <div key={message.tag}>
            <Tag tag={message.tag} />
            {message.messages.map((item) => (
              <Message
                name={item.sender.name}
                image={item.sender.image}
                key={item.message}
                message={item.message}
              />
            ))}
          </div>
        ))}
      </MessageContainer>
      <MessageBox />
    </Main>
  );
};

export default MessageDisplay;
