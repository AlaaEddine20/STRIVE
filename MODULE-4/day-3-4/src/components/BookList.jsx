import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  render() {
    return (
      <Container>
        {}
        <SingleBook />
      </Container>
    );
  }
}

export default BookList;
