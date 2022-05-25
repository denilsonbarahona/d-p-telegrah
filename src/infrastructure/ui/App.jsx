import React from "react";
import MessageDisplay from "@UI-containers/message-display";
import AppLayout from "@UI-layouts/app-layout";
import SideLayout from "@UI-layouts/side-layout";

const App = () => {
  return (
    <AppLayout>
      <SideLayout />
      <MessageDisplay />
    </AppLayout>
  );
};
export default App;
