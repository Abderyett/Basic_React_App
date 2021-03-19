import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState([[]]);
  const [loading, setLoading] = useState(false);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(10);

  console.log(first);
  console.log(second);

  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
  const fetchUser = async () => {
    const { data } = await axios.get(url);
    setLoading(true);
    if (data) {
      setPeople(data);
      setLoading(false);
    } else {
      setPeople([]);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AppContext.Provider value={{ people, loading, setFirst, setSecond, first, second }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = PropTypes.element.isRequired;

export { AppProvider, AppContext };

export const useGlobalContext = () => useContext(AppContext);
