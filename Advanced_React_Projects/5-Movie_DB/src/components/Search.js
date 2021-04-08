import React from 'react';
import styled from 'styled-components';
import { rounded, color } from '../utilities';
import { SearchSvg } from './svg';
import { useGlobalContext } from '../context';

function Search() {
  const { setTerm, fetchMovie, setMovies, term } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    setMovies([]);
    fetchMovie();
  };

  return (
    <Form onSubmit={submitHandler}>
      <SearchSvg />
      <Input
        type="text"
        placeholder="Search for a movie"
        value={term}
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
  width: 400px;
  max-width: 800px;
  margin-right: 5rem;
  @media (max-width: 400px) {
    width: 130px;
    margin-right: 0.7rem;
  }
`;

const Input = styled.input`
  border-radius: ${rounded.lg};
  height: 3rem;
  width: 100%;
  color: ${color.grey_700};
  background-color: ${color.grey_200};
  caret-color: ${color.grey_700};
  @media (max-width: 400px) {
    &::placeholder {
      font-size: 10px;
    }
  }
  &:focus {
    outline: none;
  }
`;
export default Search;
