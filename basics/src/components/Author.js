import React from 'react';
import PropTypes from 'prop-types';

const Author = ({ author }) => {
  const logAuthor = (name) => {
    console.log(name);
  };
  return (
    <div>
      <p>{author}</p>
      <button type="button" onClick={() => logAuthor(author)}>
        Submit
      </button>
    </div>
  );
};

Author.propTypes = {
  author: PropTypes.string,
};
export default Author;
