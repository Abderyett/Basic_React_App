export const reducer = (state, action) => {
  let { amount, total } = state.items.reduce(
    (accu, currVal) => {
      accu.amount += currVal.amount;
      accu.total += currVal.amount * currVal.price;
      return accu;
    },
    { amount: 0, total: 0 }
  );
  total = parseFloat(total.toFixed(2));

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
    case 'ITEM_CHANGE':
      return { ...state, amount, total };

    default:
      return state;
  }
};
