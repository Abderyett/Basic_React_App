import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tour = ({ tour, removeItem }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, image, info, name, price } = tour;

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price"> $ {price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button type="button" onClick={() => setReadMore(!readMore)}>
              {readMore ? 'read less' : 'read more'}
            </button>
          </p>
          <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
            Not Intrested
          </button>
        </footer>
      </article>
    </>
  );
};

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
  removeItem: PropTypes.func,
};

export default Tour;
