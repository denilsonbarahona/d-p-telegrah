import React from "react";
import SidePanel from "@UI-containers/side-panel";
import Contact from "@UI-containers/contact";
import Navigator from "@UI-containers/navigator";
import {
  PanelTitle,
  TitleContainer,
} from "@Style-containers/call-panel.style.js";

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
