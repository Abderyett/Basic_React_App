import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { GlobalStyle } from './Global';
import { useGlobalContext } from './context';
import { darkTheme, lightTheme } from './utilities/theme';

const App = () => {
  const { toggle } = useGlobalContext();
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <AppWrapper>
        <Navbar />
        <Text />
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  );
};

const AppWrapper = styled.div`
  width: 70vw;
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.background};
`;

export default App;
