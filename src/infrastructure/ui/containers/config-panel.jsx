import React from "react";
import SidePanel from "@UI-containers/side-panel";
import Navigator from "@UI-containers/navigator";
import Preference from "@UI-components/color-preference";
import Dark from "@Images/dark.webp";
import Light from "@Images/light.webp";
import {
  Title,
  Container,
  TitleContainer,
} from "@Style-containers/config-panel.style";

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
