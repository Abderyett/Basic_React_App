import React from 'react';
import styled from 'styled-components';
import { color, rounded } from '../utilities';

function Search() {
  return (
    <StyledForm>
      <input type="text" placeholder="Search For News" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  input {
    width: 300px;
    height: 4rem;
    caret-color: ${color.grey_700};
    text-indent: 2rem;
    color: ${color.grey_700};
    font-size: 1.5rem;
    border-radius: ${rounded.md};
    &:focus {
      outline: 1px solid ${color.blue_500};
    }
  }
`;

export default Search;
