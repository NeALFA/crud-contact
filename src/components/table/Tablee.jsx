import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export class Tablee extends Component {
  render() {
    const { editContact, id, firstName, lastName, number, category, favorite } =
      this.props;
    const phoneHref = number;
    return (
      <Alert  
        variant="primary"
        className="d-flex justify-content-between align-items-center"
      >
        <p>
          {id} || {firstName} {lastName}
        </p>
        <p>{category}</p>
        <p> {number} </p>
        <div>
          {favorite ? (
            <button className="btn me-3">
              <img src="/star.png" alt="" />
            </button>
          ) : (
            <button className="btn me-3">
              <img src="/star-blakc.png" alt="" />
            </button>
          )}
          <button
            onClick={() => editContact(id)}
            className="btn btn-primary me-3"
          >
            Edit {id}
          </button>
          <a href={`tel:${phoneHref}`} className="btn btn-success">
            Call him
          </a>
        </div>
      </Alert>
    );
  }
}

export default Tablee;
