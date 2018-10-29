import React, { Component } from 'react';
import './App.css';
import logo from './VidHub.JPG';
import { Button, Form, FormGroup, Label, Input, Card, Row, Col } from 'reactstrap';

export default class Login extends Component {

  render() {
    return (

        <div className="container mt-5">
          <Row>
            <Col sm={7} className="pull-left">
              <h1 className="display-3"><img src={logo} alt="logo" /></h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="mt-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Col>
            <Col sm={5} className="pull-right">
              <Card body className="login-max-width">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#login-pane" data-toggle="tab" aria-expanded="false">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#register-pane" data-toggle="tab" aria-expanded="false">Register</a>
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
                              <a href="/">Forgot your password?</a>
                            </div>
                          </Label>
                        </FormGroup>
                      </div>
                      <Button type="submit" className="btn btn-success" block="true">Sign In</Button>
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
                      <Button type="submit" className="btn btn-primary" block="true">Register</Button>
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
