import React, {Component} from 'react';
import {lunch} from "./menu.json";


class Lunch extends Component {
    constructor() {
        super();
        this.state = {
            lunch
        }
    }

    render(){
        const lunch = this.state.lunch.map ((lunchObject, i) =>{
            return (
            
        
                <button className="btn btn-warning" type="button" key={i} name={lunchOnject.description} value={lunchObject}onClick={this.onClick}> {lunchObject.description}{lunchObject.price} {lunchObject.image} </button>
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