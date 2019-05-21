import React, {Component} from 'react';
import {meal} from "./menu.json";


class Lunch extends Component {
    constructor() {
        super();
        this.state = {
            meal
        }
    }

    render(){
        const Lunch = this.state.Lunch.map ((LunchObject, i) =>{
            return (
            
        
                <button className="btn btn-warning" type="button" name={i} onClick={this.onClick}> {mealObject.description}{mealObject.price} {mealObject.image} </button>
            )
        })

        
        return (
<div>
    {Lunch}
</div>

        
        );
    }
}

export default Lunch;