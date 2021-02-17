import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modelContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <p>{modelContent}</p>
    </div>
  );
};

Modal.propTypes = {
  modelContent: PropTypes.string,
  closeModal: PropTypes.func,
};

export default Modal;
