import React from 'react';
import styled from 'styled-components';
import { color, rounded } from '../utilities';

function Pages() {
  return (
    <PageWrapper>
      <button type="button">Prev</button>
      <span>1 of 50</span>
      <button type="button">Next</button>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  button {
    background-color: ${color.blue_500};
    color: ${color.white};
    padding: 0.7rem 1rem;
    font-size: 1.25rem;
    border-radius: ${rounded.sm};
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      background-color: ${color.blue_400};
    }
  }
  span {
    font-size: 1.5rem;
    color: ${color.grey_700s};
  }
`;
export default Pages;
