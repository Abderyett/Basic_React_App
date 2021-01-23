import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ img }) => (
  <div>
    <img src={img} alt="" />
  </div>
);

Image.propTypes = {
  img: PropTypes.string,
};
export default Image;
