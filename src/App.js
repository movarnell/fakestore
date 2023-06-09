import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StoreFront from "./Components/StoreFront";
import Menu from "./Components/Menu";
import ShowCart from "./Components/ShowCart";
import Checkout from "./Components/Checkout";
import PostOrders from "./CustomerAPI/PostOrders";
import DetailsPage from "./Components/DetailsPage";
import { getProductsAPI } from "./ProductsAPI/GetProductsAPI";
import { getOrders } from "./CustomerAPI/GetOrders"
import FAQ from "./Components/FAQ";
import Orders from "./Components/Orders";
import RemoveOrder from "./CustomerAPI/RemoveOrder";

export default function App() {
	const [orders, setOrders] = useState([]);
	const [products, setProducts] = useState([]);
	// Declare state variables for the cart
	const [cartTotal, setCartTotal] = useState(0);
	const [costTotal, setCostTotal] = useState(0);
	const [cart, setCart] = useState([]);


	// uesEffect hook to fetch the orders that have been placed from the API on component mount.
	useEffect(() => {
		fetchOrders();
	},[]);

	const fetchOrders = async () =>{
		const addOrders = await getOrders();
		setOrders(addOrders);
		
	}

	const removeOrder = async (id) => {
		console.log("🚀 ~ file: App.js:37 ~ removeOrder ~ id:", id)
		await RemoveOrder(id)
		// fetchOrders();
		const orderRemove = [...orders];
		const index=orders.findIndex((order) => order.id === id)
		orderRemove.splice(index, 1);
		
                setOrders(orderRemove)
	      }
	// useEffect hook to fetch the products data from the API on component mount
	useEffect(() => {
		fetchProducts();
	}, []);

	// fetch the products data from the API
	const fetchProducts = async () => {
		const addProduct = await getProductsAPI();
		setProducts(addProduct);
	};
	

	// Function to add a product to the cart
	function addToCartTotal(product) {
		const price = parseFloat(product.price);
		const currentTotal = parseFloat(costTotal);

		// Update cart totals
		const newTotal = parseFloat(cartTotal) + 1;
		setCartTotal(parseFloat(newTotal));

		// Calculate new cost
		const newCost = currentTotal + price;
		setCostTotal(newCost);
		console.log(newCost);

		// Add new item to cart array
		setCart([
			...cart,
			{
				id: product.key,
				price: parseFloat(product.price),
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
    const nowDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
	
	// Function to handle the checkout process
	async function handleBuy(fname, lname, email, cart, cartTotal) {
		const newOrder = {
			fname: fname,
			lname: lname,
			email: email,
			products: cart,
			orderTotal: cartTotal,
			createdAt: nowDate,
		};

		// Concat adds it to the back of the array. 
		const createdOrder = await PostOrders(newOrder);
		setOrders(orders.concat(createdOrder));
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
							orders={orders}
							setOrders={setOrders}
						/>
					}
				/>
				{/* Route to handle details pages */}
				<Route
					path="/:key"
					element={
						<DetailsPage products={products} addToCartTotal={addToCartTotal} />
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
				{/* Route to handle the FAQ Page */}
				<Route path="/FAQ" element={<FAQ />} />

				{/* Route to the Orders Component */}
				<Route path="/orders" element={<Orders orders={orders} setOrders={setOrders} removeOrder={removeOrder} fetchOrders={fetchOrders}/>}/>

			</Routes>
		</>
	);
}
