import React from "react";
import AlertBubble from "@Style-components/message-alert.style";
import PropTypes from "prop-types";

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
