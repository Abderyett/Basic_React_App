import React, { useState, useEffect, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { reducer } from './reducer';
import { ADD_ITEM, SET_LOADING } from './action';

const initialState = {
  isLoading: false,
  news: [],
  remove: [],
  term: '',
  pages_number: 0,
  page: 1,
};
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://hn.algolia.com/api/v1/search?query=${state.term}`;

  const fetchData = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: ADD_ITEM, payload: data.hits });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
export const useGlobalContext = () => useContext(AppContext);
AppProvider.propTypes = PropTypes.element.isRequired;
