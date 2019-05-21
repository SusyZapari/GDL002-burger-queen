import React, { Component } from "react";
import Counter from "../Counter";

class Counter extends Component {
  render() {
    return (
      <div>
        <div> Artículo: {this.props.name}</div>
        <div> Precio: ${this.props.price}</div>
        <div> Cantidad: ${this.props.value}</div>

        <label>Subtotal:{this.props.value * this.props.price}</label>
      </div>
    );
  }
}

export default Counter;