import React, {Component} from "react";
import logo from "../Images/logo.png";

class Home extends Component {
    render () {
        return (
        <div className= "backgroundHome">
        <img className= "logo" src={logo} alt="logo"/>
        
        <button type= "button" className="btn btn-dark" > CAJA </button>
        <button type= "button" className="btn btn-danger" > COCINA </button>

        </div>
        );
    }
}


//Prueba//
//Prueba 2//

export default Home;