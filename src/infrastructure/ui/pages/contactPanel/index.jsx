import React, { useState } from "react";
import Search from "@atoms/search";
import SearchContainer from "@molecules/searchContainer";
import AddContact from "@molecules/addContact";
import Navigator from "@molecules/navigator";
import Contact from "@molecules/contact";
import SidePanel from "@template/sidePanel";
import { getContact } from "@Redux/features/contact/actions";
import { useSelector, useDispatch } from "react-redux";

const ContactPanel = () => {
  const [contactState, setContactState] = useState([]);
  const { contacts } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setContactState(contacts);
  }, [contacts]);

  React.useEffect(() => {
    const promise = dispatch(getContact("91sbarahona@gmail.com"));
    return () => promise.abort();
  }, []);

  const handleOnChange = (event) => {
    const { value } = event.target;
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setContactState(filtered);
  };


  return (
    <>
      <SearchContainer>
        <Search onChange={handleOnChange} />
      </SearchContainer>
      <SidePanel>
        <AddContact />
         {contactState.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            src={contact.image}
            paragraph="últ. vez recientemente"
          />
        ))}
      </SidePanel>
      <Navigator path="/" />
    </>
  );
};

export default ContactPanel;
