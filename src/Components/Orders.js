import React, {useEffect} from 'react';
import { Button, Container, Table } from 'react-bootstrap';



function Orders({ orders, setOrders, fetchOrders, removeOrder }) {
	console.log('🚀 ~ file: Orders.js:5 ~ Orders ~ orders:', orders);

        useEffect(() => {
		fetchOrders();
	},[]);

	function removeFromOrders(index) {
		// Creating a copy of the cart array, removing the item using its index, and updating the state
		const orderRemove = [...orders];
		orderRemove.splice(index, 1);
		removeOrder(index);
                setOrders(orderRemove)
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
					{orders.map((orders) => (
						<tr key={orders.id}>
							<td>{orders.id}</td>
							<td>
								{orders.fname} {orders.lname}
							</td>
							<td>{orders.email}</td>
							<td>
								<ul className="list-unstyled">
									{orders.products.map(
										(product) => (
											<li
												key={
													product.id
												}
											>
												{
													product.prodname
												}{' '}
												$
												{
													product.price
												}
											</li>
										)
									)}
								</ul>
							</td>
							<td>
								${parseFloat(orders.orderTotal)}
							</td>
							<td>{orders.createdAt}</td>
							<td>
								<Button
									variant="outline-danger"
									onClick={() =>
										removeFromOrders(
											orders.id
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
