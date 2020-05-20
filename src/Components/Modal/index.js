import React from "react";
import ModalStyles from "./Modal.styles";

const Modal = ({ show, onClose, product }) => (
  <ModalStyles show={show}>
    <div class="modal-content">
      <span class="close" role="buttom" onClick={() => onClose()}>
        &times;
      </span>
      <h1>{product.flavor}</h1>
      <div>
        <input type="radio" />
        <label>Mega Pizza</label>
      </div>
    </div>
  </ModalStyles>
);

export default Modal;
