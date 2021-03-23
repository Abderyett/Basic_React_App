/* eslint-disable camelcase */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [active, setActive] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );

      if (data) {
        setPhotos(data.results);
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.log('Oh there is an Error', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <AppContext.Provider value={{ active, setActive, photos }}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppProvider, AppContext };
export const useGlobalContext = () => useContext(AppContext);
