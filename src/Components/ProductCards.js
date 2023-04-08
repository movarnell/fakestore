import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ products , addToCartTotal, cartTotal, costTotal, removeFromCartTotal, cart}) {
const [itemsTotal, setItemsTotal] = useState("");
const [eachCount, setEachCount] = useState(0);

function handleClickAdd(products) {
	addToCartTotal(products); 
	
	const	newCount = itemsTotal.count + 1;
	
	setItemsTotal([{
		key: products.key,
		count: {newCount}
	}]);
	console.log(itemsTotal);
	}
function handleClickRemove(products){
	removeFromCartTotal(products);
	const newCount = itemsTotal.count -1;
	setItemsTotal([{
		key: products.key,
		count: {newCount}
	}])
	const updateEachCount = eachCount.filter((item) => item.key  !== products.key);
	setEachCount(updateEachCount);
	console.log(itemsTotal);
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
							<Button variant="primary" onClick={() => handleClickRemove(products)}>-</Button>{eachCount}<Button variant="primary" onClick={() => handleClickAdd(products)}>+</Button> <br/>Total items in Cart: {cartTotal}<br/>{costTotal}
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default ProductCards;
