import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCards({ products }) {

    
  return (
    <div>
      {products.map((products) => (
        <Card style={{ width: '18rem' }} className='g-2' key={products.id}>
          <Card.Img variant="top" src={products.image} />
          <Card.Body>
            <Card.Title>{products.prodname}</Card.Title>
            <Card.Text>
              {products.description}
            </Card.Text>
            <Button variant="primary">Buy Me</Button>
          </Card.Body>
        </Card>
        
      ))}
      </div>
  );
}

export default ProductCards;
