/* eslint-disable no-fallthrough */
import { SET_STORIES, SET_LOADING, ADD_TERM, REMOVE_ITEM, HANDLE_PAGE } from './action';

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
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.pagesNumber - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.pagesNumber - 1;
        }
        return { ...state, page: prevPage };
      }
    default:
      return state;
  }
};
