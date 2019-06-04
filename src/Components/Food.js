import React, {Component, useState} from 'react';
import { Button, Container, Row, Col, Jumbotron, Badge} from 'reactstrap';

class Food extends Component {

 render(){
   
  return (
    <div>
      <Container>
        <Row><Col><h2>{this.props.title}</h2></Col></Row>
        <Row>

        {
          this.props.foodList.map((food, index) => {
            return <Col key={index}>
              <Button color="info" onClick={() => {this.props.handleFoodClick(index)}}>
                {food.description}
                <Badge color="danger" pill>${food.price}</Badge>
              </Button>
            </Col>
          })
        }
        </Row>
      </Container>
    </div>
  );
}
}

 //class Food extends Component {
//     constructor() {
//         super();
//         this.state = {
//             breakfast
//         }
//     }

//     render(){
        // const breakfast = this.state.breakfast.map ((breakfastObject, i) =>{
        //     return (
            
        
        //         <button className="btn btn-warning" 
        //         type="button" 
        //         name={i} onClick={this.onClick}> 
        //             <label>{breakfastObject.description}</label>
        //             <label>${breakfastObject.price}.00</label>
        //             <img src={breakfastObject.image} />
        //         </button>
        //     )
        // })

        
//         return (
// <div>
//     {breakfast}
// </div>

        
//         );
//     }
// }

export default Food;