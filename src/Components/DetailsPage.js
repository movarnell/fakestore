import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function DetailsPage({products }){




        console.log("🚀 ~ file: DetailsPage.js:8 ~ DetailsPage ~ products:", products)
        let {productKey} = useParams()
        productKey = parseInt(productKey)

        const product = products.find(p => p.key === productKey)
        console.log("🚀 ~ file: DetailsPage.js:12 ~ DetailsPage ~ product:", product)

useEffect(() => {
        document.title = product ? product.prodname : "Loading..."}, [product])
console.log(products);
console.log(product);

        return (
                <>
                <Row>
                        <Col>
                        <p>{product.prodname}</p>
                        </Col>
                </Row>
                </>
        )
}