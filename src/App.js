import React, { useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import StoreFront from './Components/StoreFront';
import Menu from './Components/Menu';



export default function App() {
const [cartTotal, setCartTotal] = useState(0);
const [costTotal, setCostTotal] = useState(0);
const [cart, setCart] = useState([]);



function addToCartTotal(product, costTotal){
// addind to cart totals
let newTotal = parseInt(cartTotal) + 1;
setCartTotal(parseInt(newTotal)); 
// calculating cost
console.log(product.price)
console.log(costTotal);
let newCost = parseInt(costTotal) + parseInt(product.price);  // WHERE YOU LEFT OFF, TRYING TO GET THE COST TO CALCULATE PROPERLY
console.log(newCost)
setCostTotal(newCost); 
// adding to array of stuff in the cart. 
setCart([...cart, {
  id:  product.key,
  price: product.key,
  prodname: product.prodname,
}]);
console.log(cartTotal)
console.log(cart);
}
//Start next function
function removeFromCartTotal(product){
  if(costTotal >= product.price){
  let newTotal = cartTotal - 1;
  console.log(newTotal);
  setCartTotal(newTotal);
  
  let newCost = costTotal - parseInt(product.price);
setCostTotal(newCost); 
console.log(newCost)

const updatedCart = cart.filter((item) => item.key  !== product.key);
setCart(updatedCart);
  }
}

  return (
    <>
    <Menu cartTotal={cartTotal} costTotal={costTotal} />
    {/* <Router>
       <Route path='/' element={<StoreFront/>} />
       <Route path="/Products" element={<StoreFront/>} />
     </Router> */}
    <StoreFront  
    cartTotal={cartTotal} 
    costTotal={costTotal} 
    addToCartTotal={addToCartTotal} 
    removeFromCartTotal={removeFromCartTotal} 
    cart={cart} />
    </>
  )

}
