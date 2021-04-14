import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { color } from '../utilities';

export function Loading() {
  return (
    <Spinner>
      <Spinner1 />
      <Spinner2 />
      <Spinner3 />
    </Spinner>
  );
}

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
`;
const scale = keyframes` 
from 
{transform:scale(0.2)};

  to
  {transform:scale(1)}

`;
const spinnerSize = css`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${color.blue_500};
  border-radius: 50%;
  margin: 0.1rem;
  animation: ${scale} 0.5s linear 0s infinite alternate;
`;

const Spinner1 = styled.div`
  ${spinnerSize}
  animation-delay: 0s;
`;
const Spinner2 = styled.div`
  ${spinnerSize}
  animation-delay: 0.2s;
`;
const Spinner3 = styled.div`
  ${spinnerSize}
  animation-delay: 0.4s;
`;
