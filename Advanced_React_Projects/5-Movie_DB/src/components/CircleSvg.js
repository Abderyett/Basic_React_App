import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';

function CircleSvg() {
  return (
    <StyledSvg height={40} width={40} fill="black">
      <circle
        r="17"
        cx="20"
        cy="20"
        stroke={`${color.green_400}`}
        strokeWidth="3"
        strokeDasharray="78"
        strokeDashoffset=""
      />
      {/* <path
        d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333z"
        stroke={`${color.green_500}`}
        strokeWidth={3}
        strokeDasharray=""
        strokeDashoffset="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      /> */}
    </StyledSvg>
  );
}

const StyledSvg = styled.svg``;

export default CircleSvg;
