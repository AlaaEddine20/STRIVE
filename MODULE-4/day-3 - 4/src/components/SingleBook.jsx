import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import books from '../data/horror.json'


const SingleBook = (book) => {
    console.log(books)
    
    return (
        <Card>
            {books.map((book) => {
                return (
                    <Container>
                      <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                         <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Container>
                        )
                    }
                    )}
                    </Card>
                    )
}

export default SingleBook