import React from "react";
import horrorBooks from "../data/horror.json";
import historyBooks from "../data/history.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";
import fantasyBooks from "../data/fantasy.json";
import { Container, Row, Dropdown, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    allBooks: [
      ...horrorBooks,
      ...historyBooks,
      ...romanceBooks,
      ...scifiBooks,
      ...fantasyBooks,
    ],
    filteredBooks: [],
  };

  render() {
    return (
      <Container
        fluid
        style={{ backgroundColor: "black" }}
        className="d-flex justify-content-center"
      >
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              custom
              onChange={(e) =>
                this.setState({
                  filteredBooks: this.state.allBooks.filter(
                    (book) =>
                      book.category === e.currentTarget.value.toLowerCase()
                  ),
                })
              }
            >
              <option>Fantasy</option>
              <option>Horror</option>
              <option>Romance</option>
              <option>History</option>
              <option>Scifi</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Row className="text-center d-flex">
          {this.state.filteredBooks.length > 0
            ? this.state.filteredBooks.map((book, key) => {
                return <SingleBook data={book} key={key} />;
              })
            : this.state.allBooks.map((book, key) => {
                return <SingleBook data={book} key={key} />;
              })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
