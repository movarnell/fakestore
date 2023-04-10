
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ products, addToCartTotal, cart}) {

	

function handleClickAdd(products){
addToCartTotal(products)
}


	return (
		<>
		
			{products.map((products) => (
				<div className="col cardContainer" key={products.key}>
					<Card
						style={{ width: "18rem" }}
						className="shadow mb-4 mt-4"
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
							<Button variant="primary" onClick={() => handleClickAdd(products)}><span className="bungee" >Add to Cart</span></Button> 
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default ProductCards;
