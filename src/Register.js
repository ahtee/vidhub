import React, { Component } from 'react';
import './App.css';
import { Button, Form, Card } from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      username: '',
      email: '',
      emailConfirmation: '',
      password: '',
      termsAgreed: '0'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    this.setState({
      fullname: target.value,
      username: target.value,
      email: target.value,
      emailConfirmation: target.value,
      password: target.value,
      termsAgreed: e.target.value
    });
  }

  handleSubmit(e) {
    alert('Form was submitted successfully!');
    e.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center mt-3 mb-3">
          Create an account to get started
        </h2>
        <div className="row mb-3">
          <div className="col-md-4 mx-auto">
            <Card body>
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="name">Full name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="username">Username:</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email_confirmation">
                    Email confirmation:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="emailConfirmation"
                    id="emailConfirmation"
                    value={this.state.emailConfirmation}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="password">Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
                <div className="terms-and-conditions checkbox mt-3">
                  <Form.Group className="ml-4">
                    <Form.Label htmlFor="terms-and-conditions">
                      <Form.Control
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        value={this.state.termsAgreed}
                        onChange={this.handleChange}
                        required
                      />
                      <span>
                        I have read and agree to the{' '}
                        <a href="/">Terms and Conditions</a>
                      </span>
                    </Form.Label>
                  </Form.Group>
                </div>
                <Button type="submit" className="btn btn-primary" block="true">
                  Create Account
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
