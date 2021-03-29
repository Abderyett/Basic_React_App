import React from 'react';
import styled from 'styled-components';
import { color, rounded } from '../utilities';
import CircleSvg from './CircleSvg';

function Card() {
  return (
    <StyledCard>
      <img src="http://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="jsutice league" />

      <CardFooter>
        <CircleSvg />
        <h3>Justice League</h3>
        <h4>19 mars 2021</h4>
      </CardFooter>
    </StyledCard>
  );
}
const StyledCard = styled.article`
  width: 20rem;
  height: 40rem;
  border-radius: ${rounded.lg};
  padding-top: 3rem;
  img {
    width: 100%;
    border-radius: ${rounded.lg};
  }
`;
const CardFooter = styled.div`
  height: 79px;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 30px;
  left: 20px;
  h3 {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
  h4 {
    color: ${color.grey_500};
    font-size: 1rem;
    padding-top: 0.5rem;
  }
`;
export default Card;
