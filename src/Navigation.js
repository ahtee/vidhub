import React, { Component } from 'react';
import './App.css';
import logo from './VidHub.JPG';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input
 } from 'reactstrap';

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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand><img src={logo} alt="logo" class="logo" height="40"/></NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="mt-1" activeClassName="active" href="/gen" exact>Generate</NavLink>
            </NavItem>
              <NavItem>
                <NavLink activeClassName="active" href="/" exact><i class="fas fa-user-circle fa-2x"></i></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.build.ge.com//Digital-CT-APS-WebServices/app-config-json" target="_blank"><i className="fab fa-github fa-2x"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
