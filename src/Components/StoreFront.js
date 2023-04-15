// import { useEffect } from "react";
// import { getProductsAPI } from "../ProductsAPI/GetProductsAPI";
import ProductCards from "./ProductCards";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Title from "./Title";


export default function StoreFront({
	cartTotal,
	costTotal,
	addToCartTotal,
	removeFromCartTotal,
	cart,
	setCartTotal,
	setCostTotal,
	products,
	
}) {

	// useEffect hook to fetch the products data from the API on component mount
	// useEffect(() => {
	// 	fetchProducts();
	// }, []);

	// // fetch the products data from the API
	// const fetchProducts = async () => {
	// 	const addProduct = await getProductsAPI();
	// 	setProducts(addProduct);
	// };

	// render the ProductCards component and pass the necessary props
	return (
		<div className="container-fluid ">
			<Title />
			<div className="row">
				<ProductCards
					cart={cart}
					costTotal={costTotal}
					setCostTotal={setCostTotal}
					products={products}
					cartTotal={cartTotal}
					setCartTotal={setCartTotal}
					addToCartTotal={addToCartTotal}
					removeFromCartTotal={removeFromCartTotal}
				/>
			</div>
		</div>
	);
}
