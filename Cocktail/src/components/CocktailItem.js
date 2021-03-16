import React from 'react';
import { useGlobalContext } from '../context';

function CocktailItem() {
  const { cocktails } = useGlobalContext();
  return (
    <div className="cocktail-container">
      {cocktails.map((cocktail) => {
        const { strDrinkThumb, idDrink, strDrink, strGlass, strAlcoholic } = cocktail;

        return (
          <article className="card" key={idDrink}>
            <div className="img-container">
              <img src={strDrinkThumb} alt={strGlass} />
            </div>
            <div className="cocktail-footer">
              <h3>{strGlass}</h3>
              <h4>{strDrink}</h4>
              <p>{strAlcoholic}</p>
              <button type="button"> Details</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default CocktailItem;
