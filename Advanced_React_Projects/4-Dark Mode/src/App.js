import React from 'react';
import styled from 'styled-components';
import { color } from './utilities';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { GlobalStyle } from './Global';
import { useGlobalContext } from './context';

const App = () => {
  const { toggle } = useGlobalContext();
  return (
    <AppWrapper toggle={toggle}>
      <Navbar toggle={toggle} />
      <Text />
      <GlobalStyle toggle={toggle} />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 70vw;
  height: 100vh;
  margin: 0 auto;
  background: ${(toggle) => (toggle.toggle ? `${color.blue_900}` : `${color.white}`)};
`;

export default App;
