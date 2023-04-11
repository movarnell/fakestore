import React from 'react'
import {Button} from 'react-bootstrap'
import ShowCart from './ShowCart'


export default function Checkout({ cart, costTotal, removeFromCart }) {
  


  return (
    
      <div className='container'>
        <div className='row'>
          
          <div className='col-5'>
            <h1 className='bungee display-2'>Checkout</h1>
            <h6 className='bungee ms-2'>So you made it this far, well go on buy this stuff.</h6>
            <form className='form'>
              <input className='form-control m-2' type='text' id='fname' placeholder='First Name'></input>
              <input className='form-control m-2' type='text' id='lname' placeholder='Last Name'></input>
              <input className='form-control m-2' type='text' id='email' placeholder='email'></input>
              <Button variant="success" className='m-3'>Buy</Button>
            </form>
          </div>
          <div className='col-6'>
          <div className="container border border-dark border-1 mt-5">
      <h1 className="bungee text-center">FakeStore</h1>
			<div className="row">
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
								<td>{index + 1}</td>
								<td>{cart.prodname}</td>
								<td>${parseInt(cart.price)}</td>
								<td>
									<Button
										variant="outline-danger"
										onClick={() => removeFromCart(index)}
									>
										<span className="bungee">X</span>
									</Button>{" "}
								</td>
							</tr>
						))}
						<tr>
							<td></td>
							<td className="alignRightTotal totalText">Total:</td>
							<td className="totalText"> ${parseInt(costTotal)}</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
				<div className="row">
          <div className="col bungee text-center"></div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}
