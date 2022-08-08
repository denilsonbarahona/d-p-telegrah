import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPanel from "@pages/contactPanel";
import CallPanel from "@pages/callPanel";
import MessagePanel from "@pages/messagePanel";
import ConfigPanel from "@pages/configPanel";
import Main from "@pages/main";
import Login from "@pages/login";
import Conference from "@pages/conference";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ContactPanel />} />
          <Route path="call" element={<CallPanel />} />
          <Route path="message" element={<MessagePanel />} />
          <Route path="config" element={<ConfigPanel />} />
        </Route>
        <Route path="/conference" element={<Conference />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
