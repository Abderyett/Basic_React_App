import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h2>{title}</h2>

    <button type="submit" onClick={(e) => console.log(e.target)}>
      Click Me!
    </button>
  </div>
);

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
