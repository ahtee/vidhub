import React, { Component } from 'react';
import './App.css';
import { Button, Col, Form, FormGroup, Label, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const inputParsers = {
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

function stringifyFormData(formData) {
  const data = {};
  for (let key of formData.keys()) {
    data[key] = formData.get(key);
  }
  return JSON.stringify(data, null, 2);
}

export default class App extends Component {

  constructor() {
      super();
      this.state = {
        dropdownOpen: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      if (!event.target.checkValidity()) {
      	this.setState({
          invalid: true,
          displayErrors: true,
        });
        return;
      }
      const form = event.target;
      const data = new FormData(form);

      for (let name of data.keys()) {
        const input = form.elements[name];
        const parserName = input.dataset.parse;
        console.log('parser name is', parserName);
        if (parserName) {
          const parsedValue = inputParsers[parserName](data.get(name))
          data.set(name, parsedValue);
        }
      }

      this.setState({
      	res: stringifyFormData(data),
        invalid: false,
        displayErrors: false,
      });
  }

  render() {
    const { res } = this.state;
    return (
      <div className="container mt-4">

        <Form row onSubmit={this.handleSubmit}>
          <FormGroup>
            <ButtonDropdown className="ml-3" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Select Setting
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Select a default setting</DropdownItem>
                <DropdownItem>Cloud</DropdownItem>
                <DropdownItem>On Premises</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset Form</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>

          <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
            <Label htmlFor="application-owner">Owner Email</Label>
            <Col sm={12} md={12}>
              <Input type="email" name="application-owner" id="application-owner" placeholder="ex: John.Smith@ge.com" value={this.state.value} onChange={this.handleChange} required />
            </Col>
          </FormGroup>

          <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
            <Label htmlFor="application-id">Application Identifier</Label>
            <Col sm={12} md={12}>
              <Input type="text" name="application-id" id="application-id" placeholder="ex: UAI123456, 123456" pattern="\s*(\S\s*){6,}" value={this.state.value} onChange={this.handleChange} required/>
            </Col>
          </FormGroup>

          <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
            <Label htmlFor="middleware-selected">Middleware</Label>
            <Col sm={12} md={12}>
              <Input type="select" name="middleware-selected" id="middleware-selected" required value={this.state.value} onChange={this.handleChange}>
                <option disabled selected value> -- select an option -- </option>
                <option>Apache</option>
                <option>Jboss</option>
                <option>Tomcat</option>
                <option>Weblogic</option>
                <option>Nodejs</option>
              </Input>
            </Col>
          </FormGroup>

          <Col sm={12} md={12}>
            <Button type="submit" value="Submit" className="btn btn-success mt-2">Submit</Button>
          </Col>
        </Form>

        <div className="mt-2 container res-block">
          <pre>{res}</pre>
        </div>
      </div>
    );
  }
}
