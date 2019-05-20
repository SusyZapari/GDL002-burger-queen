import React, { Component } from 'react';
import Food from "./Food";

class Menu extends Component {
  render(){
    return (
      
      <div className= "backgroundMenu"> 
       <div className= "menu">
     <div className= "breakfast">
     <h2 className= "breakfastTitle">DESAYUNO</h2>
       <Food/>
       </div>
     </div>
      </div>
    );
  }
}

  export default Menu;

//   constructor(props){
//       super(props);
//       this.state = {
//          orders:[]
//       }
//        this.submit = this.submit.bind(this);
// }
// submit(nameItem, price){
//   const orders = this.state.orders;
//   const order = {
//     item: nameItem,
//     price: price
//   }
// // setState y spread operator
//   orders.push(order);
//   console.log(this.state.orders); 
//   }
  
  
//     render(){ 
//         return (
//           <div>
//               {breakfast.map((items, index) =>
//               <div key={index}>
//                   <h5>{items.description}</h5>
//                   <h5>{items.price}</h5>
                    
                       
//                        <button size="small" type="submit" onClick={()=>{this.submit(items.description ,items.price);}}>Add+</button>
                    
//               </div>
//  )}  
//           </div>
// )
// }
// }
