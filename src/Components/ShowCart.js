import React from "react";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

export default function ShowCart({ cart, setCart, costTotal, setCostTotal, }) {
	
	function removeFromCart(index) {
		const removeFromTotal = parseInt(cart[index].price);
		setCostTotal(costTotal - removeFromTotal);
		const cartRemove = [...cart];
		cartRemove.splice(index, 1); // need to export this to make it work. 
		setCart(cartRemove);

	}
	return (
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
          <div className="col bungee text-center">
					<Link to="/checkout"><Button variant="primary m-4">Checkout</Button></Link>  
            <Link to="/">
					<Button variant="outline-primary m-4">Continue Shopping </Button>
          </Link>
          </div>
				</div>
			</div>
		</div>
	);
}
