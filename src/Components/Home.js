import React, {Component} from "react";
import logo from "../Images/logo.png";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Home extends Component {
    render () {
        return (
        <div className= "backgroundHome">
        <img className= "logo" src={logo} alt="logo"/>
        
        <button type= "button" className="btn btn-dark" > CAJA </button>
        <button type= "button" className="btn btn-danger" > <Link to="/menu">jiji</Link> </button>

        </div>
        );
    }
}


//Prueba//
//Prueba 2//

export default Home;