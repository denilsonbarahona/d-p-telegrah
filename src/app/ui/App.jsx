import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import openSocket from "@/app/socket/socket-actions";
import UIChanges from "@context/uiChanges";
import RoutesApp from "@Routes/route";
import MessageDisplay from "@organism/messageDisplay";
import AppLayout from "@template/appLayout";
import SideLayout from "@template/sideLayout";
import Themes from "@Style/themes";

const App = () => {
  const { Theme } = useContext(UIChanges);
  useEffect(() => {
    openSocket();
  }, []);
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
