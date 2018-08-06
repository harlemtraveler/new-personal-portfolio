import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Ouch404 from './components/Ouch404';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Ouch404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
