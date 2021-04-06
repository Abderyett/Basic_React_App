import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './Global';
import Home from './Home';
import { Error, SingleMovie } from './components';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" exact component={SingleMovie} />
        <Route path="*" exact component={Error} />
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
