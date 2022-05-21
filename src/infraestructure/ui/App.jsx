import React from "react";
import Contact from "@ui/containers/contact";
import Navigator from "@ui/containers/navigator";
import Message from "@ui/containers/message";
import Tag from "@ui/components/tag";
import MessageBox from "@ui/components/message-box";
import Search from "@ui/components/search";

const App = () => {
  return (
    <>
      <Search />
      <MessageBox />
      <Tag />
      <Message />
      <Navigator />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </>
  );
};
export default App;
