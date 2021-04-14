import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, rounded, shadow } from '../utilities';
import { useGlobalContext } from '../context';

function Articles({ title, comments, points, url, id }) {
  const { removeItem } = useGlobalContext();
  return (
    <Card>
      <h2>{title}</h2>
      <h4>
        {points} points by Cogito | {comments} comments
      </h4>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <button
        type="button"
        onClick={() => {
          removeItem(id);
        }}
      >
        Remove
      </button>
    </Card>
  );
}

const Card = styled.article`
  width: 570px;

  background-color: ${color.white};
  border-radius: ${rounded.md};
  box-shadow: ${shadow.md};
  padding: 1rem 2rem;

  h2 {
    color: ${color.grey_700};
    padding-bottom: 1rem;
    font-size: 1.75rem;
  }
  h4 {
    color: ${color.grey_600};
    font-size: 1.5rem;
    padding-bottom: 1.25rem;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: ${color.red_vivid_600};
    font-size: 1.25rem;
    padding-right: 1rem;
    cursor: pointer;
  }
  button {
    color: ${color.blue_500};
    background-color: transparent;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 450px;
  }
`;
Articles.propTypes = {
  title: PropTypes.string,
  comments: PropTypes.number,
  points: PropTypes.number,
  url: PropTypes.string,
  id: PropTypes.string,
};
export default Articles;
