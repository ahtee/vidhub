import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
 import { Link } from 'react-router-dom';


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
      <div>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Generate JSON</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="mt-1"><Link to="/App">Generate</Link></NavLink>
            </NavItem>
              <NavItem>
                <NavLink href="/" className="mt-1"><Link to="/Login">Log In</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.build.ge.com//Digital-CT-APS-WebServices/app-config-json" target="_blank"><i className="fab fa-github fa-2x"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    );
  }
}
