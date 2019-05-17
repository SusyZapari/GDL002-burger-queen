import React from 'react';

class Food extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
            <button className="btn btn-info" type="button">
                <img src={this.props.image}></img> {this.props.name}
            </button>
            </div>
        );
    }
}

export default Food;