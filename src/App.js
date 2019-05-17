import React from 'react';
import Food from './Food';
import MealTime from './MealTime';
import PaniniImage from './paniniSelvaNegra.jpeg';
import './App.css';

function App() {
 return (
 <div>
    <div>
      <MealTime mealName="Desayuno"/>
      <MealTime mealName="Comida"/>
    </div>
    <div>
      <Food name="Panini selva negra" price ="75" image ={PaniniImage}/>
      <Food name="Panini de panela" price ="65"/>
      <Food name="Panini portobello" price ="80"/>
      <Food name="Panini lomo canadiense" price ="60"/>
      <Food name="Panini de salmón" price ="85"/>
      <Food name="Panini de atún" price ="70"/>
      <Food name="Panini de pollo" price ="75"/>
    </div>
  </div>
 );
}

export default App;