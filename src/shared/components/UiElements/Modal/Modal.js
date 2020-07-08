import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div className="Modal" style={{ display: show ? "block" : "none" }}>
        {children}
      </div>
    </>
  );
};

export default Modal;
