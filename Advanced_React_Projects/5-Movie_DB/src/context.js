import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [term, setTerm] = useState('');
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`;

  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${term}&page=${pages}`;

  const endPoint = term ? searchUrl : popularMoviesUrl;
  // Fetch Movies

  const fetchMovie = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(endPoint);
      console.log(data);
      setTotalPages(data.total_pages);
      if (!term) {
        setMovies(data.results);
        setPages(1);
      } else if (!term && pages === 1) {
        setMovies(data.results);
      } else if (!term && pages > 1) {
        setMovies((oldMovies) => [...oldMovies, ...data.results]);
      } else if (term && pages === 1) {
        setMovies(data.results);
      } else if (!term && pages > 1) {
        setMovies((oldMovies) => [...oldMovies, ...data.results]);
      }
      setLoading(false);
    } catch (error) {
      console.log('Oh No There is An Error', error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [pages, term]);

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        totalPages,
        term,
        setTerm,
        pages,
        setPages,
        loading,
        setLoading,
        fetchMovie,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

AppProvider.propTypes = PropTypes.element.isRequired;

export const useGlobalContext = () => useContext(AppContext);
