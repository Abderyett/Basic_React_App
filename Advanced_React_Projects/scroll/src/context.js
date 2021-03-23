/* eslint-disable camelcase */
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AppContext = React.createContext();
function AppProvider({ children }) {
  const [active, setActive] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [searchTerm, SetSearchTerm] = useState('office');
  const [pages, setPages] = useState(1);

  const fetchData = async (term) => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?page=${pages}&query=${term}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );

      if (data) {
        setPhotos((oldPhotos) => [...oldPhotos, ...data.results]);
      } else {
        setPhotos([]);
      }
    } catch (error) {
      console.log('Oh there is an Error', error);
    }
  };
  useEffect(() => {
    fetchData(searchTerm);
  }, [pages]);

  return (
    <AppContext.Provider value={{ active, setActive, photos, SetSearchTerm, searchTerm, fetchData, pages, setPages }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = PropTypes.element.isRequired;
export { AppProvider, AppContext };
export const useGlobalContext = () => useContext(AppContext);
