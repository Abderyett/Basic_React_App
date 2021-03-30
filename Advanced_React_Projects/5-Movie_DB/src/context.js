import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [term, setTerm] = useState('');
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);

  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=ba38b88f8bfb9a65a0576301fdade214&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  const fetchMovie = async () => {
    try {
      const { data } = await axios.get(movieUrl);
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.log('Oh No There is An Error', error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log('Movies', movies);

  return (
    <AppContext.Provider value={{ movies, setMovies, term, setTerm, pages, setPages }}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };

AppProvider.propTypes = PropTypes.element.isRequired;

export const useGlobalContext = () => useContext(AppContext);
