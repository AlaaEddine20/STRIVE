import React from "react";
import horrorBooks from "../data/horror.json";
import historyBooks from "../data/history.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";
import fantasyBooks from "../data/fantasy.json";
import { Container, Row, Form } from "react-bootstrap";
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

  handleRateComment = (book) => {
    console.log(book);
  };

  render() {
    return (
      <>
        <Container
          fluid
          style={{ backgroundColor: "#574240" }}
          className="d-flex justify-content-center"
        >
          <Row>
            <Form
              style={{ color: "white", width: 100, backgroundColor: "#611711" }}
            >
              <Form.Group id="exampleForm.SelectCustom">
                <Form.Label className="mt-2 ml-2">Category</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "black", color: "white" }}
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
          </Row>
          <Row
            className="text-center d-flex mx-auto"
            style={{ marginTop: "7rem" }}
          >
            {this.state.filteredBooks.length > 0
              ? this.state.filteredBooks.map((book, key) => {
                  return <SingleBook data={book} key={key} />;
                })
              : this.state.allBooks.map((book, key) => {
                  return <SingleBook data={book} key={key} />;
                })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
