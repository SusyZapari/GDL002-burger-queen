import React, { Component } from 'react';
import Food from "./Food";
import menu from "./menu.json";
import logo from "../Images/logo.png";
import { Button, Container, Row, Col, Jumbotron, ListGroup, ListGroupItem, Badge} from 'reactstrap';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      selectedMealTime: " ",
      foodList: [],
      orders: [],
      orderPrices: [],
      total: 0
    }
 }

  selectBreakfast = () => {
    this.setState(
      { 
        selectedMealTime: "Desayuno" ,
        foodList: menu.breakfast,
        orders: [],
        total: 0
      }
    );
  }

  selectLunch= () => {
    this.setState(
      {
        selectedMealTime: "Comida" ,
        foodList: menu.lunch,
        orders: [],
        total: 0
      }
    );
  }

  handleFoodClick = clickedIndex => {
    const newTotal = this.state.total + this.state.foodList[clickedIndex].price;
    let newOrder =  this.state.orders;
    let newOrderPrices =  this.state.orderPrices;
    
    newOrder.push(this.state.foodList[clickedIndex].description + " $" + this.state.foodList[clickedIndex].price);
    newOrderPrices.push(this.state.foodList[clickedIndex].price);
    
    this.setState({
      total: newTotal,
      orders: newOrder,
      orderPrices: newOrderPrices
    });
  };

  deleteFood = clickedIndex => {
    const newTotal = this.state.total - this.state.orderPrices[clickedIndex];

    let updatedOrders = this.state.orders.filter(
      function(value, index, arr){
        return index !== clickedIndex
      });


    let updatedOrderPrices = this.state.orderPrices.filter(
      function(value, index, arr){
        return index !== clickedIndex
      });

    this.setState({
      total: newTotal,
      orders: updatedOrders,
      orderPrices: updatedOrderPrices
    });
  }

  render(){
    
    return (
      <div>
          <Container fluid>
            <Row>
              <Col xs="8">
                <Jumbotron >
                  <Row>
                    <Col xs="4"><Button color="danger" onClick={this.selectBreakfast}>DESAYUNO</Button></Col>
                    <Col xs="4"><img src={logo} alt="logo"/></Col>
                    <Col xs="4"><Button color="warning" onClick={this.selectLunch}>COMIDA</Button></Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Food title={this.state.selectedMealTime}
                          foodList={this.state.foodList}
                          handleFoodClick={this.handleFoodClick}>
                    </Food> 
                  </Row>
                </Jumbotron>
              </Col>
              <Col xs="4">
                <Jumbotron>
                    <Row><Col><h2>Comanda</h2></Col></Row>
                    <Row>
                        <ListGroup>
                        {
                          this.state.orders.map((order, index)  =>{
                            return <ListGroupItem>{order} <Badge color="danger" onClick={() => {this.deleteFood(index)}}>X</Badge> </ListGroupItem>
                          })
                        }
                        </ListGroup>
                    </Row>
                    <Row><Col>Total: ${this.state.total}</Col></Row>
                  </Jumbotron>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Menu;
