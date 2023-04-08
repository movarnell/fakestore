import { useState, useEffect } from "react";
import  { getProductsAPI }  from "../ProductsAPI/GetProductsAPI";
import ProductCards from "./ProductCards";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function StoreFront({cartTotal, costTotal, addToCartTotal, removeFromCartTotal}) {
	const [products, setProducts] = useState([]);
	

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const addProduct = await getProductsAPI();
		setProducts(addProduct);
		
	};

	

	return (
		<div className="container-fluid ">
			<div className="row">
				<ProductCards costTotal={costTotal} products={products} cartTotal={cartTotal}  addToCartTotal={addToCartTotal} removeFromCartTotal={removeFromCartTotal}/>
			</div>
		</div>
	);
}
