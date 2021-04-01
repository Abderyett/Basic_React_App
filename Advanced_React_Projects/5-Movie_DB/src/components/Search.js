import React from 'react';
import styled from 'styled-components';
import { rounded, color } from '../utilities';
import { SearchSvg } from './svg';
import { useGlobalContext } from '../context';

function Search() {
  const { term, setTerm, fetchMovie, setMovies } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    setMovies([]);
    fetchMovie();
  };
  console.log(term);
  return (
    <Form onSubmit={submitHandler}>
      <SearchSvg />
      <Input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
    </Form>
  );
}

const Form = styled.form`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  background-color: ${color.grey_200};
  border-radius: ${rounded.lg};
  width: 40%;
  max-width: 1117px;
  margin-right: 5rem;
`;

const Input = styled.input`
  border-radius: ${rounded.lg};
  height: 3rem;
  width: 100%;

  color: ${color.grey_700};
  background-color: ${color.grey_200};
  caret-color: ${color.grey_700};

  &:focus {
    outline: none;
  }
`;
export default Search;
