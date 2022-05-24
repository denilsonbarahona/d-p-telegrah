import React from "react";
import SearchContainer from "@ui/containers/search-container";
import SidePanel from "@ui/containers/side-panel";
import Navigator from "@ui/containers/navigator";

const ConfigPanel = () => {
  return (
    <>
      <SearchContainer />
      <SidePanel>
        <div>config</div>
      </SidePanel>
      <Navigator path="/config" />
    </>
  );
};

export default ConfigPanel;
