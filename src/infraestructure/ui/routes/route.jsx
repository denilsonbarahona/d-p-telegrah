import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPanel from "@ui/containers/contact-panel";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
