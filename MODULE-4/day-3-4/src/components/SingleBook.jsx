import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import horror from "../books/horror.json";
import history from "../books/history.json";
import scifi from "../books/scifi.json";
import romance from "../books/romance.json";

class SingleBook extends React.Component {
  state = {
    books: [],
  };

  render() {
    return (
      <Container>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{books.title}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default SingleBook;
