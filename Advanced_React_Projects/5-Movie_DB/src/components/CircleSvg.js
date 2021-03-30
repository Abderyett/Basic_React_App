import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';

function CircleSvg() {
  return (
    <StyledSvg height={40} width={40} fill={`${color.blue_grey_900}`}>
      <circle
        r="17"
        cx="20"
        cy="20"
        stroke={`${color.cyan_500}`}
        strokeWidth="3"
        strokeDasharray="78"
        strokeDashoffset=""
        transform="rotate(-90, 20, 20)"
      />
      <text x="50%" y="50%" stroke="white" textAnchor="middle" strokeWidth="0.75px" dy=".3em">
        78 <tspan dy="-0.3rem">%</tspan>
      </text>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  text {
    stroke: white;
    fill: white;
    font-size: 1.125rem;
    tspan {
      font-size: 0.7rem;
      stroke-width: 0.25px;
    }
  }
`;

export default CircleSvg;
