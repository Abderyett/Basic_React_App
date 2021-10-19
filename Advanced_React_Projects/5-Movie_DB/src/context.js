import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [term, setTerm] = useState('');
  const [pages, setPages] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [heroImg, setHeroImg] = useState('');

  const popularMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}`;

  const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${term}&page=${pages}`;

  const endPoint = term.length > 0 ? searchMovie : popularMovies;
  // Fetch Movies

  const fetchMovie = _.debounce(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(endPoint);

      setTotalPages(data.total_pages);

      setMovies((prevState) => (pages > 1 ? [...prevState, ...data.results] : [...data.results]));
      setHeroImg(data.results[0].backdrop_path);

      setLoading(false);
    } catch (error) {
      console.log('Oh No There is An Error', error);
    }
  }, 500);
  useEffect(() => {
    if (term.length === 0) {
      fetchMovie();
    } else if (term.length > 1 && pages > 1) {
      fetchMovie();
    } else {
      setMovies([]);
      setPages(1);
      fetchMovie();
    }
  }, [pages, term]);

  useEffect(() => {
    localStorage.setItem('moviesList', JSON.stringify(movies));
  }, [movies]);

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
        searchedMovies,
        setSearchedMovies,
        heroImg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

AppProvider.propTypes = PropTypes.element.isRequired;

export const useGlobalContext = () => useContext(AppContext);
