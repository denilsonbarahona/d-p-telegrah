import React from "react";
import PropTypes from "prop-types";
import AlertBubble from "./message-alert.style";

const MessageAlert = ({ counter }) => {
  if(counter > 0) {
    return (
      <AlertBubble role="alert" aria-label={`${counter} messages without read`}>
        {counter}
      </AlertBubble>
    );
  }

  return null;
};

MessageAlert.propTypes = {
  counter: PropTypes.number,
};

MessageAlert.defaultProps = {
  counter: 0,
};

export default MessageAlert;
