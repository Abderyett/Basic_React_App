import React, { useReducer, useEffect } from 'react';
import CartContainer from './CartContainer';
import Navbar from './Navbar';
import { StateContext, DispatchContext } from './context';
import items from './data';
import { reducer } from './reducer';

const initialState = {
  items,
  isLoading: false,
  amount: 0,
  total: 0,
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'ITEM_CHANGE' });
  }, [state.items]);

  return (
    <StateContext.Provider value={{ ...state }}>
      <DispatchContext.Provider value={dispatch}>
        <main>
          <Navbar />
          <CartContainer />
        </main>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
