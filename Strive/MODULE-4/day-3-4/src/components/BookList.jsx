import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  render() {
    return (
      <Container>
        {}
        <SingleBook item={book} />
      </Container>
    );
  }
}

export default BookList;
