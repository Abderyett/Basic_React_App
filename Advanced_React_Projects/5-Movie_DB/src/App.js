import React from 'react';
import { GlobalStyle } from './Global';
import { Navbar, Hero, CardList } from './components';

const App = () => (
  <>
    <Navbar />
    <Hero />
    <CardList />
    <GlobalStyle />
  </>
);

export default App;
