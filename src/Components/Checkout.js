import React from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

export default function Checkout({
	cart,
	costTotal,
	handleBuy,
	setCart,
	setCostTotal,
	orders,
	setOrders,
}) {
	const formik = useFormik({
		initialValues: {
			fname: '',
			lname: '',
			email: '',
		},
		onSubmit: (values) => {
			handleSubmit(values);
			formik.resetForm();
		},
		validationSchema: yup.object({
			email: yup
				.string()
				.required('Email is required')
				.email('Invalid email address'),
			fname: yup.string().required('First Name is required'),
			lname: yup.string().required('Last Name is required'),
		}),
	});

	// function to handle form submission
	function handleSubmit(values) {
		const { fname, lname, email } = values;

		// create a new cart array to avoid modifying the original cart
		const newCart = [...cart];
		let totalTaxIncluded = costTotal * 1.095;
		totalTaxIncluded = totalTaxIncluded.toFixed(2);
		// call handleBuy function with the form input values, newCart, and costTotal
		handleBuy(fname, lname, email, newCart, totalTaxIncluded);
		// clear cart and costTotal
		setCart([]);
		setCostTotal(0);
	}

	return (
		<div>
			<div className="container">
				<div className="row">
					<h1 className="bungee display-2">Checkout</h1>
					<h6 className="bungee ms-2">
						So you made it this far, well go on buy this
						stuff.
					</h6>
					{/* create a form for user input */}
					<form onSubmit={formik.handleSubmit}>
  <input
    className="form-control m-2 fw-bolder text-dark"
    type="text"
    id="fname"
    placeholder="First Name"
    value={formik.values.fname}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  <div className="error">
    {formik.errors.fname && formik.touched.fname && formik.errors.fname}
  </div>
  <input
    className="form-control m-2 fw-bolder text-dark"
    type="text"
    id="lname"
    placeholder="Last Name"
    value={formik.values.lname}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  <div className="error">
    {formik.errors.lname && formik.touched.lname && formik.errors.lname}
  </div>

  <input
    className="form-control m-2 fw-bolder text-dark"
    type="text"
    id="email"
    placeholder="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  <div className="error">
    {formik.errors.email && formik.touched.email && formik.errors.email}
  </div>
  {/* create a Buy button to submit the form */}
  <Button variant="success" className="m-3" type="submit">
    Buy
  </Button>
</form>

					{/* create a table to display cart items */}
					<div className="m-3">
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>#</th>
									<th>Product</th>
									<th>Price</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{/* map through cart array to display cart items */}
								{cart.map((cart, index) => {
									return (
										<tr key={index}>
											<td>
												{index +
													1}
											</td>
											<td>
												{
													cart.prodname
												}
											</td>
											<td>
												$
												{cart.price.toFixed(
													2
												)}
											</td>
											<td></td>
										</tr>
									);
								})}
								{/* display sales tax and total cost */}
								<tr>
									<td></td>
									<td className="alignRightTotal">
										9.5% Sales Tax:
									</td>
									<td>
										{' '}
										$
										{(
											costTotal *
											0.095
										).toFixed(2)}
									</td>
									<td></td>
								</tr>
								<tr>
									<td></td>
									<td className="alignRightTotal totalText">
										Total:
									</td>
									<td className="totalText">
										{' '}
										$
										{(
											costTotal *
											1.095
										).toFixed(2)}
									</td>
									<td></td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
				{/* display checkout header and subheader */}

				{/* create a Buy button to submit the form */}
				<Link to="/orders" className="text-decoration-none">
					<Button
						variant="success"
						className="text-white bungee fw-bolder"
					>
						Orders
					</Button>
				</Link>
			</div>
		</div>
	);
}
