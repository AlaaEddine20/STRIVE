import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container } from 'react-bootstrap';
import books from '../data/horror.json'


const SingleBook = (props) => {

    return (
        <Col>
        <Card>
        
            <Card.Img src={props.data.img} style={{ width: 400, height: 500 }} />
           
        </Card>
        </Col>
    )
}
    


export default SingleBook