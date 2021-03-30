import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, rounded } from '../utilities';
import CircleSvg from './CircleSvg';

function Card({ movie }) {
  const { title, release_date: releaseDate, vote_average: voteAverage, backdrop_path: img } = movie;
  return (
    <StyledCard>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${img}`} alt={title} />

      <CardFooter>
        <CircleSvg voteAverage={voteAverage} />
        <h3>{title}</h3>
        <h4>{releaseDate}</h4>
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
    &:hover {
      cursor: pointer;
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
