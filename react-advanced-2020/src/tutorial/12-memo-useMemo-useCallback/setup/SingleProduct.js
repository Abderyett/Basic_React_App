import React from 'react';
import PropTypes from 'prop-types';

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price /= 100;
  const image = fields.image[0].url;
  console.log('render from singleProduct');
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button type="button" className="btn" onClick={addToCart}>
        Add To Cart
      </button>
    </article>
  );
};

SingleProduct.propTypes = {
  fields: PropTypes.object.isRequired,
  addToCart: PropTypes.func,
};

export default SingleProduct;
