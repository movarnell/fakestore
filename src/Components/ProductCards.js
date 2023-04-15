import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import DetailsPage from "./DetailsPage";

function ProductCards({ products, addToCartTotal, cart}) {

	// function to handle adding products to the cart when the "Add to Cart" button is clicked
	function handleClickAdd(products){
		addToCartTotal(products)
	}

	return (
		<>
			{/* mapping through each product object in the products array to display it as a Card */}
			{products.map((products) => (
				<div className="col cardContainer" key={products.key}>
					{/* individual product Card */}
					<Card
						style={{ width: "18rem" }}
						className="shadow mb-4 mt-4"
						key={products.key}
					>
						{/* product image */}
						<Card.Img variant="top" src={products.image} />
						<Card.Body>
							{/* product name */}
							<Card.Title>{products.prodname}</Card.Title>
							<Card.Text>
								{/* product information: department, item, prodadj, material */}
								<span className="fw-bold"> {products.department}, {products.item}, <br/>{products.prodadj}-{products.material} Key: {products.key}</span><br/>
								{/* product description */}
								{products.description}
								<br />
								<br />
								{/* product price */}
								<span className="priceFormat">${products.price}</span>
								<p><Link to={products.key} element={<DetailsPage products={products} />}>More Info...</Link></p>
							</Card.Text>

							{/* button to add product to cart */}
							<Button variant="primary" onClick={() => handleClickAdd(products)}><span className="bungee" >Add to Cart</span></Button> 
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default ProductCards;
