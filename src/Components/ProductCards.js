import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ products , addToCartTotal, cartTotal, costTotal, removeFromCartTotal, cart}) {
const [itemsTotal, setItemsTotal] = useState("");
const [eachCount, setEachCount] = useState();

function handleClickAdd(products) {
	addToCartTotal(products); 
}


function handleClickRemove(product){
	removeFromCartTotal(product);

}



	return (
		<>
		<div className="row">Your Current Total Tally is : ${costTotal}</div>
			{products.map((products) => (
				<div className="col p-3 cardContainer" key={products.key}>
					<Card
						style={{ width: "18rem" }}
						className="shadow"
						key={products.key}
					>
						<Card.Img variant="top" src={products.image} />
						<Card.Body>
							<Card.Title>{products.prodname}</Card.Title>
							<Card.Text>
								<span className="fw-bold"> {products.department}, {products.item}, <br/>{products.prodadj}-{products.material}</span><br/>
								{products.description}
								<br />
								<br />
								<span className="priceFormat">${products.price}</span>
							</Card.Text>
							<Button variant="primary" onClick={() => handleClickAdd(products)}>Add to Cart</Button> <br/>Total items in Cart: {cartTotal}<br/>{costTotal}
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default ProductCards;
