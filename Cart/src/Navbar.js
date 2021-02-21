import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { StateContext } from './context';

const Navbar = () => {
  const { amount } = useContext(StateContext);
  return (
    <nav>
      <div className="nav-center">
        <h3>UseReducer</h3>
        <div className="nav-container" />
        <FaShoppingCart />
        <div className="amount-container">
          <p className="total-amount">{amount} </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
