import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function CradList() {
  return (
    <StyledCardList>
      <Card />
      <Card />
    </StyledCardList>
  );
}

const StyledCardList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 40rem);
  grid-auto-rows: 25rem;
  grid-gap: 2rem;
`;

export default CradList;
