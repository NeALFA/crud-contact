import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class SearchForm extends Component {
  render() {
    const { filterCategory, handleSearch, filterABC } = this.props;
    return (
      <InputGroup className=" col-2 my-3">
        <Form.Control placeholder="Search......." onChange={handleSearch} />

        <Form.Select
          id="category"
          onChange={filterCategory}
          variant="outline-secondary"
        >
          <option value="all">All</option>
          <option value="other">Other</option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="relatives">Relatives</option>
        </Form.Select>

        <Form.Select
          id="category"
          onChange={filterABC}
          variant="outline-secondary"
        >
          <option value="1-2">1-2</option>
          <option value="abc">A-Z</option>
          <option value="cba">Z-A</option>
        </Form.Select>
      </InputGroup>
    );
  }
}

export default SearchForm;
