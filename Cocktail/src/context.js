import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const singleDrink = (id) => {
    const newDrink = cocktails.find((el) => el.idDrink === id);
    console.log(newDrink);
    setDrink(newDrink);
  };

  console.log(cocktails);
  // Fetch Data from API
  const fetchDrink = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);

      const { drinks } = response.data;
      if (drinks) {
        setLoading(false);
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter Fetched data
  const filtredCocktail = () => {
    const newCocktail = cocktails.filter((el) => el.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));
    if (searchTerm.length > 0) {
      setCocktails(newCocktail);
    } else {
      fetchDrink();
    }
  };

  useEffect(() => {
    fetchDrink();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ cocktails, loading, singleDrink, drink, setSearchTerm, filtredCocktail }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
