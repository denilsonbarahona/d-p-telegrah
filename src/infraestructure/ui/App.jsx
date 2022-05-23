import React from "react";
import MessageDisplay from "@ui/containers/message-display";
import AppLayout from "@ui/layouts/app-layout";
import SideLayout from "@ui/layouts/side-layout";

const App = () => {
  return (
    <AppLayout>
      <SideLayout />
      <MessageDisplay />
    </AppLayout>
  );
};
export default App;
