import React, { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StoreFront from './Components/StoreFront';
import Menu from './Components/Menu';
import ShowCart from './Components/ShowCart';



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
// SO FILTERING THE ARRAY BELOW WILL PROVIDE A COUNT FOR HOW MANY ARE IN THE CART FOR THE CUSTOMER
// NOW DO WE TAKE THAT COUNT AND ASSIGN IT AS A COUNT IN THE MOCK API, OR IN STATE? I WANT IT 
// TO UPDATE AND BE USABLE LATER. 
console.log(product.key)
const filteredArray = cart.filter(item => item.id === product.key);
console.log(filteredArray)
console.log(filteredArray.length);
}




//Start next function
// function removeFromCartTotal(product){
//   console.log(product)
// const productPrice = parseInt(product.price)
// console.log(productPrice);


// const updatedCart = cart.filter((item) => item.key  !== product.key);
// setCart(updatedCart);
  


  return (
    <>
    
    <Menu cart={cart} />
    <Routes>
       <Route path='/cart' element={<ShowCart cart={cart} costTotal={costTotal} setCart={setCart} setCostTotal={setCostTotal}/>} />
       <Route path="/" element={ <StoreFront  
    cartTotal={cartTotal} 
    costTotal={costTotal} 
    addToCartTotal={addToCartTotal} 
    cart={cart} />} />
     </Routes>
   
    
    </>
  )

}
