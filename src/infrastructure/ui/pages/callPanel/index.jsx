import React from "react";
import SidePanel from "@template/sidePanel";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";
import { PanelTitle, TitleContainer } from "./call-panel.style";

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
