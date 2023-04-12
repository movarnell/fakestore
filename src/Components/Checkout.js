import React from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

export default function Checkout({
	cart,
	costTotal,
	handleBuy,
	setCart,
	setCostTotal,
}) {
	// function to handle form submission
	function handleSubmit({ cart }) {
		// get form input values
		const fname = document.getElementById("fname").value;
		const lname = document.getElementById("lname").value;
		const email = document.getElementById("email").value;
		// create a new cart array to avoid modifying the original cart
		const newCart = [...cart];
		// call handleBuy function with the form input values, newCart, and costTotal
		handleBuy(fname, lname, email, newCart, costTotal);
		// clear cart and costTotal
		setCart([]);
		setCostTotal(0);
		// clear form input values
		document.getElementById("fname").value = "";
		document.getElementById("lname").value = "";
		document.getElementById("email").value = "";
	}

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						{/* create a table to display cart items */}
						<Table striped>
							<thead>
								<tr>
									<th>#</th>
									<th>Product</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{/* map through cart array to display cart items */}
								{cart.map((cart, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{cart.prodname}</td>
											<td>${parseInt(cart.price)}</td>
										</tr>
									);
								})}
								{/* display sales tax and total cost */}
								<tr>
									<td></td>
									<td className="alignRightTotal">9.5% Sales Tax:</td>
									<td> ${parseInt(costTotal * 0.095)}</td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td className="alignRightTotal totalText">Total:</td>
									<td className="totalText"> ${parseInt(costTotal * 1.095)}</td>
									<td></td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div className="col-5">
						{/* display checkout header and subheader */}
						<h1 className="bungee display-2">Checkout</h1>
						<h6 className="bungee ms-2">
							So you made it this far, well go on buy this stuff.
						</h6>
						{/* create a form for user input */}
						<form className="form">
							<input
								className="form-control m-2"
								type="text"
								id="fname"
								placeholder="First Name"
							></input>
							<input
								className="form-control m-2"
								type="text"
								id="lname"
								placeholder="Last Name"
							></input>
							<input
								className="form-control m-2"
								type="text"
								id="email"
								placeholder="email"
							></input>
							{/* create a Buy button to submit the form */}
							<Button
								variant="success"
								className="m-3"
								onClick={() => handleSubmit({ cart })}
							>
								Buy
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
