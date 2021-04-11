import React from 'react';
import styled from 'styled-components';
import Articles from './Articles';

function CardList() {
  return (
    <Wrapper>
      <Articles />
      <Articles />
      <Articles />
      <Articles />
      <Articles />
      <Articles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 570px);
  grid-auto-rows: 10rem;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  margin-top: 10rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`;

export default CardList;
