import React, { useState } from 'react';
import data from './data';
import Menu from './Menu';

const Categories = () => {
  const [menu, setMenu] = useState(data);
  const categories = ['all', 'breakfast', 'lunch', 'shakes'];

  const filter = (categorie) => {
    if (categorie === 'all') {
      return setMenu(data);
    }
    const newCategorie = data.filter((el) => el.category === categorie);

    return setMenu(newCategorie);
  };

  return (
    <>
      <div className="btn-container">
        {categories.map((categorie, index) => (
          <>
            <button type="button" className="filter-btn" key={index} onClick={() => filter(categorie)}>
              {categorie}
            </button>
          </>
        ))}
      </div>
      <Menu menu={menu} />
    </>
  );
};

export default Categories;
