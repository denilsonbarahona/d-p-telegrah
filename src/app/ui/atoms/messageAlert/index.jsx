import React from "react";
import PropTypes from "prop-types";
import AlertBubble from "./message-alert.style";

const MessageAlert = ({ counter }) => {
  return (
    <AlertBubble role="alert" aria-label={`${counter} messages without read`}>
      {counter}
    </AlertBubble>
  );
};

MessageAlert.propTypes = {
  counter: PropTypes.number,
};

MessageAlert.defaultProps = {
  counter: 0,
};

export default MessageAlert;
