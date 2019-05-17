import React from 'react';

class MealTime extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            mealName:"",

        }
    }
    render(){
        return (
            <button type="button" class="btn btn-secondary">{this.props.mealName}</button>
        );
    }
}

export default MealTime;