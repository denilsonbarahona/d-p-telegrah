import React from "react";
import Container from "@Style-layouts/side-layout.style";
import RoutesApp from "@Routes/route";

const SideLayout = () => {
  return (
    <Container aria-label="side menu">
      <RoutesApp />
    </Container>
  );
};

export default SideLayout;
