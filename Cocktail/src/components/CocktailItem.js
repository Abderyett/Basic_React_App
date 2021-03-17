import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function CocktailItem() {
  const { cocktails, singleDrink } = useGlobalContext();

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
              <h3>{strDrink}</h3>
              <h4>{strGlass}</h4>
              <p>{strAlcoholic}</p>
              <button type="button" className="btn" onClick={() => singleDrink(idDrink)}>
                <Link to={`/cocktail/${idDrink}`}>Details</Link>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default CocktailItem;
