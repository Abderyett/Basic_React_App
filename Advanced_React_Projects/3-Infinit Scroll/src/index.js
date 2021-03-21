import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './contex';
import { GlobalStyle } from './Global';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <GlobalStyle />
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
