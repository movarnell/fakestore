import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StoreFront from './Components/StoreFront';
import Menu from './Components/Menu';
import ShowCart from './Components/ShowCart';
import Checkout from './Components/Checkout';
import PostOrders from './CustomerAPI/PostOrders';



export default function App() {
const [cartTotal, setCartTotal] = useState(0);
const [costTotal, setCostTotal] = useState(0);
const [cart, setCart] = useState([]);



function addToCartTotal(product){
const price = parseInt(product.price);
console.log(costTotal);
const currentTotal = parseInt(costTotal);
console.log(costTotal);
console.log(currentTotal);
console.log(price);
  // addind to cart totals
let newTotal = parseInt(cartTotal) + 1;
setCartTotal(parseInt(newTotal)); 
// calculating cost
console.log(currentTotal);
let newCost = currentTotal + price;  
console.log(newCost)
setCostTotal(newCost); 
// adding to array of stuff in the cart. 
setCart([...cart, {
  id:  product.key,
  price: parseInt(product.price),
  prodname: product.prodname,
}]);
console.log(cartTotal)
console.log(product.key)
const filteredArray = cart.filter(item => item.id === product.key);
console.log(filteredArray)
console.log(filteredArray.length);
}

function handleBuy(fname, lname, email, cart, cartTotal){
const newOrder = {
  fname: fname,
  lname: lname,
  email: email,
  products: [cart],
  orderTotal: cartTotal
}

PostOrders(newOrder)
}






  return (
    <>
    
    <Menu cart={cart} />
    <Routes>
       <Route path='/cart' element={<ShowCart disabledButton='' cart={cart} costTotal={costTotal} setCart={setCart} setCostTotal={setCostTotal}/>} />
       <Route path='/checkout' element={<Checkout handleBuy={handleBuy} cart={cart} costTotal={costTotal} setCostTotal={setCostTotal} setCart={setCart}/>}/>
       <Route path="/" element={ <StoreFront  
    cartTotal={cartTotal} 
    costTotal={costTotal} 
    addToCartTotal={addToCartTotal} 
    cart={cart} />} />
    <Route path="/checkout" element={<Checkout cart={cart} costTotal={costTotal} setCart={setCart} setCostTotal={setCostTotal} handleBuy={handleBuy} />}/>
     </Routes>
   
    
    </>
  )

}
