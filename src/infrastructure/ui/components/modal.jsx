import React from "react";
import reactDom from "react-dom";
import PropTypes from "prop-types";
import Dialog from "@Style-components/modal.style";

const Modal = ({ children }) => {
  return reactDom.createPortal(
    <Dialog id="dialog" aria-label="popup">
      {children}
    </Dialog>,
    document.querySelector("#modal")
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
};

export default Modal;
