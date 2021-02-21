import React, { useContext } from 'react';
import { DispatchContext, StateContext } from './context';
import CartItem from './CartItem';

function CartContainer() {
  const dispatch = useContext(DispatchContext);
  const { items, total } = useContext(StateContext);
  return (
    <section className="cart">
      <header>
        <h2>your cart</h2>
      </header>
      {items.length === 0 ? (
        <h4 className="empty-cart">is currently empty</h4>
      ) : (
        <>
          <div>
            <CartItem />
          </div>

          <footer>
            <hr />
            <div className="cart-total">
              <h4>
                total
                <span>${total}</span>
              </h4>
            </div>
            <button type="button" className="btn clear-btn" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
              clear cart
            </button>
          </footer>
        </>
      )}
    </section>
  );
}

export default CartContainer;
