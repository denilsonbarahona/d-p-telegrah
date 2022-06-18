import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import UIChanges from "@context/uiChanges";
import RoutesApp from "@Routes/route";
import MessageDisplay from "@organism/messageDisplay";
import AppLayout from "@template/appLayout";
import SideLayout from "@template/sideLayout";
import Themes from "@Style/themes";

const App = () => {
  const { Theme } = useContext(UIChanges);
  const { showMessageForm } = useSelector((state) => state.messages);
  return (
    <ThemeProvider theme={Themes[Theme]}>
      <AppLayout>
        <SideLayout>
          <RoutesApp />
        </SideLayout>
        {showMessageForm ? <MessageDisplay /> : <h2>placeholder</h2>}
      </AppLayout>
    </ThemeProvider>
  );
};
export default App;
