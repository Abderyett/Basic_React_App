import { SET_STORIES, SET_LOADING, ADD_TERM, REMOVE_ITEM } from './action';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        news: action.payload.news,
        page: action.payload.page,
        pagesNumber: action.payload.pagesNumber,
      };

    case ADD_TERM:
      return { ...state, term: action.payload };
    case REMOVE_ITEM:
      return { ...state, news: state.news.filter((el) => el.objectID !== action.payload) };
    default:
      return state;
  }
};
