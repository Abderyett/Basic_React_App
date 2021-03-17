import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Cocktail() {
  const { drink } = useGlobalContext();
  const {
    strDrink,
    strCategory,
    strGlass,
    strInstructions,
    strAlcoholic,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
  } = drink;
  return (
    <>
      <div className="btn-container">
        <button type="button" className="btn ">
          <Link to="/">Back Home</Link>
        </button>
        <h1>{strDrink}</h1>
      </div>
      <section className="drink_conatiner">
        <div className="image">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="description">
          <h3>
            <span>Name: </span> {strDrink}
          </h3>
          <h3>
            <span>Category:</span> {strCategory}
          </h3>
          <h3>
            <span>Info:</span> {strAlcoholic}
          </h3>
          <h3>
            <span>Glass:</span>
            {strGlass}
          </h3>
          <h3>
            <span>Instructions:</span>
            {strInstructions}
          </h3>
          <h3>
            <span>Ingredients:</span>
            {strIngredient1} {strIngredient2} {strIngredient3}
          </h3>
        </div>
      </section>
    </>
  );
}

export default Cocktail;
