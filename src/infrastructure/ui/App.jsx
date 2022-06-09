import React from "react";
import MessageDisplay from "@organism/messageDisplay";
import AppLayout from "@template/appLayout";
import SideLayout from "@template/sideLayout";

const App = () => {
  return (
    <AppLayout>
      <SideLayout />
      <MessageDisplay />
    </AppLayout>
  );
};
export default App;
