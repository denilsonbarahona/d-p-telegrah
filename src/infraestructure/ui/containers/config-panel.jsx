import React from "react";
import SidePanel from "@ui/containers/side-panel";
import Navigator from "@ui/containers/navigator";
import Preference from "@ui/components/color-preference";
import Dark from "@statics/images/dark.webp";
import Light from "@statics/images/light.webp";
import {
  Title,
  Container,
  TitleContainer,
} from "@styles/containers/config-panel.style";

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
