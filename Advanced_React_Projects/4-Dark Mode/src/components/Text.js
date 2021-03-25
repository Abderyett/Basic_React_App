import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { color } from '../utilities';

function Text() {
  return (
    <Main>
      <div>
        <h1> The WET Codbase</h1>
        <p>
          <em>{format(new Date(2019, 11, 30), 'MMMMMM do y')} read 3 min</em>
        </p>
        <p> Come waste your time with me</p>
      </div>
      <div>
        <h1> Goodby, Clean Code</h1>
        <p>
          <em>{format(new Date(2018, 1, 4), 'MMMMMM do y')} read 11 min</em>
        </p>
        <p> Come waste your time with me</p>
      </div>
      <div>
        <h1> My Year In Review</h1>
        <p>
          <em>{format(new Date(2021, 2, 11), 'MMMMMM do y')} read 5 min</em>
        </p>
        <p> Come waste your time with me</p>
      </div>
      <div>
        <h1> What Are The React Team Principles</h1>
        <p>
          <em>{format(new Date(2017, 4, 16), 'MMMMMM do y')} read 9 min</em>
        </p>
        <p> Come waste your time with me</p>
      </div>
    </Main>
  );
}

const Main = styled.main`
  padding: 2rem;
  margin-top: 10rem;
  div {
    margin-bottom: 5rem;
    font-size: 1.5rem;
  }
  h1 {
    color: ${color.pink_500};
    margin-bottom: 1rem;
  }
  div :nth-child(2n) {
    color: ${color.grey_500};
    margin-bottom: 1rem;
  }
  div p:last-child {
    color: ${color.grey_700};
  }
`;

export default Text;
