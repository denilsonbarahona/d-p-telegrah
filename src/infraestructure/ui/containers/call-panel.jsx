import React from "react";
import SidePanel from "@ui/containers/side-panel";
import Contact from "@ui/containers/contact";
import Navigator from "@ui/containers/navigator";
import {
  PanelTitle,
  TitleContainer,
} from "@styles/containers/call-panel.style.js";

const CallPanel = () => {
  return (
    <>
      <TitleContainer>
        <PanelTitle>Recent Calls</PanelTitle>
      </TitleContainer>
      <SidePanel>
        <Contact
          name="Denilson Barahona"
          titleClassName="isRed"
          src="https://picsum.photos/id/237/200/300"
          paragraph="Lost"
        />
        <Contact
          name="Denilson Barahona"
          titleClassName="isBlue"
          src="https://picsum.photos/id/237/200/300"
          paragraph="Outgoing"
        />
        <Contact
          name="Denilson Barahona"
          src="https://picsum.photos/id/237/200/300"
          paragraph="Incoming"
        />
      </SidePanel>
      <Navigator path="/call" />
    </>
  );
};

export default CallPanel;
