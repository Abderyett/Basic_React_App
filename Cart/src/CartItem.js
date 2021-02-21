import React, { useContext } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { StateContext, DispatchContext } from './context';

const CartItem = () => {
  const { items } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <>
      {items.map((item) => {
        const { id, title, price, img, amount } = item;
        return (
          <article key={id} className="cart-item">
            <img src={img} alt={title} />
            <div>
              <h4>{title}</h4>
              <h4 className="item-price">${price}</h4>
              <button
                type="button"
                className="remove-btn"
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
              >
                remove
              </button>
            </div>
            <div>
              <button
                type="button"
                className="amount-btn"
                onClick={() => {
                  dispatch({ type: 'INCREMENT', payload: id });
                }}
              >
                <FaChevronUp />
              </button>
              <p className="amount">{amount}</p>
              <button
                type="button"
                className="amount-btn"
                onClick={() => {
                  dispatch({ type: 'DECREMENT', payload: id });
                }}
              >
                <FaChevronDown />
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default CartItem;
