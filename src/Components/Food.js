import React, {Component, useState} from 'react';
import {breakfast} from "./menu.json";
const Food = () => {
    const [breakfast, setBreakfast] = useState(['breakfast', 'adsd', 'dasd']);

  return (
    <div>
      <p>You clicked {breakfast} times</p>
      <button onClick={() => setBreakfast(breakfast + 'hamburguesa --- ')}>
        Click me
      </button>
    </div>
  );
}

// class Food extends Component {
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