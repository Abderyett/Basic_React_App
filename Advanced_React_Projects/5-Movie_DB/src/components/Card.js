import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { color, rounded, shadow } from '../utilities';
import { CircleSvg } from './svg';
import noimage from '../images/NoImage.jpg';

function Card({ movie }) {
  const { title, release_date: releaseDate, vote_average: voteAverage, backdrop_path: img } = movie;
  return (
    <StyledCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <img src={img === null ? noimage : `https://image.tmdb.org/t/p/w220_and_h330_face${img}`} alt={title} />

      <CardFooter>
        <CircleSvg voteAverage={voteAverage} />
        <h3>{title.substring(0, 30)}</h3>
        <h4>{!releaseDate ? 'No Release Date' : format(new Date(releaseDate), 'dd MMM yyyy')}</h4>
      </CardFooter>
    </StyledCard>
  );
}
const StyledCard = styled(motion.article)`
  width: 20rem;
  height: 42rem;
  border-radius: ${rounded.lg};
  padding-top: 3rem;

  img {
    width: 100%;
    border-radius: ${rounded.lg};
    box-shadow: ${shadow.lg};
    &:hover {
      cursor: pointer;
      filter: opacity(0.9);
    }
  }
`;
const CardFooter = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 30px;
  left: 20px;

  h3 {
    margin-top: 0.25rem;
    font-size: 1.5rem;
    color: ${color.blue_grey_800};
    font-weight: 400;
    font-family: 'Sans Regular';
  }
  h4 {
    color: ${color.grey_500};
    font-size: 1rem;
    padding-top: 0.5rem;
    letter-spacing: 0.125rem;
    line-height: 1.5rem;
  }
`;

Card.propTypes = PropTypes.object.isRequired;
export default Card;
