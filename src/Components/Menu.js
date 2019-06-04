import React, { Component } from 'react';
import Food from "./Food";
import menu from "./menu.json";
import logo from "../Images/logo.png";
import { Button, Container, Row, Col, Jumbotron, ListGroup, ListGroupItem} from 'reactstrap';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      selectedMealTime: " ",
      foodList: [],
      orders: [],
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
    
    newOrder.push(this.state.foodList[clickedIndex].description);
    
    this.setState({
      total: newTotal,
      orders: newOrder
    });
  };

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
                          this.state.orders.map(order =>{
                            return <ListGroupItem>{order}</ListGroupItem>
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
