import React, { Component } from 'react';
import './App.css';
import logo from './VidHub.JPG';
import { Button, Form, FormGroup, Label, Input, Card, Row, Col } from 'reactstrap';

export default class Login extends Component {

  render() {
    return (
      <div>
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
                      <FormGroup>
                        <Label htmlFor="user-email">Username or email:</Label>
                        <Input type="email" name="user-email" id="user-email" required/>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="user-password">Password</Label>
                        <Input type="password" name="user-password" id="user-password" required/>
                      </FormGroup>
                      <div class="remember-me checkbox">
                        <FormGroup className="ml-4">
                          <Label htmlFor="remember">
                            <Input type="checkbox" name="remember" id="remember" value="0" />
                            <span className="pull-left">Remember me</span>
                            <div className="pull-right forgot-password">
                              <a href="/forgot">Forgot your password?</a>
                            </div>
                          </Label>
                        </FormGroup>
                      </div>
                      <Button type="submit" className="btn btn-success" block>Sign In</Button>
                    </Form>
                  </div>
                  <div className="login-box tab-pane" id="register-pane" role="tabpanel">
                    <Form>
                      <FormGroup>
                        <Label htmlFor="name">Full name:</Label>
                        <Input type="text" name="fullname" id="fullname" required/>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="username">Username:</Label>
                        <Input type="text" name="username" id="username" required/>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" name="email" id="email" required/>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="email_confirmation">Email confirmation:</Label>
                        <Input type="email" name="email" id="email" required/>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password:</Label>
                        <Input type="password" name="password" id="password" required/>
                      </FormGroup>
                      <div className="terms-and-conditions checkbox mt-3">
                        <FormGroup className="ml-4">
                          <Label htmlFor="terms-and-conditions">
                            <Input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" value="0" required />
                            <span>I have read and agree to the <a href="/">Terms and Conditions</a></span>
                          </Label>
                        </FormGroup>
                      </div>
                      <Button type="submit" className="btn btn-primary" block>Register</Button>
                    </Form>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon class="svg-no-scroll svg--sm" fill="green" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon class="svg-no-scroll svg--lg" fill="green" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
        </svg>
      </div>
    );
  }
}
