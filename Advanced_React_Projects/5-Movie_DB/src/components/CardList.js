import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';
import Card from './Card';
import { useGlobalContext } from '../context';

export function CardList() {
  const { movies } = useGlobalContext();

  return (
    <>
      <CardContainer>
        <Heading>
          <h1>Popular Movies</h1>
        </Heading>
        {movies.map((movie) => {
          const { id } = movie;
          return <Card key={id} movie={{ ...movie }} />;
        })}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.section`
  width: 95vw;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-template-rows: 2rem;
  grid-auto-rows: 42rem;
  grid-gap: 2rem;
  justify-content: center;
  @media screen and (min-width: 1400px) {
    width: 85vw;
    margin: 0 auto;
  } ;
`;
const Heading = styled.div`
  grid-column: 1/-1;
  h1 {
    padding-top: 2rem;
    padding-left: 0.25rem;
    color: ${color.blue_grey_800};
    font-size: 2.5rem;
  }
`;
