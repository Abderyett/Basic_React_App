import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

function Modal() {
  const { setShowModal } = useGlobalContext();
  return ReactDOM.createPortal(
    <div className="modal-overlay show-modal">
      <div className="modal-container">
        <h3>Modal content</h3>
        <button type="button" className="close-modal-btn">
          <FaTimes onClick={() => setShowModal(false)} />
        </button>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal;
