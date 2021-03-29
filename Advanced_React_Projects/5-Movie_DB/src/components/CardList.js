import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';
import Card from './Card';

export function CardList() {
  return (
    <>
      <Heading>
        <h1>Popular Movies</h1>
        <div />
      </Heading>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
  );
}

const CardContainer = styled.section`
  width: 95vw;
  /* height: 100vh; */
  background-color: #bcccdc;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-auto-rows: 42rem;
  grid-gap: 2rem;
  justify-content: center;
`;
const Heading = styled.div`
  h1 {
    padding-top: 2rem;
    padding-left: 2.5rem;
    color: ${color.black};
    font-size: 2.5rem;
  }
  div {
    border-bottom: 3px solid ${color.black};
    width: 19.5rem;
    padding-top: 1rem;
    margin-left: 3rem;
  }
`;
