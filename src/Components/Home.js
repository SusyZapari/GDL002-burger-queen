import React, {Component} from "react";
import BQ from "../Images/BQ.jpg";
import { Container, Row, Button, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const Home = () => (
    <div className= "backgroundHome">
        <img className= "restaurantPhoto" src={BQ} alt="logo"/>
    </div>
);
// class Home extends Component {
//     render () {
//         return (
//         <div className= "backgroundHome">
//         <img className= "logo" src={logo} alt="logo"/>
        
//         <button type= "button" className="btn btn-dark" > CAJA </button>
//         <button type= "button" className="btn btn-danger" > <Link to="/menu">COCINA </Link> </button>

//         </div>
//         );
//     }
// }

export default Home;