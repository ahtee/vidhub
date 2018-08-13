import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button, Form, FormGroup, Label, Input, FormText, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

export default class Login extends Component {

  render() {
    return (
    <div className="mt-5">
      <Jumbotron>
        <Row>
          <Col lg="8" md="6" sm="12">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Col>
          <Col lg="4" md="6" sm="12">
            <Card body className="login-max-width">
              <CardTitle>Returning Users</CardTitle>
              <Form>
                <FormGroup>
                  <Label htmlFor="user-email">Email:</Label>
                  <Input type="email" name="user-email" id="user-email" placeholder="John.Smith@ge.com" required/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="user-password">Password</Label>
                  <Input type="password" name="user-password" id="user-password" required/>
                </FormGroup>
                <Button type="submit" className="btn btn-success" block>Log In</Button>
                <Row className="mt-2">
                  <Col sm="6">
                    <a className="mt-3" href="/" block>Log In with SAML</a>
                  </Col>
                  <Col sm="6" classname="ml-auto">
                    <a className="mt-3" href="/" block>Forgot Password?</a>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
  }


}
