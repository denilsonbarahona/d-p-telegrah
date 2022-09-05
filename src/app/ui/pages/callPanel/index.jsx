import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import SidePanel from "@template/sidePanel";
import Navigator from "@molecules/navigator";
import Contact from "@molecules/contact";
import { getContact } from "@Redux/features/contact/actions";
import {Emit} from "@/app/socket/socket-instance";
import { CheckAvailability } from "@/app/socket/socket-actions";
import { SetBeggingCall } from "@Redux/features/webRTC";
import { PanelTitle, TitleContainer } from "./call-panel.style";

const CallPanel = () => {
  const [contactState, setContactState] = useState([]);
  const { contacts } = useSelector((state) => state.contact);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setContactState(contacts);
  }, [contacts]);

  React.useEffect(() => {
    // if (user?.email) {
      const promise = dispatch(getContact(user?.email));
      return () => promise.abort();
    // }
  }, []);

  const HandleClick = (event, receiver) => {
    event.stopPropagation();
    CheckAvailability(user.id, receiver, Emit);
    dispatch(SetBeggingCall(true));
  };

  return (
    <>
      <TitleContainer>
        <PanelTitle>Make a Call</PanelTitle>
      </TitleContainer>
      <SidePanel>
       {contactState.map((contact) => (
          <Contact
            contactId={contact.id}
            key={contact.id}
            chatId={contact.chatId}
            name={contact.name}
            src={contact.image}
            paragraph={`últ. vez ${contact.lastSeen}`}
          >
            <button onClick={(event)=>HandleClick(event, contact.id)} type="button">Call</button>
          </Contact>
        ))}
      </SidePanel>
      <Navigator path="/call" />
    </>
  );
};

export default CallPanel;
