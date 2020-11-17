import React from 'react'
import { Container, Row, Col, Jumbotron, Card, CardBody, CardTitle, CardText } from 'react-bootstrap'
import books from '../data/scifi.json';

class Home extends React.Component {
    render() {
        return (
        
            <Container fluid style={{ backgroundColor: '#b3cdd1' }}>
                <Row className="d-flex justify-content-center no-gutters">
                    <Jumbotron fluid className="w-100 bg-transparent" style={{ color: '#2d2d34', fontFamily: 'Satisfy', fontSize: 26 }}>
                      <Container>
                        <h1>Welcome to my book store</h1>
                        <p className="mt-3">
                        Here you can find the latest SciFI realeases!
                        </p>
                     </Container>
                    </Jumbotron> 
                 <Row className="d-flex justify-content-center">
                  <Container className="d-flex justify-content-center col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-n3 mb-4 rounded-0">
                    {books.map((book) => (
                        console.log(books)
                     <Card style={{ backgroundColor: '#6ea4bf', height: 600, width: 500 }}>
                       <Card.Body>
                         <Card.Text>
                           <h3>{book.title}</h3>
                         </Card.Text>
                       </Card.Body>
                        <Card.Img src={book.img} style={{ width: 300, height: 400 }} className="mx-auto my-5" />
                     </Card> 
                    ))}
                    </Container>
                    </Row>
                 
            </Container>
          
        )
    }
}

export default Home