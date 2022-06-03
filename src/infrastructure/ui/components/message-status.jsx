import React, { useMemo } from "react";
import { IconContext } from "react-icons";
import { IoCheckmarkDone } from "react-icons/io5";
import { Status, Read } from "@Style-components/message-status.style";

const MessageStatus = ({ time }) => {
  const size = useMemo(() => ({ size: "13px" }), [{ size: "13px" }]);
  return (
    <Status>
      <IconContext.Provider value={size}>
        <IoCheckmarkDone />
      </IconContext.Provider>
      <Read>{time}</Read>
    </Status>
  );
};

export default MessageStatus;
