import React from "react";
import Contact from "@ui/containers/contact";
import Navigator from "@ui/containers/navigator";
import SearchContainer from "@ui/containers/search-container";
import ContactPanel from "@ui/containers/contact-panel";
import AddContact from "@ui/components/add-contact";
import MessageDisplay from "@ui/containers/message-display";

const App = () => {
  return (
    <>
      <SearchContainer />
      <ContactPanel>
        <AddContact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </ContactPanel>
      <Navigator />
      <MessageDisplay />
    </>
  );
};
export default App;
