// Importing required modules and components
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// Defining a functional component named ShowCart with props cart, setCart, costTotal, setCostTotal
export default function ShowCart({ cart, setCart, costTotal, setCostTotal }) {
	// Defining a function to remove an item from the cart using its index
	function removeFromCart(index) {
		// Subtracting the price of the item removed from the total cost
		const removeFromTotal = parseInt(cart[index].price);
		setCostTotal(costTotal - removeFromTotal);

		// Creating a copy of the cart array, removing the item using its index, and updating the state
		const cartRemove = [...cart];
		cartRemove.splice(index, 1);
		setCart(cartRemove);
	}

	// Rendering the component
	return (
		<div className="container border border-dark border-1 mt-5">
			<h1 className="bungee text-center">FakeStore</h1>
			<div className="row">
				{/* Displaying the cart items in a table */}
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
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{cart.prodname}</td>
								<td>${parseInt(cart.price)}</td>
								<td>
									{/* Adding a remove button for each item in the cart */}
									<Button
										variant="outline-danger"
										onClick={() => removeFromCart(index)}
									>
										<span className="bungee">X</span>
									</Button>{" "}
								</td>
							</tr>
						))}
						{/* Displaying the total cost of the items in the cart */}
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
						{/* Adding checkout and continue shopping buttons */}
						<Link to="/checkout">
							<Button variant="primary m-4">Checkout</Button>
						</Link>
						<Link to="/">
							<Button variant="outline-primary m-4">Continue Shopping </Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
