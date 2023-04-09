import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";


export default function ShowCart({cart, setCart, costTotal, setCostTotal}) {

        function removeFromCart(index){
        const removeFromTotal = parseInt(cart[index].price);
        setCostTotal(costTotal - removeFromTotal);
        const cartRemove = [...cart];
        cartRemove.splice(index, 1);
        setCart(cartRemove);
        }
  return (
<div className='container border border-dark border-1'>
    <div className='row'>
        
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {cart.map((cart, index) => (
           <tr>
           <td>{index+1}</td>
           <td>{cart.prodname}</td>
           <td>${parseInt(cart.price)}</td>
           <td><Button variant="outline-danger" onClick={() => removeFromCart(index)}>X</Button> </td>
         </tr>
      ))} 
      <tr>
           <td></td>
           <td className='alignRightTotal totalText'>Total:</td>
           <td className='totalText'> ${parseInt(costTotal)}</td>
           <td></td>
         </tr>
      </tbody>
    </Table>
  
    </div>
    </div>
  )
}

