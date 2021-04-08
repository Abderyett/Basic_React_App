import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from '../images/Hero_image.jpg';
import { color } from '../utilities';

export function Hero() {
  return (
    <StyledHero>
      <TextHero initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  filter: sepia(90%) hue-rotate(170deg) saturate(190%);
  @media screen and (min-width: 1400px) {
    width: 85vw;
    margin: 0 auto;
    padding: 4rem;
  } ;
`;
const TextHero = styled(motion.div)`
  z-index: 3;

  padding: 3rem;
  color: ${color.white};

  line-height: 4rem;
  letter-spacing: 0.125rem;
  h1 {
    font-size: 4.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  h2 {
    font-size: 3.2rem;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    h2 {
      font-size: 2rem;
      font-weight: 300;
    }
  }
`;
