import React, {Component} from "react";
import logo from "../Images/logo.png";

class Home extends Component {
    render () {
        return (
        <div className= "backgroundHome">
        <img className= "logo" src={logo} alt="logo"/>
        <button type= "button" className="caja"> CAJA </button>
        <button type= "button" className="cocina"> COCINA </button>

        </div>
        );
    }
}

export default Home 