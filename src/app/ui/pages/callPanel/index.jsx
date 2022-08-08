import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import SidePanel from "@template/sidePanel";
import Navigator from "@molecules/navigator";
import Contact from "@molecules/contact";
import { getContact } from "@Redux/features/contact/actions";
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
            <Link to={`/conference?receiver=${contact.id}&request=true`}>Call</Link>
          </Contact>
        ))}
      </SidePanel>
      <Navigator path="/call" />
    </>
  );
};

export default CallPanel;
