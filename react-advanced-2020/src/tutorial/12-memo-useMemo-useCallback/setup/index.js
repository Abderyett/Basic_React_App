import React, { useState, useEffect, useCallback, useMemo } from 'react';
import BigList from './BigList';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
  console.log('render from the index');
  return (
    <>
      <h1>Count : {count}</h1>
      <h1>Cart : {cart}</h1>

      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

export default Index;
