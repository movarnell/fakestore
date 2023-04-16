import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function DetailsPage({ products }) {
  const { key } = useParams();

  // Convert key to number and subtract 1 to get index
  const productIndex = parseInt(key, 10) - 1;

  // Check if productIndex is valid
  if (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
    return <div>Error: Product not found.</div>;
  }

  const { department, longDescription, image, item, material, price, prodadj, prodname } = products[productIndex];

  return (
    <Container>
      <Row className='p-4'>
        <Col>
          <img src={image} className='img-fluid rounded-2' alt='Product Images'></img>
        </Col>
        <Col>
          <h1>{prodname}</h1><br />
          <h4>Made of: {material}</h4> <h4>Item: {item}, Department-{department}</h4><br />
          <h6>{prodadj}</h6>
          <h2>${price}</h2><br />
          <Link to="/">
            <Button variant='primary'><span className='bungee'>Continue Shopping</span></Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className='m-4'>
          <p className='lead'>{longDescription}</p>
        </Col>
      </Row>
    </Container>
  );
}
