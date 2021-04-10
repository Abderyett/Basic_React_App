import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color } from '../../utilities';

export function CircleSvg({ voteAverage }) {
  return (
    <StyledSvg height={40} width={40} fill={`${color.blue_grey_900}`}>
      <circle
        r="17"
        cx="20"
        cy="20"
        stroke={`${color.cyan_500}`}
        strokeWidth="3"
        strokeDasharray={voteAverage && 17 * 2 * Math.PI * (voteAverage / 10)}
        strokeLinecap="round"
        transform="rotate(-90, 20, 20)"
      />
      <text x="50%" y="50%" stroke="white" textAnchor="middle" strokeWidth="0.75px" dy=".3em">
        {voteAverage * 10}
        <tspan dy="-0.3rem">%</tspan>
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

CircleSvg.propTypes = PropTypes.number.isRequired;
