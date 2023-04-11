import React from 'react'
import {Button} from 'react-bootstrap'
import {Table} from 'react-bootstrap'


export default function Checkout({ cart, costTotal, handleBuy, setCart, setCostTotal }) {
  
function handleSubmit({cart}){
	const fname = document.getElementById("fname").value;
	const lname = document.getElementById("lname").value;
	const email = document.getElementById("email").value;
	const newCart = [...cart];
	// console.log(fname)
	// console.log(lname)
	// console.log(email)
	// console.log({cart})
   handleBuy(fname, lname, email, newCart, costTotal)
   
   setCart([]);
   setCostTotal(0);
   document.getElementById("fname").value = "";
   document.getElementById("lname").value = "";
   document.getElementById("email").value = "";
}

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <Table striped>
					<thead>
						<tr>
							<th>#</th>
							<th>Product</th>
							<th>Price</th>
							
						</tr>
					</thead>
					<tbody>
						{cart.map((cart, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>{cart.prodname}</td>
								<td>${parseInt(cart.price)}</td>
							</tr>
						))}
            <tr>
							<td></td>
							<td className="alignRightTotal">9.5% Sales Tax:</td>
							<td> ${parseInt(costTotal*.095)}</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td className="alignRightTotal totalText">Total:</td>
							<td className="totalText"> ${parseInt(costTotal*1.095)}</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
          </div>
          <div className='col-5'>
            <h1 className='bungee display-2'>Checkout</h1>
            <h6 className='bungee ms-2'>So you made it this far, well go on buy this stuff.</h6>
            <form className='form' >
              <input className='form-control m-2' type='text' id='fname' placeholder='First Name'></input>
              <input className='form-control m-2' type='text' id='lname' placeholder='Last Name'></input>
              <input className='form-control m-2' type='text' id='email' placeholder='email'></input>
              <Button variant="success" className='m-3' onClick={() => handleSubmit({cart})} >Buy</Button>
            </form>
          </div>
          
        </div>
      </div>

    </div>
  )
}
