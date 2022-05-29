import React from "react";
import AlertBubble from "@Style-components/message-alert.style";

const MessageAlert = ({ counter }) => {
  return (
    <AlertBubble role="alert" aria-label="8 message to read">
      {counter}
    </AlertBubble>
  );
};

export default MessageAlert;
