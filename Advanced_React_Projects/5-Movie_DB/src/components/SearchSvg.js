import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';

function Icon() {
  return (
    <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  color: ${color.grey_600};
  height: 2.5rem;
  margin-left: 1rem;
  width: 20%;
  max-width: 31px;
`;

export default Icon;
