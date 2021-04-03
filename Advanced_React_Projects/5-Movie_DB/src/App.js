import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './Global';
import Home from './Home';
import { Navbar, Error } from './components';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={Error} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
