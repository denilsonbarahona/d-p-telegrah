import React from "react";
import SearchContainer from "@molecules/searchContainer";
import SidePanel from "@template/sidePanel";
import AddContact from "@molecules/addContact";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";
import { useSelector, useDispatch } from "react-redux";
import { getContact } from "@Redux/features/contact/actions";

const ContactPanel = () => {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  console.log(contacts);

  React.useEffect(() => {
    dispatch(getContact("91sbarahona@gmail.com"));
  }, []);

  return (
    <>
      <SearchContainer />
      <SidePanel>
        <AddContact />
        <Contact
          name="Denilson Barahona"
          src="https://picsum.photos/id/237/200/300"
          paragraph="últ. vez recientemente"
        />
        <Contact
          name="Denilson Barahona"
          src="https://picsum.photos/id/237/200/300"
          paragraph="últ. vez recientemente"
        />
      </SidePanel>
      <Navigator path="/" />
    </>
  );
};

export default ContactPanel;
