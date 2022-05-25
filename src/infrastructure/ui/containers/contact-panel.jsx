import React from "react";
import SearchContainer from "@UI-containers/search-container";
import SidePanel from "@UI-containers/side-panel";
import AddContact from "@UI-components/add-contact";
import Contact from "@UI-containers/contact";
import Navigator from "@UI-containers/navigator";

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
