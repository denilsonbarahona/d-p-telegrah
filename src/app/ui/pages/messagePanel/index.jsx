import React, { useState } from "react";
import Search from "@atoms/search";
import MessageStatus from "@atoms/messageStatus";
import MessageAlert from "@atoms/messageAlert";
import SearchContainer from "@molecules/searchContainer";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";
import { ContactNotification } from "@molecules/contact/contact.style";
import SidePanel from "@template/sidePanel";
import getChats from "@Redux/features/chats/actions";
import { useSelector, useDispatch } from "react-redux";

const MessagePanel = () => {
  const [chatState, setChatState] = useState([]);
  const { chats } = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setChatState(chats);
  }, [chats]);

  React.useEffect(() => {
    const promise = dispatch(
      getChats({ id: "ldmYi4zkFvyCkQSlWqJ1", name: "Denilson Barahona" })
    );
    return () => promise.abort();
  }, []);

  const handleOnChange = (event) => {
    const { value } = event.target;
    const filtered = chats.filter((chat) =>
      chat.user.name.toLowerCase().includes(value.toLowerCase())
    );
    setChatState(filtered);
  };

  return (
    <>
      <SearchContainer>
        <Search onChange={handleOnChange} />
      </SearchContainer>
      <SidePanel>
        {chatState.map((chat) => (
          <Contact
            key={chat.id}
            chatId={chat.id}
            name={chat.user.name}
            src="https://picsum.photos/id/237/200/300"
            paragraph={chat.lastMessage.message}
          >
            <ContactNotification>
              <MessageStatus time={chat.lastMessage.time} />
              <MessageAlert counter={chat.notRead} />
            </ContactNotification>
          </Contact>
        ))}
      </SidePanel>
      <Navigator path="/message" />
    </>
  );
};

export default MessagePanel;
