import React, { Component } from 'react';
import './App.css';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default class FormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      applicationOwner: null,
      applicationId: null,
      environmentId: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Line 14
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { res } = this.state;

    return (
      <Form row onSubmit={this.handleSubmit}>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="applicationOwner">Owner Email</Label>
          <Col sm="12" md="12">
            <Input type="email" name="applicationOwner" id="applicationOwner" value={this.state.applicationOwner} onChange={this.handleChange} required />
          </Col>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="applicationId">App Identifier</Label>
          <Col sm="12" md="12">
            <Input type="text" name="applicationId" id="applicationId" pattern="\s*(\S\s*){6,}" value={this.state.applicationId} onChange={this.handleChange} required/>
          </Col>
        </FormGroup>

        <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
          <Label htmlFor="environmentId">Environment</Label>
          <Col sm="12" md="12">
            <Input type="select" name="environmentId" id="environmentId" multiple required value={this.state.environmentId} onChange={this.handleChange}>
              <option>Development</option>
              <option>Stage / Test</option>
              <option>Production</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm="12" md="12">
            <Button type="submit" value="Submit" className="btn btn-success mt-3" block>Submit</Button>
          </Col>
        </FormGroup>

        <div className="mt-3 container res-block">
          <pre>{res}</pre>
        </div>
      </Form>


    );
  }
}
