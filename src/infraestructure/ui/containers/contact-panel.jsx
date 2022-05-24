import React from "react";
import SearchContainer from "@ui/containers/search-container";
import SidePanel from "@ui/containers/side-panel";
import AddContact from "@ui/components/add-contact";
import Contact from "@ui/containers/contact";
import Navigator from "@ui/containers/navigator";

const ContactPanel = () => {
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
