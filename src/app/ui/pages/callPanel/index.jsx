import React from "react";
import SidePanel from "@template/sidePanel";
import Contact from "@molecules/contact";
import Navigator from "@molecules/navigator";
import { PanelTitle, TitleContainer } from "./call-panel.style";

const CallPanel = () => {
  return (
    <>
      <TitleContainer>
        <PanelTitle>Make a Call</PanelTitle>
      </TitleContainer>
      <SidePanel>
        <p>Call Panel</p>
      </SidePanel>
      <Navigator path="/call" />
    </>
  );
};

export default CallPanel;
