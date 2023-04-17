import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export default function DetailsPage({ products, addToCartTotal }) {
  console.log("🚀 ~ file: DetailsPage.js:6 ~ DetailsPage ~ products:", products)
  const { key } = useParams();

  // Convert key to number and subtract 1 to get index
  const productIndex = parseInt(key, 10) - 1;

  // Check if productIndex is valid
  if (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
    return <div>Error: Product not found.</div>;
  }

  const { department, longDescription, image, item, material, price, prodadj, prodname } = products[productIndex];

function handleClickAdd(products){
  console.log("🚀 ~ file: DetailsPage.js:19 ~ handleClickAdd ~ products:", products)
  addToCartTotal(products)
}

  return (
    <Container>
      <Row className='p-4'>
        <Col>
          <img src={image} className='img-fluid rounded-2' alt='Product Images'></img>
        </Col>
        <Col className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='display-4 bungee'>{prodname}</h1>
          <h3><span className="fw-bold">Material:</span> {material} <br /><span className="fw-bold">Item:</span> {item}<br/><span className="fw-bold">Department:</span> {department} </h3><br />
          <h2>{prodadj}</h2>
          <h1 className='display-5'>${price}</h1><br />
          <Link to="/">
            <Button variant='primary' className='m-3'><span className='bungee'>Continue Shopping</span></Button>
            <Button variant="primary" className='m-3' onClick={() => handleClickAdd(products[productIndex])}><span className="bungee" >Add to Cart</span></Button> 
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
