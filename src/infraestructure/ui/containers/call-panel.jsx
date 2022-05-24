import React from "react";
import SidePanel from "@ui/containers/side-panel";
import Contact from "@ui/containers/contact";
import Navigator from "@ui/containers/navigator";

const CallPanel = () => {
  return (
    <>
      <div>
        <h2>Llamadas recientes</h2>
      </div>
      <SidePanel>
        <Contact />
        <Contact />
      </SidePanel>
      <Navigator path="/call" />
    </>
  );
};

export default CallPanel;
