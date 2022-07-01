import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Context from "@context/Context";
import RoutesApp from "@Routes/route";
import Themes from "@Style/themes";

const App = () => {
  const { Theme } = useContext(Context);

  return (
    <ThemeProvider theme={Themes[Theme]}>
      <RoutesApp />
    </ThemeProvider>
  );
};
export default App;
