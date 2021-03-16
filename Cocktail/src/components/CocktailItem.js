import React from 'react';

function CocktailItem() {
  return (
    <div className="cocktail-container">
      <article className="card">
        <div className="img-container">
          <img src="https://source.unsplash.com/collection/190727/800x600?1" alt="food" />
        </div>
        <div className="cocktail-footer">
          <h3>Adam</h3>
          <h4>Cocktail galss</h4>
          <p>Alcoholic</p>
          <button type="button"> Details</button>
        </div>
      </article>
    </div>
  );
}

export default CocktailItem;
