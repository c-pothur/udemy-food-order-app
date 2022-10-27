import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};
const OverlayElement = document.getElementById("modal-overlay");
const Modal = (props) => {
  return (
    <React.Fragment>
      ReactDOM.createPortal(
      <Backdrop onClose={props.onClose} />, OverlayElement);
      ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>, OverlayElement );
    </React.Fragment>
  );
};
export default Modal;
