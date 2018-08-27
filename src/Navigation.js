import React, { Component } from 'react';
import './App.css';
import PageComponent from './PageComponent';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {page: "HomePage"};
    this.handleShowPage = this.handleShowPage.bind(this)

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleShowPage(page) {
    this.state.page = page
    this.setState(this.state);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container-fluid">
      <Navbar color="dark" dark expand="md">
          <NavbarBrand>Generate JSON</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="mt-1" onClick={() => this.props.handleShowPage("HomePage")}>Generate</NavLink>
            </NavItem>
              <NavItem>
                <NavLink className="mt-1" onClick={() => this.props.handleShowPage("ListWorkersPage")}>Log In</NavLink>
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
