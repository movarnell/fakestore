import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ products , addToCartTotal, cartTotal, costTotal, removeFromCartTotal}) {
const [clicked, setClicked] = useState(false);

function handleClick(products) {
	addToCartTotal(products.price) 
	if(clicked !== true) {
	setClicked(true);
	} else{
		removeFromCartTotal(products.price);
		setClicked(false);
	}
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
							<Button variant="primary" onClick={() => handleClick(products)}>Add to Cart</Button> <br/>Total items in Cart: {cartTotal}<br/>{costTotal}
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default ProductCards;
