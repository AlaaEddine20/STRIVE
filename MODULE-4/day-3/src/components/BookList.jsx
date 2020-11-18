import React from 'react'
import books from '../data/horror.json'
import { Card, Container, Row, Col } from 'react-bootstrap';

const BookList = () => {
    return (
        
            <Card>
                {books.map((props,key) => {
                   
                    return (
                        <Container key={key}>
                        <Row>
                          <Col>
                           <Card.Title><h1>{props.title}</h1></Card.Title>
                            <Card.Body>
                                <h4>{props.category}</h4>
                              <Card.Img src={props.img} style={{ width: 400, height: 500 }} />
                            </Card.Body>
                          </Col>
                        </Row>
                        </Container>
                    )
                }
                )}
            </Card>
        
    )
}

export default BookList