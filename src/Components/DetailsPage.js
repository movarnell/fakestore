import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function DetailsPage(products){
        console.log("🚀 ~ file: DetailsPage.js:7 ~ DetailsPage ~ products:", products)

        let productKey = useParams()
        console.log("🚀 ~ file: DetailsPage.js:10 ~ DetailsPage ~ productKey:", productKey)
        productKey = parseInt(productKey.key)
        console.log("🚀 ~ file: DetailsPage.js:12 ~ DetailsPage ~ productKey:", productKey)
        

       



console.log(products.products[productKey].prodname);

        return (
                <>
                <Row>
                        <Col>
                        testing
                        {products.products[productKey].prodname}
                        </Col>
                </Row>
                </>
        )
}