import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import PropTypes from "prop-types";
import { Status, Read } from "./message-status.style";

const MessageStatus = ({ time }) => {
  return (
    <Status>
      <IoCheckmarkDone /> 
      <Read>{time}</Read>
    </Status>
  );
};

MessageStatus.propTypes = {
  time: PropTypes.string,
};

MessageStatus.defaultProps = {
  time: "",
};

export default MessageStatus;
