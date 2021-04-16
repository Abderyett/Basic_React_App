import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import CardLsit from './components/CardList';
import Pages from './components/Pages';
import { GlobalStyle } from './Global';
import { color } from './utilities';
import { useGlobalContext } from './context';
import { Loading } from './components/Loading';

const App = () => {
  const { isLoading } = useGlobalContext();
  return (
    <Wrapper>
      <h1>Search Haker News</h1>
      <Search />
      <Pages />
      {isLoading ? <Loading /> : <CardLsit />}
      <GlobalStyle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10rem auto;

  width: 70vw;
  max-width: 1300px;
  height: 100vh;
  h1 {
    font-size: 4rem;
    color: ${color.grey_700};
    letter-spacing: 0.25rem;
    margin-bottom: 2rem;
  }
`;

export default App;
