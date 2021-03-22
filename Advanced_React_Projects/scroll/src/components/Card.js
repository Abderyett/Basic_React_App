import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { rounded, color } from '../utilities';

function Card() {
  const { showDetails, setShowDetails } = useGlobalContext();
  const imageRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!imageRef.current.contains(event.target)) {
        setShowDetails(false);
      }
    };
    document.addEventListener('mouseover', handler);
    return () => {
      document.removeEventListener('mouseover', handler);
    };
  });
  const url =
    'https://images.unsplash.com/photo-1612832164065-fc35ded2a291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYxNjM5NjU3Ng&ixlib=rb-1.2.1&q=80&w=1080';
  const urlAuthor =
    'https://images.unsplash.com/profile-1587651800415-20eed2ec0209image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64';
  return (
    <CardWrapper ref={imageRef} onMouseOver={() => setShowDetails(true)}>
      <img src={url} alt="surface" />
      {showDetails && (
        <InfoWrapper>
          <div>
            <h4>Detail</h4>
            <h5>Likes</h5>
          </div>

          <img src={urlAuthor} alt="author" />
        </InfoWrapper>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;

  img {
    width: 40rem;
    height: 25rem;
    object-fit: cover;
    border-radius: ${rounded.md};
  }
`;

const InfoWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: ${color.white};
  height: 5rem;
  width: 40rem;
  position: absolute;
  bottom: 1.5px;
  left: 0;
  border-bottom-left-radius: ${rounded.md};
  border-bottom-right-radius: ${rounded.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    line-height: 1.5rem;
  }

  img {
    padding: 0.25rem;
    width: 3rem;
    height: 3rem;
    border-radius: ${rounded.full};
    background: ${color.white};
    margin-right: 2rem;
    cursor: pointer;
  }
`;
export default Card;
