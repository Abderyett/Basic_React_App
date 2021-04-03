import React from 'react';
import styled from 'styled-components';

export function Error() {
  return (
    <StyledError>
      Oops !<br /> 404 We cant seems to find what you're looking for
    </StyledError>
  );
}

const StyledError = styled.h1`
  width: 95vw;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
