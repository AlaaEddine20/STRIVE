import React from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  DropdownButton,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import Comments from "./Comments";

let booksCategory = ["fantasy", "history", "horror", "romance", "scifi"];

let books = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

class Home extends React.Component {
  state = {
    books: books.fantasy,
    selectedCategory: "",
  };

  handleDropdownChange = (category) => {
    this.setState({ books: books[category] });
  };

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#b3cdd1" }}>
        <Row className="d-flex justify-content-center no-gutters">
          <Jumbotron
            fluid
            className="w-100 bg-transparent"
            style={{ color: "#2d2d34", fontFamily: "Satisfy", fontSize: 26 }}
          >
            <Container>
              <h1>Welcome to my book store</h1>
              <p className="mt-3">
                Here you can find the latest SciFI realeases!
              </p>
            </Container>
          </Jumbotron>

          <DropdownButton
            as={InputGroup.Prepend}
            id="dropdown-basic-button"
            title={"Choose category"}
            className="mb-5"
          >
            {booksCategory.map((category, key) => (
              <Dropdown.Item
                key={key}
                href="#/action-1"
                onClick={() => this.handleDropdownChange(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          <Row className="d-flex justify-content-center w-100">
            <Col xs={8}>
              {this.state.books.map((book, key) => (
                <Card
                  key={key}
                  className="mx-3 mb-5"
                  style={{ backgroundColor: "black", height: 570, width: 310 }}
                >
                  <h3 style={{ color: "white", fontSize: "1.2rem" }}>
                    {book.title}
                  </h3>
                  <Card.Img
                    src={book.img}
                    style={{ width: 300, height: 470, objectFit: "cover" }}
                    className="mx-auto my-auto"
                    onClick={() => this.setState({ selectedBook: book })}
                  />
                </Card>
              ))}
            </Col>
            <Col>
              <Comments book={this.state.selectedBook} />
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default Home;
