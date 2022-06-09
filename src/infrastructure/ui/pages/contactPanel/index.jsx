import React from "react";
import SearchContainer from "@molecules/searchContainer";
import SidePanel from "@template/sidePanel";
import AddContact from "@molecules/addContact";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";
//import { getContact } from "../../../redux/slices/contact";
//import { useSelector, useDispatch } from "react-redux";

const ContactPanel = () => {
  // const contacts = useSelector((state) => state.contact);
  // const dispatch = useDispatch();
  // console.log(contacts);
  /*
  useEffect(() => {
    dispatch(getContact());
  }, []);
*/
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
