/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from 'styled-components';
import { color } from '../../utilities';

export function SvgLink() {
  return (
    <StyledSvg width={34} height={34} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#prefix__clip0)" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.91 16.206a5 5 0 004.709 5.913l4.239.176a5 5 0 00.414-9.99l-2.423-.107" />
        <path d="M19.09 17.794a5 5 0 00-4.709-5.913l-4.239-.176a5 5 0 00-.414 9.99l2.417.1" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="rotate(47.374 8.801 20.199)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  &:hover g {
    stroke: ${color.blue_500};
  }
`;
