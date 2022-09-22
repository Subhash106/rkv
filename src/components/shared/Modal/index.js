import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Modal = props => {
  const modal = <div className="modal">{props.children}</div>;
  return ReactDOM.createPortal(modal, document.getElementById('modal-root'));
};

export default Modal;
