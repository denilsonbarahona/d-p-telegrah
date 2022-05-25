import React from "react";
import SearchContainer from "@UI-containers/search-container";
import SidePanel from "@UI-containers/side-panel";
import AddContact from "@UI-components/add-contact";
import Contact from "@UI-containers/contact";
import Navigator from "@UI-containers/navigator";

const MessagePanel = () => {
  return (
    <>
      <SearchContainer />
      <SidePanel>
        <AddContact />
        <Contact
          name="Denilson Barahona"
          showStatus
          src="https://picsum.photos/id/237/200/300"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat cum commodi sunt quam, quaerat aliquid distinctio quas quod iure ad sequi ea? Eligendi esse est animi magnam quae numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat cum commodi sunt quam, quaerat aliquid distinctio quas quod iure ad sequi ea? Eligendi esse est animi magnam quae numquam?"
        />
        <Contact
          name="Denilson Barahona"
          showStatus
          src="https://picsum.photos/id/237/200/300"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat cum commodi sunt quam, quaerat aliquid distinctio quas quod iure ad sequi ea? Eligendi esse est animi magnam quae numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat cum commodi sunt quam, quaerat aliquid distinctio quas quod iure ad sequi ea? Eligendi esse est animi magnam quae numquam?"
        />
      </SidePanel>
      <Navigator path="/message" />
    </>
  );
};

export default MessagePanel;
