import React, { Component } from 'react';
import './App.css';
import { Button, Container, Form, Card } from 'react-bootstrap';

export default class Forgot extends Component {
  render() {
    return (
      <Container fluid>
        <h2 className="text-center mt-3 mb-3">Forgot password?</h2>
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto align-middle">
          <Card body>
            <Form>
              <Form.Group>
                <Form.Label htmlFor="name">
                  Enter your Email Address:
                </Form.Label>
                <Form.Control
                  type="email"
                  name="fullname"
                  id="email"
                  required
                />
              </Form.Group>
              <Button type="submit" className="btn btn-danger pull-right">
                Send Email
              </Button>
            </Form>
          </Card>
        </div>
      </Container>
    );
  }
}
