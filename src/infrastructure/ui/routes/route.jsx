import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPanel from "@UI-containers/contact-panel";
import CallPanel from "@UI-containers/call-panel";
import MessagePanel from "@UI-containers/message-panel";
import ConfigPanel from "@UI-containers/config-panel";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPanel />} />
        <Route path="/call" element={<CallPanel />} />
        <Route path="/message" element={<MessagePanel />} />
        <Route path="/config" element={<ConfigPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
