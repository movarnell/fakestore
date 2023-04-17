import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';



function Orders({ orders, setOrders, removeOrder }) {
	console.log('🚀 ~ file: Orders.js:5 ~ Orders ~ orders:', orders);


	function removeFromOrders(id) {
		console.log("🚀 ~ file: Orders.js:11 ~ removeFromOrders ~ id:", id)
		// Creating a copy of the cart array, removing the item using its index, and updating the state
		
				removeOrder(id);
	}


	return (
		<Container>
			<Table striped bordered hover>
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
		</Container>
	);
}

export default Orders;
