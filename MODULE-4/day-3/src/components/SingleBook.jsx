import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import Modal from "./Modal";

class SingleBook extends React.Component {
  render() {
    return (
      <>
        <Col>
          <Card
            style={{
              width: 300,
              height: 530,
              marginBottom: "1rem",
              marginLeft: "auto",
              backgroundColor: "#5c0700",
            }}
          >
            <Card.Title
              style={{ fontSize: "1rem", marginBottom: "1rem", color: "white" }}
            >
              {this.props.data.title}
            </Card.Title>
            <Card.Img
              className="mx-auto my-auto"
              src={this.props.data.img}
              style={{ width: 220, height: 350, objectFit: "cover" }}
            />
            <Modal />
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
