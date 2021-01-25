import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ menu }) => (
  <div className="section-center">
    {menu.map((el) => {
      const { id, img, title, price, desc } = el;
      return (
        <article className="menu-item" key={id}>
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">{price}</h4>
            </header>
            <p className="item-text"> {desc}</p>
          </div>
        </article>
      );
    })}
  </div>
);
Menu.propTypes = PropTypes.array.isRequired;

export default Menu;
