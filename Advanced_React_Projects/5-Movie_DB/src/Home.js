import React from 'react';
import { useGlobalContext } from './context';
import { Hero, CardList, Loading } from './components';

function Home() {
  const { loading, pages, term } = useGlobalContext();
  return (
    <>
      {!term && <Hero />}

      {loading && pages === 1 ? <Loading /> : <CardList />}
    </>
  );
}

export default Home;
