import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useFormik } from 'formik'; // import formik library for form handling
import * as yup from 'yup'; // import yup library for form validation
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props, {totalWTax}) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter bungee">
					Submitted
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4 className="display-6 bungee text-center">
					Your Purchase was Processed.
				</h4>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}


// this component receives props from its parent
export default function Checkout({
	cart,
	costTotal,
	handleBuy,
	setCart,
	setCostTotal,
}) {
	const [modalShow, setModalShow] = useState(false);
	

	

	// useFormik hook to create a formik instance for form handling and validation
	const formik = useFormik({
		initialValues: {
			fname: '',
			lname: '',
			email: '',
		},
		onSubmit: (values) => {
			handleSubmit(values);
		},
		// validationSchema to validate the form fields
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

		const newCart = [...cart]; // copy cart state
		let totalTaxIncluded = costTotal * 1.095; // calculate total cost with tax
		totalTaxIncluded = totalTaxIncluded.toFixed(2); // round off the decimal to 2 digits
		handleBuy(fname, lname, email, newCart, totalTaxIncluded); // call the handleBuy function from the parent component
		setCart([]); // empty the cart
		setCostTotal(0); // reset the total cost
		formik.resetForm();
		setModalShow(true);
	}
 


	return (
		<div>
			<div className="container">
				<div className="row">
					{/* Heading section */}
					<h1 className="bungee display-2">Checkout</h1>
					<h6 className="bungee ms-2">
						So you made it this far, well go on buy this
						stuff.
					</h6>
					<h6 className="text-danger fw-bolder text-center">
						*DO NOT USE REAL INFO*
						<br />
						Info entered is visible in orders page to
						anyone.
					</h6>

					{/*  Form section */}
					<form onSubmit={formik.handleSubmit}>
						{/* First name input */}
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
							{/* Show error if form validation fails for first name input */}
							{formik.errors.fname &&
								formik.touched.fname &&
								formik.errors.fname}
						</div>

						{/* Last name input */}
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
							{/* Show error if form validation fails for last name input */}
							{formik.errors.lname &&
								formik.touched.lname &&
								formik.errors.lname}
						</div>

						{/* Email input */}
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
							{/* Show error if form validation fails for email input */}
							{formik.errors.email &&
								formik.touched.email &&
								formik.errors.email}
						</div>

						{/* Submit button */}
						{cart.length > 0 ? (
				<Button
					variant="success"
					className="m-3"
					type="submit"
				>
					Buy
				</Button>
			) : <><Link to="/"> <Button
			variant="primary"
			className="m-3"
			
		>
			Continue Shopping
		</Button></Link></>}
					</form>

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
<div className='text-center'>
				<Link to="/orders" className="text-decoration-none">
					<Button
						variant="success"
						
						className="text-white bungee fw-bolder"
					>
						See Order History
					</Button>
				</Link>
				</div>
			</div>
			<>
				<MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</>
		</div>
	);
}
