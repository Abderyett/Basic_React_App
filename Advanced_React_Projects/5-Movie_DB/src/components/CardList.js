import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { color, rounded, shadow } from '../utilities';
import { useGlobalContext } from '../context';
import Card from './Card';

export function CardList() {
  const { movies, setPages, term, totalPages, pages } = useGlobalContext();

  return (
    <>
      <CardContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
        {term ? (
          <Heading>
            <h1>Search Results</h1>
          </Heading>
        ) : (
          <Heading>
            <h1>Popular Movies</h1>
          </Heading>
        )}
        {movies.map((movie) => (
          <Card key={movie.id} movie={{ ...movie }} />
        ))}
      </CardContainer>
      {pages < totalPages && (
        <BtnContainer>
          <button type="button" onClick={() => setPages((prevState) => prevState + 1)}>
            Load More...
          </button>
        </BtnContainer>
      )}
    </>
  );
}

// {term.length > 0
//   ? searchedMovies.map((searchedMovie) => <Card key={searchedMovie.id} movie={{ ...searchedMovie }} />)
//   : movies.map((movie) => <Card key={movie.id} movie={{ ...movie }} />)}

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
const Heading = styled(motion.div)`
  grid-column: 1/-1;
  h1 {
    padding-top: 2rem;
    padding-left: 0.25rem;
    color: ${color.blue_grey_800};
    font-size: 2.5rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: 5rem;

  button {
    padding: 1.5rem 3rem;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: ${rounded.lg};
    box-shadow: ${shadow.shadow};
    color: ${color.white};
    background: ${color.cyan_500};
    cursor: pointer;
    &:hover {
      background: ${color.cyan_600};
    }
    &:focus {
      outline: none;
    }
    &:active {
      transform: translateY(1px);
    }
  }
`;
