import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCards({ products }) {

    const product = [...products];
  return (
    
      {products.map((product) => (
        <Card style={{ width: '18rem' }} key={product.id}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.prodname}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Button variant="primary">Buy Me</Button>
          </Card.Body>
        </Card>
      ))}
    
  );
}

export default ProductCards;
