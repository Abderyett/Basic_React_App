import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { color, rounded } from '../utilities';
import { useGlobalContext } from '../context';

function Input() {
  const inputRef = useRef();
  const { active, setActive, SetSearchTerm, searchTerm, fetchData } = useGlobalContext();

  useEffect(() => {
    const handler = (event) => {
      if (!inputRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(searchTerm);
  };

  return (
    <SearchWrapper ref={inputRef} active={+active} onClick={() => setActive(!active)} onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        active={+active}
        placeholder="Search Image"
        onChange={(e) => SetSearchTerm(e.target.value)}
      />
      <SearchIcon active={+active} />
    </SearchWrapper>
  );
}

const StyledInput = styled.input`
  width: ${(active) => (active.active ? '28rem' : '20rem')};
  height: 3rem;
  font-size: 1.5rem;
  background: ${(active) => (active.active ? `${color.white}` : `${color.grey_200}`)};
  border-radius: ${rounded.md};
  transition: width 0.3s ease;
  color: ${color.grey_700};
  text-indent: 5%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${color.grey_400};
    text-indent: 5%;
  }
`;
const SearchIcon = styled(FaSearch)`
  color: ${(active) => (active.active ? `${color.indigo_500}` : `${color.grey_700}`)};

  font-size: 1.25rem;
  margin-top: 0.5rem;
  transition: width 0.3s ease;
`;

const SearchWrapper = styled.form`
  width: ${(active) => (active.active ? '30rem' : '22rem')};
  margin: 5rem auto;
  border-radius: ${rounded.md};
  background: ${(active) => (active.active ? `${color.white}` : `${color.grey_200}`)};
  border: ${(active) => (active.active ? `2px solid ${color.indigo_500}` : 'none')};
  transition: width 0.3s ease;

  &:focus {
    outline-color: ${color.red_500};
  }
`;

export default Input;
