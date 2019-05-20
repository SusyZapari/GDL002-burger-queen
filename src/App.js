import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from './Components/Home';
import Menu from './Components/Menu';




class App extends Component {
  render () { 
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/Home' component = {Home} />
        <Route path='/Menu' component={Menu} />

      </Switch>
      </BrowserRouter>
      
    );
  }
}
 
 

export default App;