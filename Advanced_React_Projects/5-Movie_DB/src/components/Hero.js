import React from 'react';
import styled from 'styled-components';
import img from '../images/Hero_image.jpg';
import { color } from '../utilities';

function Hero() {
  return (
    <StyledHero>
      <TextHero>
        <h1>Welcome.</h1>
        <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
      </TextHero>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  width: 100vw;
  max-width: 1400px;
  height: 40vh;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  filter: opacity(80%);
  @media screen and (min-width: 1400px) {
    width: 85vw;
    margin: 0 auto;
  } ;
`;
const TextHero = styled.div`
  z-index: 3;
  padding: 4rem;
  color: ${color.white};
  padding-top: 10rem;
  line-height: 4rem;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2.5rem;
  }
`;

export default Hero;
