import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import {NavBarMenu} from './NavBarMenu';
import Home from './Components/Home';
import Menu from './Components/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <NavBarMenu/>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/menu' component={Menu} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;