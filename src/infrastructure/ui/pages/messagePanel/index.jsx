import React, { useState } from "react";
import Search from "@atoms/search";
import MessageStatus from "@atoms/messageStatus";
import MessageAlert from "@atoms/messageAlert";
import SidePanel from "@template/sidePanel";
import SearchContainer from "@molecules/searchContainer";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";
import getChats from "@Redux/features/chats/actions";
import { useSelector, useDispatch } from "react-redux";
import { ContactNotification } from "@molecules/contact/contact.style";

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
      chat.user[0].name.toLowerCase().includes(value.toLowerCase())
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
            name={chat.user[0].name}
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
