import React, { Component } from 'react';
import './App.css';
import { Button, Col, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <Form row>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="middleware-id" sm={2}>Owner</Label>
            <Col sm={6}>
              <Input type="text" name="password" id="middleware-id" />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="application-name" sm={3}>Application Identifier (UAI, App ID) </Label>
            <Col sm={6}>
              <Input type="text" name="application-name" id="application-name" />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="middleware-id" sm={2}>Owner</Label>
            <Col sm={6}>
              <Input type="text" name="password" id="middleware-id" />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
            <Label for="middlewareSelect" sm={2}>Middleware</Label>
            <Col sm={6}>
              <Input type="select" name="selectMiddleware" id="middlewareSelect">
                <option>Apache</option>
                <option>Jboss</option>
                <option>Tomcat</option>
                <option>Weblogic</option>
                <option>Nodejs</option>
              </Input>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
