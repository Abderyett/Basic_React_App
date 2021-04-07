import React from 'react';
import PropTypes from 'prop-types';
import { SvgLink } from './svg';

function MovieDetails({ homepage, budget, status, language, companies }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  console.log(language);

  return (
    <div>
      <h4>Status</h4>
      <p> {status}</p>
      <h4>Original Language</h4>
      <p>{language && language[0].name}</p>
      <h4>Budget</h4>
      <p> {budget === 0 ? '-' : formatter.format(budget)}</p>

      <a href={homepage} target="_blank" rel="noreferrer">
        <SvgLink />
      </a>
    </div>
  );
}

MovieDetails.propTypes = {
  homepage: PropTypes.string,
  budget: PropTypes.number,
  status: PropTypes.string,
  language: PropTypes.array,
  companies: PropTypes.array,
};
export default MovieDetails;
