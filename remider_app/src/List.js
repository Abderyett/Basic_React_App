import React from 'react';
import PropTypes from 'prop-types';

const List = ({ person }) => (
  <>
    {person.map((el) => {
      const { image, id, name, age } = el;
      return (
        <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </article>
      );
    })}
  </>
);

List.propTypes = PropTypes.array.isRequired;
export default List;
