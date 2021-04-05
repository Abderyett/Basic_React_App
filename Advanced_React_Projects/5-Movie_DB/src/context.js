import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [term, setTerm] = useState('');
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${term}&page=${pages}`;

  // Fetch Movies

  const fetchMovie = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(term === '' ? movieUrl : searchUrl);
      console.log(data);
      if (pages === 1) {
        setMovies(data.results);
      } else {
        setMovies((oldMovies) => [...oldMovies, ...data.results]);
      }
      setLoading(false);
    } catch (error) {
      console.log('Oh No There is An Error', error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [pages]);

  return (
    <AppContext.Provider
      value={{ movies, setMovies, term, setTerm, pages, setPages, loading, fetchMovie, showModal, setShowModal }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

AppProvider.propTypes = PropTypes.element.isRequired;

export const useGlobalContext = () => useContext(AppContext);
