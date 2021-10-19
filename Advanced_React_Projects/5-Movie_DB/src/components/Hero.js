import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import img from '../images/Hero_image.jpg';
import { color } from '../utilities';
import { useGlobalContext } from '../context';

export function Hero() {
  const { heroImg } = useGlobalContext();
  const imgUrl = `http://image.tmdb.org/t/p/w1280${heroImg}`;
  return (
    <StyledHero img={imgUrl}>
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
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.65) 100%), url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 100%, cover;
  background-position: center, center;

  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
