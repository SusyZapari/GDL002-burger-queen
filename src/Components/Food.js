import React, {Component} from 'react';
import {breakfast} from "./menu.json";


class Food extends Component {
    constructor() {
        super();
        this.state = {
            breakfast
        }
    }

    render(){
        const breakfast = this.state.breakfast.map ((breakfastObject, i) =>{
            return (
            
        
                <button className="btn btn-info" type="button" name={i} onClick={this.onClick}> {breakfastObject.description}{breakfastObject.price} </button>
            )
        })

        
        return (
<div>
    {breakfast}
</div>

        
        );
    }
}

export default Food;