import React from 'react';
import CardList from './CardList';
import { useGlobalContext } from './context';

const App = () => {
  const { people } = useGlobalContext();

  return <CardList />;
};

export default App;
