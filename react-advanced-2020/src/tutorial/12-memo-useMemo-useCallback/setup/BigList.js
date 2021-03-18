import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SingleProduct from './SingleProduct';

const BigList = ({ products, addToCart }) => {
  console.log('render from BigList');
  useEffect(() => console.log('rendered from bigList'), []);
  return (
    <section className="products">
      {products.map((product) => (
        <SingleProduct key={product.id} {...product} addToCart={addToCart} />
      ))}
    </section>
  );
};

BigList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
};

export default BigList;
