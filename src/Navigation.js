import React, { Component } from 'react';
import './App.css';
import logo from './VidHub.JPG';
import user from './default-user.png';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="d-flex flex-justify-between flex-auto">
          <div className="d-flex">
            <a className="navbar-brand" href="/"><img src={logo} alt="VidHub" height="40"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav d-flex pl-2 pr-2 flex-items-center text-bold list-style-none">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Trending <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Discover</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Live
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Games</a>
                    <a className="dropdown-item" href="/">Vlogs</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Code</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search videos/streams..." aria-label="Search" />
            <input className="btn btn-outline-success my-2 my-sm-0" type="hidden" />
          </form>
        </div>
        <div className="d-flex justify-content-end ml-auto">
          <ul className="navbar-nav d-flex pl-2 pr-2 flex-items-center text-bold list-style-none">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={user} className="nav-user-login" alt="Log In" width="30" height="30" />
              </a>
              <div className="dropdown-menu p-3" aria-labelledby="navbarDropdown">
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
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">Trending <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Discover</a>
            </li>
          </ul>
        </div>
      </nav> 
        
    );
  }
}
