import React, { useEffect, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { reducer } from './reducer';
import { SET_STORIES, SET_LOADING, ADD_TERM, REMOVE_ITEM, HANDLE_PAGE } from './action';

const initialState = {
  isLoading: false,
  news: [],
  remove: [],
  term: 'React',
  pagesNumber: 0,
  page: 0,
};
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const url = `https://hn.algolia.com/api/v1/search?query=${state.term}&page=${state.page}`;

  const fetchData = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(url);

      dispatch({ type: SET_STORIES, payload: { news: data.hits, page: data.page, pagesNumber: data.nbPages } });
    } catch (error) {
      console.log(error);
    }
  };

  const searchTerm = (term) => {
    dispatch({ type: ADD_TERM, payload: term });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchData();
  }, [state.page]);

  return (
    <AppContext.Provider value={{ ...state, searchTerm, fetchData, removeItem, handlePage }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
export const useGlobalContext = () => useContext(AppContext);
AppProvider.propTypes = PropTypes.element.isRequired;
