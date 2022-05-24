import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPanel from "@ui/containers/contact-panel";
import CallPanel from "@ui/containers/call-panel";
import MessagePanel from "@ui/containers/message-panel";
import ConfigPanel from "@ui/containers/config-panel";

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
