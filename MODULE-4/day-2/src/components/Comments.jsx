import React from "react";

export default class Comments extends React.Component {
  state = {
    comments: [],
  };

  componentDidUpdate = () => {
    //(prevProps) => {
    //if (prevProps.book.asin !== this.props.book.asin) {
    this.getComments();
    //}
  };

  getComments = async () => {
    //fetch qui dentro
    if (this.props.book) {
      //fetch
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmJiY2E2YjBiOTI1ZTAwMTcyOTU2NWMiLCJpYXQiOjE2MDYxNDI1NzIsImV4cCI6MTYwNzM1MjE3Mn0.35iyzavLHuIHm6NXO2hGQWCgAmikhjVVT2kgf69QTac",
            "Content-Type": "appliscation/json",
          },
        }
      );
      let comments = await response.json();

      this.setState({ comments });
    }
  };

  render() {
    return (
      <div className="position-fixed">
        {(this.props.book && this.props.book.title) || ""}
        <div>
          {this.state.comments.length > 0 &&
            this.state.comments.map((comment) => (
              <div>{JSON.stringify(comment)}</div>
            ))}
        </div>
      </div>
    );
  }
}
