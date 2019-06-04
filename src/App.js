import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import {NavBarMenu} from './NavBarMenu';
import Home from './Components/Home';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBarMenu/>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/menu' component={Menu} />          
      </div>
      </Router>
    );
  }
}
export default App;