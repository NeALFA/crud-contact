import React, { Component } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export class ContactForm extends Component {
  render() {
    const { submit, handleData, handleLike, selected, data } = this.props;
    return (
      <Form onSubmit={submit}>
        <Row className="my-3">
          <Col>
            <Form.Control
              id="firstName"
              value={data.firstName}
              placeholder="First name"
              onChange={handleData}
            />
          </Col>
          <Col>
            <Form.Control
              id="lastName"
              placeholder="Last name"
              value={data.lastName}
              onChange={handleData}
            />
          </Col>
        </Row>

        <Row>
          <Col className="my-1">
            <InputGroup>
              <InputGroup.Text>+998</InputGroup.Text>
              <Form.Control
                id="number"
                value={data.number}
                onChange={handleData}
                type="number"
                placeholder="(xx) - 123 - 45 - 67"
              />
            </InputGroup>
          </Col>
          <Col>
            <Form.Select
              id="category"
              value={data.category}
              onChange={handleData}
              className="my-1"
              aria-label="Default select example"
            >
              <option value="Other">Other</option>
              <option value="Family">Family</option>
              <option value="Friends">Friends</option>
              <option value="Relatives">Relatives</option>
            </Form.Select>
          </Col>
          <Col xs="auto" className="my-1">
            <Form.Check
              label="Favorite"
              id="favorite"
              value={data.favorite}
              onClick={handleLike}
              type="checkbox"
            />
          </Col>
        </Row>
        <Button className="w-100" type="submit">
          {selected ? "Edit" : "Add"} todo
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
