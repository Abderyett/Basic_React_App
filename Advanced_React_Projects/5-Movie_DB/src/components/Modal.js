import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context';
import { Times } from './svg';

export function Modal({ videoId }) {
  const { setShowModal } = useGlobalContext();

  const closeModal = () => {
    setShowModal(false);
  };
  function closeWithEsc(e) {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    document.addEventListener('keyup', closeWithEsc);

    return () => {
      document.removeEventListener('mousedown', closeModal);
      document.removeEventListener('keyup', closeWithEsc);
    };
  }, []);

  console.log(videoId);

  // {`https://www.youtube.com/embed/${videoId}`}
  return ReactDOM.createPortal(
    <StyledModal>
      <ModalContainer>
        <TimesContainer>
          <Times />
        </TimesContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5qap5aO4i9A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ModalContainer>
    </StyledModal>,
    document.querySelector('#modal')
  );
}
const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  #d56b43 iframe {
    width: 90%;
    height: 100%;
  }
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  height: 700px;
`;

const TimesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 9rem;
  cursor: pointer;
`;

Modal.propTypes = PropTypes.string.isRequired;
