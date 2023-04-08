import React, { useState } from 'react'
import './App.css';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import StoreFront from './Components/StoreFront';



export default function App() {
const [cartTotal, setCartTotal] = useState(0);
const [costTotal, setCostTotal] = useState(0);
const [cart, setCart] = useState([]);



function addToCartTotal(product){
const addProduct= product;
let newTotal = cartTotal + 1;
setCartTotal(newTotal); 
let newCost = costTotal + parseInt(product.price);
setCostTotal(newCost); 
setCart([...cart, {
  key:  product.key,
  price: product.key,
  prodname: product.prodname,
}]);

const newCartContents = {
// productKey: {item.key}
}
const newCartTotal = {
  itemsCount: {cartTotal},
  costTotal: {costTotal}
}

}

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
    {/* <Router>
       <Route path='/' element={<StoreFront/>} />
       <Route path="/Products" element={<StoreFront/>} />
     </Router> */}
    <StoreFront  cartTotal={cartTotal} costTotal={costTotal} addToCartTotal={addToCartTotal} removeFromCartTotal={removeFromCartTotal} cart={cart} />
    </>
  )

}
