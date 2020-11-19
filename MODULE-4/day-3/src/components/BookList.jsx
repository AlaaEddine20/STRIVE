import React from 'react'
import books from '../data/horror.json'
import { Card, Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = () => {
  
    return (
      <Container>
          <Row>
                {books.map((book,key) => {
                   
                    return (

                         <SingleBook data={book} key={key}  /> 
                       
                    )
                }
                )}
         </Row>
         </Container>
    )
}

export default BookList