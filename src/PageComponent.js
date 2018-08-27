import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Login from './Login';
import FormComponent from './FormComponent';

export default class PageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {page: "ListWorkersPage"};
    this.handleShowPage = this.handleShowPage.bind(this);
  }

  handleShowPage(page) {
    this.state.page = page;
    this.setState(this.state);
  }

  render() {
    switch(this.props.page) {
      case "/":
        return (
          <div>
            <Navigation handleShowPage={this.handleShowPage}/>
            <Login page={this.state.page}/>
          </div>
        );
        break;
      case "/generate":
        return (
          <FormComponent page={this.state.page}/>
        );
        break;
      default:
        return (
          <Login />
        );
    }
  }
}
