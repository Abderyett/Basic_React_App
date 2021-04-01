import React from 'react';
import { GlobalStyle } from './Global';
import { Navbar, Hero, CardList, Loading } from './components';
import { useGlobalContext } from './context';

const App = () => {
  const { loading, pages, term } = useGlobalContext();
  return (
    <>
      <Navbar />
      {!term && <Hero />}

      {loading && pages === 1 ? <Loading /> : <CardList />}
      <GlobalStyle />
    </>
  );
};

export default App;
