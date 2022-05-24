import React from "react";
import SidePanel from "@ui/containers/side-panel";
import AddContact from "@ui/components/add-contact";
import Contact from "@ui/containers/contact";

const ContactPanel = () => {
  return (
    <SidePanel>
      <AddContact />
      <Contact />
      <Contact />
    </SidePanel>
  );
};

export default ContactPanel;
