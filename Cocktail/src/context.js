import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const fetchDrink = async () => {
    const { data } = await axios.get(url);
    setDrinks(data);
  };
  useEffect(() => {
    fetchDrink();
  }, []);

  return <AppContext.Provider value={drinks}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
