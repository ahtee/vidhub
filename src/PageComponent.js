import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import FormComponent from './FormComponent';

export default class PageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.page) {
      case "HomePage":
        return (
          <Login />
        );
        break;
      case "ListWorkersPage":
        return (
          <FormComponent />
        );
        break;
      default:
        return (
          <Login />
        );
    }
  }
}
