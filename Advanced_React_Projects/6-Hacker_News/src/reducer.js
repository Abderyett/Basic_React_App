import { ADD_ITEM, SET_LOADING } from './action';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, news: [...action.payload] };
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
