import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import books from '../data/horror.json'


const SingleBook = (props) => {

    return (
        <Card>
            
                
            <Container>
            <Card.Img src={props.img} style={{ width: 400, height: 500 }} />
            </Container>
                
        </Card>
    )
}
    


export default SingleBook