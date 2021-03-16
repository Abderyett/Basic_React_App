import React from 'react';
import CocktailItem from './CocktailItem';
import { useGlobalContext } from '../context';
import Loading from './Loading';

function CocktailList() {
  const { loading } = useGlobalContext();
  return (
    <section className="hero">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>Cocktails</h2>
          <CocktailItem />
        </>
      )}
    </section>
  );
}

export default CocktailList;
