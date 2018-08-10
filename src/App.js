import React, { Component } from 'react';
import './App.css';
import { Button, Col, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Form row>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="middleware-id">Owner</Label>
            <Col sm={12} md={6}>
              <Input type="text" name="password" id="middleware-id" />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="application-name">Application Identifier (UAI, App ID) </Label>
            <Col sm={12} md={6}>
              <Input type="text" name="application-name" id="application-name" />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="middleware-id">Owner</Label>
            <Col sm={12} md={6}>
              <Input type="text" name="password" id="middleware-id" />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="middlewareSelect">Middleware</Label>
            <Col sm={12} md={6}>
              <Input type="select" name="selectMiddleware" id="middlewareSelect" required>
                <option disabled selected value> -- select an option -- </option>
                <option>Apache</option>
                <option>Jboss</option>
                <option>Tomcat</option>
                <option>Weblogic</option>
                <option>Nodejs</option>
              </Input>
            </Col>
          </FormGroup>
          <Col sm={12} md={6}>
            <Button className="btn btn-success btn-lg btn-block mt-3">Generate</Button>
          </Col>
        </Form>
      </div>
    );
  }
}
