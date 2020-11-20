import React from "react";
import { Modal, Button } from "react-bootstrap";

class Example extends React.Component {
  state = {
    show: false,
  };

  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <>
        <Button
          onClick={() => {
            this.handleModal();
          }}
          variant="secondary"
        >
          Review
        </Button>

        <Modal show={this.state.show}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.handleModal();
              }}
              variant="secondary"
            >
              Close
            </Button>
            <Button variant="primary">Sumbit Comment</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Example;
