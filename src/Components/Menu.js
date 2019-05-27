import React, { Component } from 'react';
import Food from "./Food";
import menu from "./menu.json";
import { Button, Container, Row, Col, Jumbotron} from 'reactstrap';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      selectedMealTime: " ",
      foodList: [],
      total: 0
    }
 }

  selectBreakfast = () => {
    this.setState(
      { 
        selectedMealTime: "Desayuno" ,
        foodList: menu.breakfast
      }
    );
  }

  selectLunch= () => {
    this.setState(
      {
        selectedMealTime: "Comida" ,
        foodList: menu.lunch
      }
    );
  }

  handleFoodClick = clickedIndex => {
    const newTotal = this.state.total + this.state.foodList[clickedIndex].price;
    this.setState({
      total: newTotal
    });
  };

  render(){
    
    return (
      <Container>
        <Row>
          <Col><Button color="danger" onClick={this.selectBreakfast}>DESAYUNO</Button></Col>
          <Col><Button color="warning" onClick={this.selectLunch}>COMIDA</Button></Col>
        </Row>
        <hr/>

        <Row>
          <Food title={this.state.selectedMealTime}
                foodList={this.state.foodList}
                handleFoodClick={this.handleFoodClick}>
          </Food> 
        </Row>
        <Row>
        <Jumbotron fluid>
        <Container fluid>
          <Row><Col><h2>Comanda</h2></Col></Row>
          <Row>
            <Col>Total: ${this.state.total}</Col>
          </Row>
          </Container>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
}

export default Menu;
