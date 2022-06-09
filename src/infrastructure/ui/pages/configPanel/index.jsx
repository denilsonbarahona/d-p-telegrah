import React from "react";
import SidePanel from "@template/sidePanel";
import Navigator from "@molecules/navigator";
import Preference from "@atoms/colorPreference";
import Dark from "@Images/dark.webp";
import Light from "@Images/light.webp";
import { Title, Container, TitleContainer } from "./config-panel.style";

const ConfigPanel = () => {
  return (
    <>
      <TitleContainer>
        <Title>Which theme do you like the most?</Title>
      </TitleContainer>
      <SidePanel>
        <Container>
          <Preference text="Light" src={Light} />
          <Preference text="Dark" src={Dark} />
        </Container>
      </SidePanel>
      <Navigator path="/config" />
    </>
  );
};

export default ConfigPanel;
