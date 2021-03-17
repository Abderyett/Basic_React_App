import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cocktail from './pages/Cocktail';
import Error from './pages/Error';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cocktail/:id" component={Cocktail} />
        <Route exact path="*" component={Error} />
      </Switch>
    </Router>
  </>
);

export default App;
