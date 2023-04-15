import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StoreFront from "./Components/StoreFront";
import Menu from "./Components/Menu";
import ShowCart from "./Components/ShowCart";
import Checkout from "./Components/Checkout";
import PostOrders from "./CustomerAPI/PostOrders";

export default function App() {
	// Moving state variable for products to top level
	const [products, setProducts] = useState([]);

	// Declare state variables for the cart
	const [cartTotal, setCartTotal] = useState(0);
	const [costTotal, setCostTotal] = useState(0);
	const [cart, setCart] = useState([]);

	// Function to add a product to the cart
	function addToCartTotal(product) {
		const price = parseInt(product.price);
		const currentTotal = parseInt(costTotal);

		// Update cart totals
		let newTotal = parseInt(cartTotal) + 1;
		setCartTotal(parseInt(newTotal));

		// Calculate new cost
		let newCost = currentTotal + price;
		setCostTotal(newCost);

		// Add new item to cart array
		setCart([
			...cart,
			{
				id: product.key,
				price: parseInt(product.price),
				prodname: product.prodname,
			},
		]);

		// Debugging console.log statements
		console.log(cartTotal);
		console.log(product.key);
		const filteredArray = cart.filter((item) => item.id === product.key);
		console.log(filteredArray);
		console.log(filteredArray.length);
	}

	// Function to handle the checkout process
	function handleBuy(fname, lname, email, cart, cartTotal) {
		const newOrder = {
			fname: fname,
			lname: lname,
			email: email,
			products: [cart],
			orderTotal: cartTotal,
		};

		// Call function to post the order to the backend
		PostOrders(newOrder);
	}

	return (
		<>
			{/* Render the menu component with the current cart */}
			<Menu cart={cart} />

			{/* Define the routes for the application */}
			<Routes>
				{/* Route to show the current cart */}
				<Route
					path="/cart"
					element={
						<ShowCart
							disabledButton=""
							cart={cart}
							costTotal={costTotal}
							setCart={setCart}
							setCostTotal={setCostTotal}
						/>
					}
				/>

				{/* Route to handle the checkout process */}
				<Route
					path="/checkout"
					element={
						<Checkout
							handleBuy={handleBuy}
							cart={cart}
							costTotal={costTotal}
							setCostTotal={setCostTotal}
							setCart={setCart}
						/>
					}
				/>

				{/* Default route for the store */}
				<Route
					path="/"
					element={
						<StoreFront
							products={products}
							setProducts={setProducts}
							cartTotal={cartTotal}
							costTotal={costTotal}
							addToCartTotal={addToCartTotal}
							cart={cart}
						/>
					}
				/>

				{/* Route to handle the checkout process */}
				<Route
					path="/checkout"
					element={
						<Checkout
							cart={cart}
							costTotal={costTotal}
							setCart={setCart}
							setCostTotal={setCostTotal}
							handleBuy={handleBuy}
						/>
					}
				/>
			</Routes>
		</>
	);
}
