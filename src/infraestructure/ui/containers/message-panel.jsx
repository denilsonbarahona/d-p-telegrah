import React from "react";
import SearchContainer from "@ui/containers/search-container";
import SidePanel from "@ui/containers/side-panel";
import AddContact from "@ui/components/add-contact";
import Contact from "@ui/containers/contact";
import Navigator from "@ui/containers/navigator";

const MessagePanel = () => {
  return (
    <>
      <SearchContainer />
      <SidePanel>
        <AddContact />
        <Contact />
        <Contact />
      </SidePanel>
      <Navigator path="/message" />
    </>
  );
};

export default MessagePanel;
