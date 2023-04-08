import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCards({ products }) {
	return (
		<>
			{products.map((products) => (
				<div className="col p-3" key={products.key}>
					<Card
						style={{ width: "18rem" }}
						className="shadow"
						key={products.key}
					>
						<Card.Img variant="top" src={products.image} />
						<Card.Body>
							<Card.Title>{products.prodname}</Card.Title>
							<Card.Text>
								{products.description}
								<br />
								<br />
								<span className="priceFormat">${products.price}</span>
							</Card.Text>
							<Button variant="primary">Buy Me</Button>
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default ProductCards;
