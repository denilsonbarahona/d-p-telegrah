import React from "react";
import RoutesApp from "@Routes/route";
import MessageDisplay from "@organism/messageDisplay";
import AppLayout from "@template/appLayout";
import SideLayout from "@template/sideLayout";

const App = () => {
  return (
    <AppLayout>
      <SideLayout>
        <RoutesApp />
      </SideLayout>
      <MessageDisplay />
    </AppLayout>
  );
};
export default App;
