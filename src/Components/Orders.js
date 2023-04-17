import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Orders({ orders, removeOrder }) {
	console.log('🚀 ~ file: Orders.js:5 ~ Orders ~ orders:', orders);


	function removeFromOrders(id) {
		console.log("🚀 ~ file: Orders.js:11 ~ removeFromOrders ~ id:", id)
		// Creating a copy of the cart array, removing the item using its index, and updating the state
		
				removeOrder(id);
	}


	return (
		<Container>
						<h2 className='bungee fw-bolder text-center mt-3'>Order History</h2>
						<h4 className='pageTitle fw-bolder text-center'>All purchases made on the site are listed here unless deleted by the user. Max: 50 purchases due to mockAPI.io implemented cap. </h4>

			<Table className="mt-4 border border-3  " responsive striped bordered hover>
				<thead>
					<tr>
						<th>Order Number</th>
						<th>Name</th>
						<th>Email</th>
						<th>Products</th>
						<th>Total</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>
								{order.fname} {order.lname}
							</td>
							<td>{order.email}</td>
							<td>
								<ul className="list-unstyled">
									{order.products.map(
										(product) => (
											<li
												key={
													"p"+product.id + "o" + order.id 
												}
											>
												{
													product.prodname
												}{' '}
												$
												{
													product.price.toFixed(2)
												}
											</li>
										)
									)}
								</ul>
							</td>
							<td>
								${parseFloat(order.orderTotal).toFixed(2)}
							</td>
							<td>{order.createdAt}</td>
							<td>
								<Button
									variant="outline-danger"
									onClick={() =>
										removeFromOrders(
											order.id
										)
									}
								>
									<span className="bungee">
										X
									</span>
								</Button>{' '}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Link to="/">
			<Button variant='outline-primary m-1' >Back to Storefront</Button>
			</Link>
			<Link to="/cart">
			<Button variant='outline-primary m-1' >Back to Cart</Button>
			</Link>
			<Link to="/checkout">
			<Button variant='primary m-1' >Back to Checkout</Button>
			</Link>
		</Container>
	);
}

export default Orders;
