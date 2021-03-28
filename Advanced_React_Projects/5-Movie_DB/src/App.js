import React from 'react';
import Navbar from './components/Navbar';
import { GlobalStyle } from './Global';
import Hero from './components/Hero';

const App = () => (
  <>
    <Navbar />
    <Hero />
    <GlobalStyle />
  </>
);

export default App;
