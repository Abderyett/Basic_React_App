import React, { useEffect } from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import CardList from './components/CradList';
import { useGlobalContext } from './context';

const App = () => {
  const { setPages } = useGlobalContext();

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, scrollY } = window;
      const { scrollHeight } = document.body;
      if (innerHeight + scrollY >= scrollHeight - 2) {
        setPages((prevState) => prevState + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <AppWrapper>
      <Input />
      <CardList />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 85vw;
  height: 95vh;
  margin: 0 auto;
`;
export default App;
