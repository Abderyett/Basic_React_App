import React from 'react';
import PropTypes from 'prop-types';
import Tour from './Tour';

const Tours = ({ tours, removeItem }) => (
  <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline" />
    </div>
    <div>
      {tours.map((tour) => (
        <Tour tour={tour} removeItem={removeItem} key={tour.id} />
      ))}
    </div>
  </section>
);

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
  removeItem: PropTypes.func,
};

export default Tours;
