import React from 'react';
import { useGlobalContext } from '../context';

function Searchbox() {
  const { setSearchTerm, filtredCocktail } = useGlobalContext();
  const searchHandler = (e) => {
    e.preventDefault();
    filtredCocktail();
  };
  return (
    <div className="searchbox-container">
      <form className="search-center" onSubmit={searchHandler}>
        <h2>Search your favorite cocktail</h2>
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
    </div>
  );
}

export default Searchbox;
