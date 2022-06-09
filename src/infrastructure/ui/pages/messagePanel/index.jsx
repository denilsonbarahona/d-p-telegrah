import React from "react";
import SearchContainer from "@molecules/searchContainer";
import SidePanel from "@template/sidePanel";
import AddContact from "@molecules/addContact";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";

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
