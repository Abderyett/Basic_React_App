export const reducer = (state, action) => {
  const incre = state.items.map((item) => {
    if (item.id === action.payload) {
      return { ...item, amount: item.amount + 1 };
    }
    return item;
  });
  const decre = state.items
    .map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }

      return item;
    })
    .filter((item) => item.amount !== 0);
  switch (action.type) {
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((el) => el.id !== action.payload) };

    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'INCREMENT':
      return { ...state, items: incre };
    case 'DECREMENT':
      return { ...state, items: decre };

    default:
      return state;
  }
};
