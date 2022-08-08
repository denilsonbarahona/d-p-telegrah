import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListenMessage } from "@/app/socket/socket-instance";
import Context from "@context/Context";
import Tag from "@atoms/tag";
import Message from "@molecules/message";
import MessageBox from "@molecules/messageBox";
import Header from "@molecules/header";
import getMessages from "@Redux/features/messages/actions";
import { Main, MessageContainer } from "./message-display.style";

const MessageDisplay = () => {
  const { showDisplay } = useContext(Context);
  const {
    contactRequest: { chatId, name, src, contactId },
  } = useSelector((state) => state.messages);
  const { messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  React.useEffect(() => {
    ListenMessage((message)=>{
      const { sender } = JSON.parse(message.data);
      if (contactId === sender) {
        dispatch(getMessages({ id: chatId, page: 1 }));
      }
    });
  } , []);

  React.useEffect(() => {
    const promise = dispatch(getMessages({ id: chatId, page: 1 }));
    return () => promise.abort();
  }, [chatId]);

  return (
    <Main hide={showDisplay}>
      <Header name={name ?? ""} image={src ?? ""} />
      <MessageContainer>
        {messages.map((message) => (
          <div key={message.tag}>
            <Tag tag={message.tag} />
            {message.messages.map((item, i) => (
              <Message
                name={item.sender.name}
                image={item.sender.image}
                key={`message-#${i}`}
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
