import React from 'react';
import { useGlobalContext } from './context';
import { CardList, Loading, Navbar } from './components';

export function SearchedMovies() {
  const { loading, pages } = useGlobalContext();
  return (
    <>
      <Navbar />
      {loading && pages === 1 ? <Loading /> : <CardList />}
    </>
  );
}
