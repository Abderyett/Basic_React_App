import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SvgLink } from './svg';
import { color } from '../utilities';

function MovieDetails({ homepage, budget, status, language, companies }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <StyledArticle>
      <h4>Status</h4>
      <p> {status}</p>
      <h4>Original Language</h4>
      <p>{language && language[0].name}</p>
      <h4>Budget</h4>
      <p> {budget === 0 ? '-' : formatter.format(budget)}</p>

      <a href={homepage} target="_blank" rel="noreferrer" title="Homepage">
        <h4>Homepage</h4> <SvgLink />
      </a>
      <h4>Produced by:</h4>
      {companies && companies[0].logo_path === null ? (
        <p>{companies[0].name} </p>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500${companies && companies[0].logo_path}`}
          alt={companies && companies[0].name}
        />
      )}
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  margin-top: 3.5rem;
  margin-left: 10rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
  }

  h4 {
    font-size: 1.75rem;
    color: ${color.grey_800};
    padding-bottom: 0.5rem;
  }
  p {
    font-size: 1.25rem;
    color: ${color.grey_700};
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
    font-size: 1.25rem;
    color: ${color.grey_700};
  }
  img {
    width: 100px;

    margin-top: 2rem;
  }
`;

MovieDetails.propTypes = {
  homepage: PropTypes.string,
  budget: PropTypes.number,
  status: PropTypes.string,
  language: PropTypes.array,
  companies: PropTypes.array,
};
export default MovieDetails;
