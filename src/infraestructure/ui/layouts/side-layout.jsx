import React from "react";
import Navigator from "@ui/containers/navigator";
import SearchContainer from "@ui/containers/search-container";
import Container from "@styles/layouts/side-layout.style";
import RoutesApp from "@ui/routes/route";

const SideLayout = () => {
  return (
    <Container>
      <SearchContainer />
      <RoutesApp />
      <Navigator />
    </Container>
  );
};

export default SideLayout;
