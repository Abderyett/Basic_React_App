import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { color, rounded } from '../utilities';
import { useGlobalContext } from '../contex';

function Input() {
  const inputRef = useRef();
  const { active, setActive } = useGlobalContext();

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (!inputRef.current.contains(event.target)) {
        setActive(false);
      }
    });
  }, []);
  return (
    <SearchWrapper ref={inputRef} active={+active} onClick={() => setActive(!active)}>
      <StyledInput type="text" active={+active} />
      <Search active={+active} />
    </SearchWrapper>
  );
}

const StyledInput = styled.input`
  width: ${(active) => (active.active ? '28rem' : '20rem')};
  height: 3rem;
  font-size: 1.5rem;
  background: ${(active) => (active.active ? `${color.white}` : `${color.grey_200}`)};
  border-radius: ${rounded.lg};

  &:focus {
    outline: none;
  }
`;
const Search = styled(FaSearch)`
  color: ${(active) => (active.active ? `${color.indigo_500}` : `${color.grey_700}`)};

  font-size: 1.25rem;
  margin-top: 0.5rem;
`;

const SearchWrapper = styled.form`
  width: ${(active) => (active.active ? '30rem' : '22rem')};
  margin: 5rem auto;
  border-radius: ${rounded.lg};
  background: ${(active) => (active.active ? `${color.white}` : `${color.grey_200}`)};
  border: ${(active) => (active.active ? `2px solid ${color.indigo_500}` : 'none')};

  &:focus {
    outline-color: ${color.red_500};
  }
`;

export default Input;
