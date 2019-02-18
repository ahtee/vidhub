import React, { Component } from 'react';
import './App.css';
import logo from './VidHub.JPG';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

export default class Login extends Component {

  render() {
    return (
        <div className="container mt-5">
          <Row>
            <Col sm={7} className="pull-left">
              <h1 className="display-3"><img src={logo} alt="logo" height="200"/></h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="mt-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Col>
            <Col sm={5} className="pull-right">
              <Card body className="login-max-width">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#login-pane" data-toggle="tab" aria-expanded="false">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#register-pane" data-toggle="tab" aria-expanded="false">Register</a>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div className="active login-box tab-pane" id="login-pane" role="tabpanel">
                    <Form>
                      <Form.Group>
                        <Form.Label htmlFor="user-email">Username or email:</Form.Label>
                        <Form.Control type="email" name="user-email" id="user-email" required/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="user-password">Password</Form.Label>
                        <Form.Control type="password" name="user-password" id="user-password" required/>
                      </Form.Group>
                      <div class="remember-me checkbox">
                        <Form.Group className="ml-4">
                          <Form.Label htmlFor="remember">
                            <Form.Control type="checkbox" name="remember" id="remember" value="0" />
                            <span className="pull-left">Remember me</span>
                            <div className="pull-right forgot-password">
                              <a href="/forgot">Forgot your password?</a>
                            </div>
                          </Form.Label>
                        </Form.Group>
                      </div>
                      <Button type="submit" className="btn btn-success" block>Sign In</Button>
                    </Form>
                  </div>
                  <div className="login-box tab-pane" id="register-pane" role="tabpanel">
                    <Form>
                      <Form.Group>
                        <Form.Label htmlFor="name">Full name:</Form.Label>
                        <Form.Control type="text" name="fullname" id="fullname" required/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="username">Username:</Form.Label>
                        <Form.Control type="text" name="username" id="username" required/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="email">Email:</Form.Label>
                        <Form.Control type="email" name="email" id="email" required/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="email_confirmation">Email confirmation:</Form.Label>
                        <Form.Control type="email" name="email" id="email" required/>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label htmlFor="password">Password:</Form.Label>
                        <Form.Control type="password" name="password" id="password" required/>
                      </Form.Group>
                      <div className="terms-and-conditions checkbox mt-3">
                        <Form.Group className="ml-4">
                          <Form.Label htmlFor="terms-and-conditions">
                            <Form.Control type="checkbox" name="terms-and-conditions" id="terms-and-conditions" value="0" required />
                            <span>I have read and agree to the <a href="/">Terms and Conditions</a></span>
                          </Form.Label>
                        </Form.Group>
                      </div>
                      <Button type="submit" className="btn btn-primary" block>Register</Button>
                    </Form>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }
}
