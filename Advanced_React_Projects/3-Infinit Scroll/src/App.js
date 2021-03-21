import React from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import { color } from './utilities';

const App = () => (
  <AppWrapper>
    <Input />
  </AppWrapper>
);

const AppWrapper = styled.div`
  width: 85vw;
  height: 100vh;
  margin: 0 auto;
  /* background: ${color.blue_200}; */
`;
export default App;
