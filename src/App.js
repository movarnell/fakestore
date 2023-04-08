import React, { useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import StoreFront from './Components/StoreFront';



export default function App() {
const [cartTotal, setCartTotal] = useState(0);
const [costTotal, setCostTotal] = useState(0);



function addToCartTotal(cost){
  console.log(costTotal)
  console.log(cost)
let newTotal = cartTotal + 1;
setCartTotal(newTotal); 
let newCost = costTotal + parseInt(cost);
console.log(newCost);
console.log(cost);
setCostTotal(newCost); 
console.log(newCost)
console.log(costTotal);

}

function removeFromCartTotal(cost){
  let newTotal = cartTotal - 1;
  console.log(newTotal);
  setCartTotal(newTotal);
  let newCost = costTotal - cost;
setCostTotal(newCost); 
console.log(newCost)
}

  return (
    <>
    {/* <Router>
       <Route path='/' element={<StoreFront/>} />
       <Route path="/Products" element={<StoreFront/>} />
     </Router> */}
    <StoreFront  cartTotal={cartTotal} costTotal={costTotal} addToCartTotal={addToCartTotal} removeFromCartTotal={removeFromCartTotal} />
    </>
  )

}
