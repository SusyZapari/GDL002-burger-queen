import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home';
import Menu from './Components/Menu';




class App extends Component {
  render () { 
    return (
      
      <nav>
    <ul className="flex-row">
      <BrowserRouter>
      <Switch>
      <Route exact path = '/' component = {Home} />
      <Route path = '/home' component = {Home} />
      <Route path='/menu' component={Menu} />

      </Switch>
      </BrowserRouter>
      </ul></nav>
      
      
    );
  }
}
 
 

export default App;