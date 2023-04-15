import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


export default function DetailsPage(products, {addToCartTotal} ){
        console.log("🚀 ~ file: DetailsPage.js:7 ~ DetailsPage ~ products:", products)

        let productKey = useParams()
        console.log("🚀 ~ file: DetailsPage.js:10 ~ DetailsPage ~ productKey:", productKey)
        productKey = parseInt(productKey.key)
       const titleKey = productKey
        productKey= productKey -1;
        console.log("🚀 ~ file: DetailsPage.js:12 ~ DetailsPage ~ productKey:", productKey)
        
const {department, longDescription, image, item, material, price, prodadj, prodname} = products.products[productKey];




        return (
                
                <Container>
                <Row className='p-4'>
                        <Col>
                        <img src={image} className='img-fluid rounded-2'></img>
                        
                        </Col>
                        <Col>
                        <h1>{prodname}</h1><br/>
                       <h4>Made of: {material}</h4> <h4>Item: {item},  Department-{department}</h4><br/>
                       <h6>{prodadj}</h6>
                       <h2>${price}</h2><br/>
                     
                <Link to="/" >
                       <Button variant='primary'  ><span className='bungee'>Continue Shopping</span></Button>
                       </Link>
                        </Col>
                </Row>
                <Row>
                        <Col className='m-4'>
                        <p className='lead'>{longDescription}</p>
                        </Col>
                </Row>
                </Container>
                
        )
}