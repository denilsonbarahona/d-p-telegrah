import React, { useContext } from "react";
import Context from "@context/Context";
import SidePanel from "@template/sidePanel";
import Navigator from "@molecules/navigator";
import Preference from "@atoms/colorPreference";
import Dark from "@Images/dark.webp";
import Light from "@Images/light.webp";
import { Title, Container, TitleContainer } from "./config-panel.style";

const ConfigPanel = () => {
  const { Theme, setTheme } = useContext(Context);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <TitleContainer>
        <Title>Which theme do you like the most?</Title>
      </TitleContainer>
      <SidePanel>
        <Container>
          <Preference
            selected={Theme === "Light"}
            onClick={() => handleThemeChange("Light")}
            text="Light"
            src={Light}
          />
          <Preference
            selected={Theme === "Dark"}
            onClick={() => handleThemeChange("Dark")}
            text="Dark"
            src={Dark}
          />
        </Container>
      </SidePanel>
      <Navigator path="/config" />
    </>
  );
};

export default ConfigPanel;
